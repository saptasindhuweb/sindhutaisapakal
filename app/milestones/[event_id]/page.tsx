"use client";

import { events } from "@/lib/data/events";
import { useParams, useRouter } from "next/navigation";

const EventDetailPage = () => {
    const { event_id } = useParams();
    const router = useRouter();

    const event = events.find((e) => e.id === event_id);
    if (!event) return null;

    const upcomingEvents = events.filter(
        (e) => new Date(e.date) > new Date() && e.id !== event.id
    );

    return (
        <main className="py-28 mt-20 grid grid-cols-8 bg-white">
            <div className="col-span-1" />
            <div className="col-span-6">
                {/* COVER */}
                <img
                    src={event.coverImage}
                    className="w-full h-[500px] object-cover rounded-3xl mb-10"
                />

                {/* DETAILS */}
                <p className="text-sm text-gray-500 mb-2">
                    {new Date(event.date).toDateString()}
                </p>

                <h1 className="text-3xl font-bold mb-6">
                    {event.title}
                </h1>

                <p className="text-gray-700 leading-relaxed mb-10">
                    {event.description}
                </p>

                {/* EXTRA PHOTOS */}
                {/* EXTRA PHOTOS — MASONRY GRID */}
                {event.images && event.images.length > 0 && (
                    <div className="mb-16">
                        <h2 className="text-2xl font-bold mb-6">
                            Event Gallery
                        </h2>

                        <div className="columns-1 sm:columns-2 md:columns-3 gap-6">
                            {event.images.map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    alt=""
                                    className="mb-6 w-full rounded-2xl object-cover break-inside-avoid"
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* UPCOMING EVENTS */}
                {upcomingEvents.length > 0 && (
                    <>
                        <h2 className="text-2xl font-bold mb-6">
                            Upcoming Events
                        </h2>

                        <div className="grid md:grid-cols-3 gap-6">
                            {upcomingEvents.map((item) => (
                                <div
                                    key={item.id}
                                    onClick={() =>
                                        router.push(`/milestones/${item.id}`)
                                    }
                                    className="cursor-pointer rounded-2xl border bg-white shadow-sm overflow-hidden"
                                >
                                    <img
                                        src={item.coverImage}
                                        className="h-40 w-full object-cover"
                                    />
                                    <div className="p-4">
                                        <p className="text-xs text-gray-500 mb-1">
                                            {new Date(item.date).toDateString()}
                                        </p>
                                        <p className="font-semibold">
                                            {item.title}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
            <div className="col-span-1" />
        </main>
    );
};

export default EventDetailPage;