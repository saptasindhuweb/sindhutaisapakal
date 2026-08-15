"use client";

import Image from "next/image";
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
        <>
            <main className="py-28 grid grid-cols-8 bg-white max-sm:hidden">
                <div className="col-span-1" />
                <div className="col-span-6">
                    {/* COVER */}
                    <div className="relative w-full h-[500px] rounded-3xl overflow-hidden mb-10">
                      <Image src={event.coverImage} alt={event.title ?? ''} fill sizes="(max-width: 768px) 100vw, 75vw" className="object-cover" priority />
                    </div>

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
                                    <Image
                                        key={i}
                                        src={img}
                                        alt=""
                                        width={800}
                                        height={600}
                                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                                        className="mb-6 w-full h-auto rounded-2xl object-cover break-inside-avoid"
                                        loading="lazy"
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
                                        <div className="relative h-40 w-full overflow-hidden">
                                          <Image src={item.coverImage} alt={item.title ?? ''} fill sizes="33vw" className="object-cover" loading="lazy" />
                                        </div>
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

            {/* ================= MOBILE EVENT DETAIL ================= */}
            <main className="py-4 bg-white px-4 md:hidden">

                {/* COVER */}
                <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-8">
                  <Image src={event.coverImage} alt={event.title ?? ''} fill sizes="100vw" className="object-cover" priority />
                </div>

                {/* DETAILS */}
                <p className="text-xs text-gray-500 mb-2">
                    {new Date(event.date).toDateString()}
                </p>

                <h1 className="text-2xl font-bold mb-5">
                    {event.title}
                </h1>

                <p className="text-sm text-gray-700 leading-relaxed mb-10">
                    {event.description}
                </p>

                {/* EVENT GALLERY */}
                {event.images && event.images.length > 0 && (
                    <div className="mb-14">
                        <h2 className="text-lg font-bold mb-6">
                            Event Gallery
                        </h2>

                        <div className="columns-2 gap-4 space-y-4">
                            {event.images.map((img, i) => (
                                <div key={i} className="break-inside-avoid overflow-hidden rounded-xl">
                                    <Image
                                        src={img}
                                        alt=""
                                        width={600}
                                        height={450}
                                        sizes="50vw"
                                        className="w-full h-auto object-cover rounded-xl"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* UPCOMING EVENTS */}
                {upcomingEvents.length > 0 && (
                    <div>
                        <h2 className="text-lg font-bold mb-6">
                            Upcoming Events
                        </h2>

                        <div className="space-y-6">
                            {upcomingEvents.map((item) => (
                                <div
                                    key={item.id}
                                    onClick={() => router.push(`/milestones/${item.id}`)}
                                    className="cursor-pointer rounded-2xl border bg-white shadow-sm overflow-hidden active:scale-[0.98] transition"
                                >
                                    <div className="relative h-48 w-full overflow-hidden">
                                      <Image src={item.coverImage} alt={item.title ?? ''} fill sizes="100vw" className="object-cover" loading="lazy" />
                                    </div>
                                    <div className="p-4">
                                        <p className="text-xs text-gray-500 mb-1">
                                            {new Date(item.date).toDateString()}
                                        </p>
                                        <p className="text-sm font-semibold">
                                            {item.title}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

            </main>
        </>
    );
};

export default EventDetailPage;
