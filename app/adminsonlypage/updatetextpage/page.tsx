"use client";

import * as React from "react";

type PageOption = {
  key: string;
  label: string;
};

type Segment = string | number;

type FlatField = {
  id: string;
  label: string;
  segments: Segment[];
  value: string;
  valueType: "string" | "number" | "boolean" | "null";
};

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function toLabel(segments: Segment[]): string {
  return segments
    .map((segment) => (typeof segment === "number" ? `[${segment}]` : segment))
    .join(".")
    .replace(/\.\[/g, "[");
}

function flattenContent(value: unknown): FlatField[] {
  const fields: FlatField[] = [];

  const visit = (current: unknown, segments: Segment[]) => {
    if (Array.isArray(current)) {
      current.forEach((item, index) => visit(item, [...segments, index]));
      return;
    }

    if (isObject(current)) {
      Object.entries(current).forEach(([key, item]) => visit(item, [...segments, key]));
      return;
    }

    const label = toLabel(segments);

    if (typeof current === "string") {
      fields.push({ id: label, label, segments, value: current, valueType: "string" });
      return;
    }

    if (typeof current === "number") {
      fields.push({ id: label, label, segments, value: String(current), valueType: "number" });
      return;
    }

    if (typeof current === "boolean") {
      fields.push({ id: label, label, segments, value: current ? "true" : "false", valueType: "boolean" });
      return;
    }

    if (current === null) {
      fields.push({ id: label, label, segments, value: "", valueType: "null" });
    }
  };

  visit(value, []);
  return fields;
}

function setValueAtPath(target: unknown, segments: Segment[], value: unknown): void {
  if (!segments.length) return;

  let cursor = target as Record<string, unknown> | unknown[];

  for (let i = 0; i < segments.length - 1; i++) {
    const segment = segments[i];
    if (typeof segment === "number") {
      cursor = (cursor as unknown[])[segment] as Record<string, unknown> | unknown[];
    } else {
      cursor = (cursor as Record<string, unknown>)[segment] as Record<string, unknown> | unknown[];
    }
  }

  const last = segments[segments.length - 1];
  if (typeof last === "number") {
    (cursor as unknown[])[last] = value;
  } else {
    (cursor as Record<string, unknown>)[last] = value;
  }
}

function looksLikeImagePath(value: string): boolean {
  const normalized = value.trim().toLowerCase();
  if (!normalized) return false;
  return /\.(png|jpg|jpeg|webp|gif|svg)$/.test(normalized) || normalized.includes("/assets/");
}

const UpdateTextPage = () => {
  const [checkingAuth, setCheckingAuth] = React.useState(true);
  const [authenticated, setAuthenticated] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [authError, setAuthError] = React.useState("");

  const [pages, setPages] = React.useState<PageOption[]>([]);
  const [selectedPage, setSelectedPage] = React.useState("");

  const [originalContent, setOriginalContent] = React.useState<unknown>(null);
  const [fields, setFields] = React.useState<FlatField[]>([]);

  const [loadingPages, setLoadingPages] = React.useState(false);
  const [loadingContent, setLoadingContent] = React.useState(false);
  const [saving, setSaving] = React.useState(false);

  const [statusMessage, setStatusMessage] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  const checkAuth = React.useCallback(async () => {
    setCheckingAuth(true);
    try {
      const response = await fetch("/api/admin/auth", { method: "GET" });
      const data = await response.json();
      setAuthenticated(Boolean(data?.authenticated));
    } catch {
      setAuthenticated(false);
    } finally {
      setCheckingAuth(false);
    }
  }, []);

  const loadPages = React.useCallback(async () => {
    setLoadingPages(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/admin/content", { method: "GET" });
      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.message || "Failed to load pages.");
      }

      const data = (await response.json()) as { pages?: PageOption[] };
      const loadedPages = data.pages || [];
      setPages(loadedPages);

      if (loadedPages.length > 0 && !selectedPage) {
        setSelectedPage(loadedPages[0].key);
      }
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Failed to load pages.");
    } finally {
      setLoadingPages(false);
    }
  }, [selectedPage]);

  const loadPageContent = React.useCallback(async (pageKey: string) => {
    if (!pageKey) return;

    setLoadingContent(true);
    setErrorMessage("");
    setStatusMessage("");

    try {
      const response = await fetch(`/api/admin/content?page=${encodeURIComponent(pageKey)}`, {
        method: "GET",
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.message || "Failed to load page content.");
      }

      const data = (await response.json()) as { content?: unknown };
      const content = data.content ?? {};
      setOriginalContent(content);
      setFields(flattenContent(content));
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Failed to load page content.");
      setOriginalContent(null);
      setFields([]);
    } finally {
      setLoadingContent(false);
    }
  }, []);

  React.useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  React.useEffect(() => {
    if (!authenticated) return;
    loadPages();
  }, [authenticated, loadPages]);

  React.useEffect(() => {
    if (!authenticated || !selectedPage) return;
    loadPageContent(selectedPage);
  }, [authenticated, selectedPage, loadPageContent]);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAuthError("");

    try {
      const response = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.message || "Login failed.");
      }

      setPassword("");
      setAuthenticated(true);
    } catch (error) {
      setAuthError(error instanceof Error ? error.message : "Login failed.");
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/auth", { method: "DELETE" }).catch(() => null);
    setAuthenticated(false);
    setPages([]);
    setSelectedPage("");
    setOriginalContent(null);
    setFields([]);
    setStatusMessage("");
    setErrorMessage("");
  };

  const handleFieldChange = (id: string, value: string) => {
    setFields((prev) => prev.map((field) => (field.id === id ? { ...field, value } : field)));
  };

  const handleSave = async () => {
    if (!selectedPage || originalContent === null) return;

    setSaving(true);
    setErrorMessage("");
    setStatusMessage("");

    try {
      const nextContent = structuredClone(originalContent);

      for (const field of fields) {
        let parsedValue: unknown = field.value;

        if (field.valueType === "number") {
          const n = Number(field.value);
          if (Number.isNaN(n)) {
            throw new Error(`Invalid number for field: ${field.label}`);
          }
          parsedValue = n;
        } else if (field.valueType === "boolean") {
          parsedValue = field.value === "true";
        } else if (field.valueType === "null") {
          parsedValue = null;
        }

        setValueAtPath(nextContent, field.segments, parsedValue);
      }

      const response = await fetch("/api/admin/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ page: selectedPage, content: nextContent }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.message || "Failed to save JSON file.");
      }

      setOriginalContent(nextContent);
      setStatusMessage("Saved successfully.");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Failed to save JSON file.");
    } finally {
      setSaving(false);
    }
  };

  if (checkingAuth) {
    return (
      <main className="min-h-screen bg-slate-50 p-6">
        <div className="mx-auto max-w-5xl rounded-2xl bg-white p-6 shadow-sm">Checking access...</div>
      </main>
    );
  }

  if (!authenticated) {
    return (
      <main className="min-h-screen mt-30 bg-slate-50 p-6">
        <div className="mx-auto max-w-md rounded-2xl bg-white p-6 shadow-sm">
          <h1 className="text-xl font-bold text-slate-900">Admin Login</h1>
          <p className="mt-2 text-sm text-slate-600">Enter password to access page-wise content editor.</p>

          <form onSubmit={handleLogin} className="mt-5 space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Admin password"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-sky-500"
              required
            />

            {authError && <p className="text-sm text-red-600">{authError}</p>}

            <button
              type="submit"
              className="w-full rounded-lg bg-sky-700 px-3 py-2 text-sm font-semibold text-white hover:bg-sky-800"
            >
              Login
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen mt-30 bg-slate-50 p-6">
      <div className="mx-auto max-w-6xl rounded-2xl bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Page Data Admin</h1>
            <p className="mt-1 text-sm text-slate-600">Edit text and image fields page-wise and save directly to `lib/data`.</p>
          </div>

          <button
            onClick={handleLogout}
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            Logout
          </button>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-[280px_1fr]">
          <div className="rounded-xl border border-slate-200 p-4">
            <label className="mb-2 block text-sm font-semibold text-slate-700">Select Page</label>
            <select
              value={selectedPage}
              onChange={(e) => setSelectedPage(e.target.value)}
              disabled={loadingPages || pages.length === 0}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-sky-500"
            >
              {pages.map((page) => (
                <option key={page.key} value={page.key}>
                  {page.label}
                </option>
              ))}
            </select>
            {loadingPages && <p className="mt-2 text-xs text-slate-500">Loading pages...</p>}
          </div>

          <div className="rounded-xl border border-slate-200 p-4">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-700">Page Fields</p>
              <button
                onClick={handleSave}
                disabled={!selectedPage || loadingContent || saving || fields.length === 0}
                className="rounded-lg bg-sky-700 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {saving ? "Saving..." : "Save Changes"}
              </button>
            </div>

            {loadingContent ? (
              <p className="text-sm text-slate-500">Loading content...</p>
            ) : fields.length === 0 ? (
              <p className="text-sm text-slate-500">No editable text/image fields found for this page.</p>
            ) : (
              <div className="max-h-[65vh] space-y-4 overflow-y-auto pr-1">
                {fields.map((field) => {
                  const multiline = field.value.length > 120 || field.value.includes("\n");
                  const isImage = field.valueType === "string" && looksLikeImagePath(field.value);

                  return (
                    <div key={field.id} className="rounded-lg border border-slate-200 p-3">
                      <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-600">
                        {field.label}
                      </label>

                      {field.valueType === "boolean" ? (
                        <select
                          value={field.value}
                          onChange={(e) => handleFieldChange(field.id, e.target.value)}
                          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-sky-500"
                        >
                          <option value="true">true</option>
                          <option value="false">false</option>
                        </select>
                      ) : multiline ? (
                        <textarea
                          value={field.value}
                          onChange={(e) => handleFieldChange(field.id, e.target.value)}
                          className="h-24 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-sky-500"
                        />
                      ) : (
                        <input
                          value={field.value}
                          onChange={(e) => handleFieldChange(field.id, e.target.value)}
                          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-sky-500"
                        />
                      )}

                      {isImage && (
                        <img
                          src={field.value}
                          alt={field.label}
                          className="mt-3 h-24 w-32 rounded border border-slate-200 object-cover"
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {statusMessage && <p className="mt-3 text-sm text-green-700">{statusMessage}</p>}
            {errorMessage && <p className="mt-3 text-sm text-red-600">{errorMessage}</p>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default UpdateTextPage;
