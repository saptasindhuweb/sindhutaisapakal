"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import DonateCTA from "@/components/shared/DonateCTA";

// ─── types ───────────────────────────────────────────────────────────────────

interface MilestoneDoc {
  _id: string;
  slug: string;
  title: string;
  thumbnail: string;
  youtubeLink?: string;
  photos: string[];
  description: string;
  shortDescription: string;
  date: string;
  type: "zep" | "yashodamai" | "update";
  published: boolean;
}

// ─── shared card ─────────────────────────────────────────────────────────────

function EventCard({ m, onNavigate }: { m: MilestoneDoc; onNavigate: (m: MilestoneDoc) => void }) {
  return (
    <article
      onClick={() => onNavigate(m)}
      className="cursor-pointer rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden hover:shadow-md transition"
    >
      <img src={m.thumbnail} alt={m.title} className="w-full h-48 object-cover" loading="lazy" />
      <div className="p-5">
        <p className="text-xs text-slate-500 mb-2">{new Date(m.date).toDateString()}</p>
        <h3 className="text-lg font-semibold text-slate-900 mb-2 leading-snug">{m.title}</h3>
        <p className="text-sm text-slate-700 leading-relaxed">{m.shortDescription}</p>
        {m.youtubeLink && <p className="text-xs text-sky-600 mt-2 font-medium">Watch recording →</p>}
      </div>
    </article>
  );
}

function EventCardMobile({ m, onNavigate }: { m: MilestoneDoc; onNavigate: (m: MilestoneDoc) => void }) {
  return (
    <article
      onClick={() => onNavigate(m)}
      className="cursor-pointer rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden active:scale-[0.98] transition"
    >
      <img src={m.thumbnail} alt={m.title} className="w-full h-44 object-cover" loading="lazy" />
      <div className="p-4">
        <p className="text-xs text-slate-500 mb-1">{new Date(m.date).toDateString()}</p>
        <h3 className="text-base font-semibold text-slate-900 mb-1 leading-snug">{m.title}</h3>
        <p className="text-sm text-slate-600 leading-relaxed">{m.shortDescription}</p>
        {m.youtubeLink && <p className="text-xs text-sky-600 mt-2 font-medium">Watch recording →</p>}
      </div>
    </article>
  );
}

// ─── skeleton card ────────────────────────────────────────────────────────────

function CardSkeleton() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
      <Skeleton className="w-full h-48" />
      <div className="p-5 space-y-2">
        <Skeleton className="h-3 w-1/3" />
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </div>
  );
}

function SkeletonGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {[1, 2, 3].map((i) => <CardSkeleton key={i} />)}
    </div>
  );
}

// ─── section header ───────────────────────────────────────────────────────────

function SectionHeader({ title, desktop = true }: { title: string; desktop?: boolean }) {
  if (!desktop) {
    return (
      <div className="flex items-center gap-3 mb-6">
        <span className="w-10 h-0.5 bg-black" />
        <h2 className="text-xl font-bold tracking-wide">{title}</h2>
      </div>
    );
  }
  return (
    <div className="col-span-8 grid grid-cols-8 w-full items-center mb-8">
      <div className="col-span-1 flex items-center justify-end pr-2">
        <span className="w-16 h-0.5 bg-black" />
      </div>
      <h2 className="text-2xl font-bold tracking-wide col-span-6">{title}</h2>
    </div>
  );
}

// ─── main page ────────────────────────────────────────────────────────────────

const MilestonesPage = () => {
  const router = useRouter();
  const [milestones, setMilestones] = React.useState<MilestoneDoc[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("/api/milestones")
      .then((r) => r.json())
      .then((data) => setMilestones(data.milestones ?? []))
      .catch(() => setMilestones([]))
      .finally(() => setLoading(false));
  }, []);

  const today = new Date();

  const zepEvents = React.useMemo(
    () => milestones.filter((m) => m.type === "zep").sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    [milestones]
  );
  const yashodamaiEvents = React.useMemo(
    () => milestones.filter((m) => m.type === "yashodamai").sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    [milestones]
  );
  const pastUpdates = React.useMemo(
    () => milestones.filter((m) => m.type === "update" && new Date(m.date) < today).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    [milestones]
  );
  const upcomingUpdates = React.useMemo(
    () => milestones.filter((m) => m.type === "update" && new Date(m.date) >= today).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()),
    [milestones]
  );

  const handleNavigate = (m: MilestoneDoc) => {
    if (m.youtubeLink) window.open(m.youtubeLink, "_blank", "noopener,noreferrer");
    else router.push(`/milestones/${m.slug}`);
  };

  const renderSection = (
    title: string,
    items: MilestoneDoc[],
    bg = "bg-white",
    emptyMsg = "Nothing to show yet."
  ) => (
    <>
      {/* Desktop */}
      <section className={`py-16 grid grid-cols-8 max-sm:hidden ${bg}`}>
        <SectionHeader title={title} />
        <div className="col-span-1" />
        <div className="col-span-6">
          {loading ? (
            <SkeletonGrid />
          ) : items.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-6">
              {items.map((m) => <EventCard key={m._id} m={m} onNavigate={handleNavigate} />)}
            </div>
          ) : (
            <p className="text-sm text-slate-500 italic">{emptyMsg}</p>
          )}
        </div>
        <div className="col-span-1" />
      </section>

      {/* Mobile */}
      <div className={`md:hidden px-4 py-10 ${bg}`}>
        <SectionHeader title={title} desktop={false} />
        {loading ? (
          <div className="space-y-5">
            {[1, 2].map((i) => <CardSkeleton key={i} />)}
          </div>
        ) : items.length > 0 ? (
          <div className="space-y-5">
            {items.map((m) => <EventCardMobile key={m._id} m={m} onNavigate={handleNavigate} />)}
          </div>
        ) : (
          <p className="text-sm text-slate-500 italic">{emptyMsg}</p>
        )}
      </div>
    </>
  );

  return (
    <main className="w-full bg-white">
      {/* Page title – desktop */}
      <div className="py-16 grid grid-cols-8 max-sm:hidden">
        <div className="col-span-1 flex items-center justify-end pr-2"><span className="w-16 h-0.5 bg-black" /></div>
        <h1 className="text-3xl font-bold tracking-wide col-span-6">MILESTONES</h1>
      </div>
      {/* Page title – mobile */}
      <div className="md:hidden px-4 pt-10 flex items-center gap-3">
        <span className="w-10 h-0.5 bg-black" />
        <h1 className="text-2xl font-bold tracking-wide">MILESTONES</h1>
      </div>

      {renderSection("ZEP EVENTS", zepEvents, "bg-white",
        "ZEP event data will appear here once added.")}

      {renderSection("YASHODAMAAI NATIONAL AWARDS", yashodamaiEvents, "bg-slate-50",
        "Award data will appear here once added.")}

      {renderSection("PAST UPDATES", pastUpdates, "bg-white",
        "No past updates to display.")}

      {renderSection("UPCOMING UPDATES", upcomingUpdates, "bg-slate-50",
        "No upcoming updates scheduled. Check back soon!")}

      <DonateCTA />
    </main>
  );
};

export default MilestonesPage;
