"use client";

import { events } from "@/lib/data/events";
import { useRouter } from "next/navigation";
import { useMemo } from "react";

const MilestonesPage = () => {
    const router = useRouter();
    const today = new Date();

    const { upcomingEvents, pastEvents } = useMemo(() => {
        const upcoming: typeof events = [];
        const past: typeof events = [];

        events.forEach((event) => {
            const eventDate = new Date(event.date);
            eventDate >= today ? upcoming.push(event) : past.push(event);
        });

        return { upcomingEvents: upcoming, pastEvents: past };
    }, []);

    const renderGrid = (list: typeof events) => (
        <div className="grid md:grid-cols-3 gap-6">
            {list.map((item) => (
                <article
                    key={item.id}
                    onClick={() => router.push(`/milestones/${item.id}`)}
                    className="cursor-pointer rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden hover:shadow-md transition"
                >
                    <img
                        src={item.coverImage}
                        alt={item.title}
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-5">
                        <p className="text-xs text-slate-500 mb-2">
                            {new Date(item.date).toDateString()}
                        </p>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">
                            {item.title}
                        </h3>
                        <p className="text-sm text-slate-700 leading-relaxed">
                            {item.shortDescription}
                        </p>
                    </div>
                </article>
            ))}
        </div>
    );

    return (
        <>
            <main className="py-28 mt-20 bg-white max-sm:hidden">

                <div className="col-span-6 space-y-20">
                    <div className=" grid grid-cols-8">
                        <div className="col-span-1" />

                        <h1 className="text-3xl font-bold">MILESTONES</h1>
                    </div>

                    {/* ===== UPCOMING EVENTS ===== */}
                    {upcomingEvents.length > 0 && (
                        <section className=" grid grid-cols-8">
                            <div className="col-span-1 flex items-center justify-end px-4 mb-4">
                                <span className="w-20 h-[2px] bg-black" />
                            </div>

                            <p className=" col-span-7 text-lg font-bold tracking-wide mb-4 flex items-center gap-2">
                                Upcoming Events
                            </p>
                            <div className="col-span-1" />


                            <div className="col-span-6 mt-10">
                                {renderGrid(upcomingEvents)}
                            </div>
                        </section>
                    )}

                    {/* ===== PAST EVENTS ===== */}
                    {pastEvents.length > 0 && (
                        <section className=" grid grid-cols-8">
                            <div className="col-span-1 flex items-center justify-end px-4 mb-4">
                                <span className="w-20 h-[2px] bg-black" />
                            </div>

                            <p className=" col-span-7 text-lg font-bold tracking-wide mb-4 flex items-center gap-2">
                                Padma Shri Dr. Sindhutai Sapkal's Yashodamaai Rashtria Puraskar
                            </p>
                            <div className="col-span-1" />


                            <div className="col-span-6 mt-10">
                                {renderGrid(pastEvents)}
                            </div>
                        </section>
                    )}
                    {pastEvents.length > 0 && (
                        <section className=" grid grid-cols-8">
                            <div className="col-span-1 flex items-center justify-end px-4 mb-4">
                                <span className="w-20 h-[2px] bg-black" />
                            </div>

                            <p className=" col-span-7 text-lg font-bold tracking-wide mb-4 flex items-center gap-2">
                                Zhep
                            </p>
                            <div className="col-span-1" />


                            <div className="col-span-6 mt-10">
                                {renderGrid(pastEvents)}
                            </div>
                        </section>
                    )}

                    {/* ===== PAST EVENTS ===== */}

                    {/* ===== PAST EVENTS ===== */}
                    {pastEvents.length > 0 && (
                        <section className=" grid grid-cols-8">
                            <div className="col-span-1 flex items-center justify-end px-4 mb-4">
                                <span className="w-20 h-[2px] bg-black" />
                            </div>

                            <p className=" col-span-7 text-lg font-bold tracking-wide mb-4 flex items-center gap-2">
                                Past Events
                            </p>
                            <div className="col-span-1" />


                            <div className="col-span-6 mt-10">
                                {renderGrid(pastEvents)}
                            </div>
                        </section>
                    )}
                </div>

                <div className="col-span-1" />
            </main>



            {/* ================= MOBILE MILESTONES ================= */}
            <main className="py-4  bg-white px-4 md:hidden">

                {/* PAGE TITLE */}
                <h1 className="text-2xl font-bold mb-12">
                    MILESTONES
                </h1>

                {/* ===== UPCOMING EVENTS ===== */}
                {upcomingEvents.length > 0 && (
                    <section className="mb-14">

                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-10 h-[2px] bg-black" />
                            <p className="text-base font-bold tracking-wide">
                                Upcoming Events
                            </p>
                        </div>

                        <div className="space-y-6">
                            {upcomingEvents.map((item) => (
                                <article
                                    key={item.id}
                                    onClick={() => router.push(`/milestones/${item.id}`)}
                                    className="cursor-pointer rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden active:scale-[0.98] transition"
                                >
                                    <img
                                        src={item.coverImage}
                                        alt={item.title}
                                        className="w-full h-52 object-cover"
                                    />

                                    <div className="p-4">
                                        <p className="text-xs text-slate-500 mb-2">
                                            {new Date(item.date).toDateString()}
                                        </p>

                                        <h3 className="text-base font-semibold text-slate-900 mb-2">
                                            {item.title}
                                        </h3>

                                        <p className="text-sm text-slate-700 leading-relaxed">
                                            {item.shortDescription}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>

                    </section>
                )}

                {/* ===== PAST EVENTS ===== */}
                {pastEvents.length > 0 && (
                    <section className="mb-14">

                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-10 h-[2px] bg-black" />
                            <p className="text-base font-bold tracking-wide">
                                Past Events
                            </p>
                        </div>

                        <div className="space-y-6">
                            {pastEvents.map((item) => (
                                <article
                                    key={item.id}
                                    onClick={() => router.push(`/milestones/${item.id}`)}
                                    className="cursor-pointer rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden active:scale-[0.98] transition"
                                >
                                    <img
                                        src={item.coverImage}
                                        alt={item.title}
                                        className="w-full h-52 object-cover"
                                    />

                                    <div className="p-4">
                                        <p className="text-xs text-slate-500 mb-2">
                                            {new Date(item.date).toDateString()}
                                        </p>

                                        <h3 className="text-base font-semibold text-slate-900 mb-2">
                                            {item.title}
                                        </h3>

                                        <p className="text-sm text-slate-700 leading-relaxed">
                                            {item.shortDescription}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>

                    </section>
                )}

            </main>
        </>
    );
};

export default MilestonesPage;