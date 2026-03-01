import crypto from "node:crypto";

const ADMIN_PASSWORD = process.env.ADMIN_PAGE_PASSWORD || "";
const SESSION_SECRET = process.env.ADMIN_SESSION_SECRET || "";
const SESSION_PAYLOAD = "admin-authenticated";

export function isPasswordConfigured(): boolean {
  return ADMIN_PASSWORD.length > 0 && SESSION_SECRET.length > 0;
}

export function verifyAdminPassword(input: string): boolean {
  if (!isPasswordConfigured()) return false;

  const a = Buffer.from(input || "", "utf8");
  const b = Buffer.from(ADMIN_PASSWORD, "utf8");

  if (a.length !== b.length) return false;

  return crypto.timingSafeEqual(a, b);
}

export function createSessionToken(): string {
  return crypto.createHmac("sha256", SESSION_SECRET).update(SESSION_PAYLOAD).digest("hex");
}

export function isValidSessionToken(token: string | undefined): boolean {
  if (!isPasswordConfigured() || !token) return false;
  return token === createSessionToken();
}
