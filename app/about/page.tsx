"use client";

import DonateCTA from "@/components/shared/DonateCTA";
import PageLoader from "@/components/shared/PageLoader";
import StatsSection from "@/components/shared/StatsSection";
import usePageReady from "@/hooks/usePageReady";
import { Goal } from "lucide-react";
import router from "next/router";
import { GiBullseye } from "react-icons/gi";
import { TiEye } from "react-icons/ti";
import { PiPlantFill } from "react-icons/pi";


const About = () => {
    const isPageReady = usePageReady();

    const timelineData = [
        {
            year: "1919",
            title: "Innovating from the start",
            description:
                "The foundation of the organisation was laid with a vision to serve humanity with compassion, dignity and responsibility.",
            image: "/assets/images/maii1.jpg",
        },
        {
            year: "1921",
            title: "Graduating our first class",
            description:
                "The organisation expanded its outreach and began structured care and education programs for children in need.",
            image: "/assets/images/maii2.jpg",
        },
        {
            year: "1950",
            title: "Expansion of care homes",
            description:
                "Multiple institutions were established to provide shelter, education and healthcare to orphans and the underprivileged.",
            image: "/assets/images/maii3.jpg",
        },
        {
            year: "2021",
            title: "Padma Shri Recognition",
            description:
                "Recognition at the national level for decades of selfless service and dedication towards society.",
            image: "/assets/images/maii4.jpg",
        },
        {
            year: "2022",
            title: "New Item",
            description:
                "Recognition at the national level for decades of selfless service and dedication towards society.",
            image: "/assets/images/maii5.jpg",
        },
    ];

    const maaiParivarData = [
        {
            parent: "Vanvasi Gopalkrushna Bahuddeshiy Mandal, Amravati",
            children: [
                {
                    name: "Mamata Bal Sadan, Saswad, Pune",
                    img: "/assets/images/maii1.jpg",
                },
                {
                    name: "Savitribai Phule Muliche Vasatigruh, Chikhaldara",
                    img: "/assets/images/maii2.jpg",
                },
            ],
        },
        {
            parent: "The Mother Global Foundation, Pune",
            children: [
                {
                    name: "Shree Manashanti Chhatralaya, Shirur",
                    img: "/assets/images/maii3.jpg",
                },
            ],
        },
    ];

    if (!isPageReady) {
        return <PageLoader />;
    }

    return (
        <main className="w-full">
            {/* ================= HERO + STATS + ORG STRUCTURE ================= */}<section className="relative w-full pt-28 pb-24 overflow-hidden">
                {/* ===== BACKGROUND LAYER ===== */}
                <div className="absolute inset-x-0 top-0 h-[48%]  z-0" />
                {/* ===== CONTENT LAYER ===== */}
                <div className="relative z- w-full">
                    {/* OUTER CARD */}
                    <div className="w-full rounded-2xl mt-8">

                        {/* ===== HERO TEXT ===== */}
                        <div className="grid grid-cols-8 text-center bg-[#eef8fb] rounded-2xl py-28 pb-40">
                            <div className="col-span-1" />

                            <div className="col-span-6">
                                <h1 className="text-4xl font-bold text-[#0f4c5c] leading-tight ">
                                    Serving humanity with compassion,
                                    <br />
                                    dignity and responsibility
                                </h1>

                                <p className="mt-4 text-gray-600">
                                    Inspired by Padma Shri Dr. Sindhutai Sapkal, our organisation
                                    works tirelessly to nurture orphans, protect animals and uplift
                                    the underprivileged.
                                </p>
                            </div>

                            <div className="col-span-1" />
                        </div>

                        {/* ===== STATS (OVERLAPS BACKGROUND) ===== */}
                        <div className="-mt-47">
                            <StatsSection />
                        </div>


                        <div className="bg-white py-16 grid grid-cols-8">
                            <div className="col-span-8 grid grid-cols-8 w-full justify-end items-center mb-8">
                                <div className=" col-span-1 flex items-center justify-end pr-2">


                                    <span className="w-16 h-[2px] bg-black" />
                                </div>

                                {/* <div className=" col-span-7 flex items-center gap-3 mb-8"> */}

                                {/* <span className="w-16 h-[2px] bg-black" /> */}
                                <h2 className="text-2xl font-bold tracking-wide col-span-4">FOUNDERS</h2>
                                {/* </div> */}
                            </div>

                            <div className=" col-span-8 grid grid-cols-4 p-8">
                                <div className="col-span-1" />
                                <div className="col-span-2 flex flex-col items-center justify-center">

                                    <img
                                        src="/assets/images/1.png"
                                        alt="Sindhutai Sapkal"
                                        className="rounded-3xl w-full object-cover h-[470px] object-[center_25%]"
                                    />
                                    <p className=" text-center text-2xl font-extrabold tracking-tight text-balance">
                                        Padma Shri Dr. Sou. Sindhutai Sapakal (Maai)
                                    </p>
                                </div>
                                <div className="col-span-1" />


                            </div>

                            <div className="col-span-1" />

                            {/* ROW 1 — 4 FOUNDERS */}

                            <div className="col-span-6 grid grid-cols-2 md:grid-cols-4 gap-8 mb-10 mt-10">

                                {[
                                    { name: "Founder Name 1", img: "/assets/images/maii1.jpg" },
                                    { name: "Founder Name 2", img: "/assets/images/maii2.jpg" },
                                    { name: "Founder Name 3", img: "/assets/images/maii3.jpg" },
                                    { name: "Founder Name 4", img: "/assets/images/maii4.jpg" },
                                ].map((person, i) => (
                                    <div
                                        key={i}
                                        className="overflow-hidden rounded-2xl bg-[#f6fbfd]"
                                    >
                                        {/* IMAGE */}
                                        <img
                                            src={person.img}
                                            alt={person.name}
                                            className="w-full h-[260px] object-cover"
                                        />

                                        {/* NAME */}
                                        <div className="py-4 text-center">
                                            <p className="font-semibold text-[#0f4c5c]">
                                                {person.name}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* ROW 2 — 3 FOUNDERS */}
                            <div className="col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                                {[
                                    { name: "Founder Name 5", img: "/assets/images/maii5.jpg" },
                                    { name: "Founder Name 6", img: "/assets/images/maii6.jpg" },
                                    { name: "Founder Name 7", img: "/assets/images/maii7.jpg" },
                                ].map((person, i) => (
                                    <div
                                        key={i}
                                        className="overflow-hidden rounded-2xl bg-[#f6fbfd]"
                                    >
                                        {/* IMAGE */}
                                        <img
                                            src={person.img}
                                            alt={person.name}
                                            className="w-full h-[260px] object-cover"
                                        />

                                        {/* NAME */}
                                        <div className="py-4 text-center">
                                            <p className="font-semibold text-[#0f4c5c]">
                                                {person.name}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* ================= ORGANISATION TIMELINE ================= */}
            <section className="bg-white grid grid-cols-8 ">
                <div className="col-span-8 grid grid-cols-8 w-full justify-end items-center mb-18">
                    <div className=" col-span-1 flex items-center justify-end pr-2">


                        <span className="w-16 h-[2px] bg-black" />
                    </div>

                    {/* <div className=" col-span-7 flex items-center gap-3 mb-8"> */}

                    {/* <span className="w-16 h-[2px] bg-black" /> */}
                    <h2 className="text-2xl font-bold tracking-wide col-span-4">JOURNEY</h2>
                    {/* </div> */}
                </div>
                <div className="col-span-1" />

                <div className="col-span-6 mx-auto px-6">
                    {/* Section Heading */}

                    {/* Timeline Wrapper */}
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gray-300 -translate-x-1/2" />

                        <div className="space-y-32">
                            {timelineData.map((item, index) => {
                                const isLeft = index % 2 === 0;

                                return (
                                    <div
                                        key={index}
                                        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative"
                                    >
                                        {/* DOT */}
                                        <div className="absolute left-1/2 w-4 h-4 bg-sky-500 rounded-full -translate-x-1/2 z-10" />

                                        {/* LEFT SIDE */}
                                        {isLeft ? (
                                            <>
                                                {/* TEXT */}
                                                <div className="md:pr-16 text-right">
                                                    <h3 className="text-3xl font-bold mb-2">
                                                        {item.year}
                                                    </h3>
                                                    <h4 className="text-xl font-semibold mb-4">
                                                        {item.title}
                                                    </h4>
                                                    <p className="text-gray-600 leading-relaxed">
                                                        {item.description}
                                                    </p>
                                                </div>

                                                {/* IMAGE */}
                                                <div className="md:pl-16">
                                                    <img
                                                        src={item.image}
                                                        alt={item.title}
                                                        className="w-full h-[280px] object-cover rounded-2xl"
                                                    />
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                {/* IMAGE */}
                                                <div className="md:pr-16 order-2 md:order-1">
                                                    <img
                                                        src={item.image}
                                                        alt={item.title}
                                                        className="w-full h-[280px] object-cover rounded-2xl"
                                                    />
                                                </div>

                                                {/* TEXT */}
                                                <div className="md:pl-16 order-1 md:order-2">
                                                    <h3 className="text-3xl font-bold mb-2">
                                                        {item.year}
                                                    </h3>
                                                    <h4 className="text-xl font-semibold mb-4">
                                                        {item.title}
                                                    </h4>
                                                    <p className="text-gray-600 leading-relaxed">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>




            <section className="bg-white grid grid-cols-8 mt-30">
                <div className="col-span-8 grid grid-cols-8 w-full justify-end items-center mb-18">
                    <div className=" col-span-1 flex items-center justify-end pr-2">


                        <span className="w-16 h-[2px] bg-black" />
                    </div>

                    {/* <div className=" col-span-7 flex items-center gap-3 mb-8"> */}

                    {/* <span className="w-16 h-[2px] bg-black" /> */}
                    <h2 className="text-2xl font-bold tracking-wide col-span-4">ORGANISATONS</h2>
                    {/* </div> */}
                </div>
                <div className="col-span-1" />
                <div className=" col-span-6">
                    <div className=" grid md:grid-cols-2 gap-12 items-center">
                        <div>

                            <h2 className="text-3xl font-bold leading-tight">
                                Sanmati
                            </h2>

                            <p className="mt-4 text-gray-600 leading-relaxed">
                                A soul out of life’s hardship was born as Mother to over a thousand
                                children and devoted her entire life to social service. After 70
                                years of lifespan (Born: 1948 – Died: 2022), she raised a grand
                                family of 220 sons-in-laws, 50 daughters-in-laws.
                            </p>

                            <p className="mt-3 text-gray-600 leading-relaxed">
                                She adopted more than 1200 orphaned children and provided them
                                food, shelter, and education. She was honored with Padma Shri in
                                2021.
                            </p>

                            <button onClick={() => router.push("/maii")} className="mt-5 text-sm font-semibold text-sky-700 hover:underline cursor-pointer">
                                Read More
                            </button>
                        </div>

                        <div className="flex justify-end">
                            <img
                                src="/assets/images/sanmati.png"
                                alt="Sindhutai Sapkal"
                                className="rounded-3xl max-w-md w-full object-cover h-[420px] object-[center_25%]"
                            />
                        </div>
                    </div>
                </div>
                <div className=" col-span-1">

                </div>
            </section>


            <section className="bg-white py-20 grid grid-cols-8">
                <div className=" col-span-1">

                </div>
                <div className=" col-span-6">
                    <div className=" grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <img
                                src="/assets/images/gopika.png"
                                alt="Children with Mai"
                                className="rounded-3xl h-[420px] max-w-md w-full object-cover"
                            />
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold leading-tight">
                                Gopika
                            </h2>

                            <p className="mt-4 text-gray-600 leading-relaxed">
                                Sindhutai gave away her own daughter “Mamata” to the Shrimant Dagdu
                                Sheth Halwai trust of Pune, to eliminate the feeling of partiality
                                between her own child and the adopted children.
                            </p>

                            <p className="mt-3 text-gray-600 leading-relaxed">
                                Years later and
                                after completing her education, Mamata-tai – as she is lovingly
                                called by the children, started assisting “Maai”. After the sad
                                demise of Sindhutai in Jan 2022, Mamata Sindhutai Sapakal undertook
                                the responsibility of children
                            </p>

                            <div className="mt-4 flex gap-6 text-sm font-semibold text-sky-700">
                                <span onClick={() => { router.push("/mamtatai") }} className="cursor-pointer hover:underline">Read More</span>
                                {/* <span onClick={() => (router.push("/sanmati"))} className="cursor-pointer hover:underline">
                  Saptasindhu
                </span> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">

                </div>
            </section>



             <section className="bg-white grid grid-cols-8 mt-30">

                <div className="col-span-1" />
                <div className=" col-span-6">
                    <div className=" grid md:grid-cols-2 gap-12 items-center">
                        <div>

                            <h2 className="text-3xl font-bold leading-tight">
                                Tirthrup
                            </h2>

                            <p className="mt-4 text-gray-600 leading-relaxed">
                                A soul out of life’s hardship was born as Mother to over a thousand
                                children and devoted her entire life to social service. After 70
                                years of lifespan (Born: 1948 – Died: 2022), she raised a grand
                                family of 220 sons-in-laws, 50 daughters-in-laws.
                            </p>

                            <p className="mt-3 text-gray-600 leading-relaxed">
                                She adopted more than 1200 orphaned children and provided them
                                food, shelter, and education. She was honored with Padma Shri in
                                2021.
                            </p>

                            <button onClick={() => router.push("/maii")} className="mt-5 text-sm font-semibold text-sky-700 hover:underline cursor-pointer">
                                Read More
                            </button>
                        </div>

                        <div className="flex justify-end">
                            <img
                                src="/assets/images/sanmati.png"
                                alt="Sindhutai Sapkal"
                                className="rounded-3xl max-w-md w-full object-cover h-[420px] object-[center_25%]"
                            />
                        </div>
                    </div>
                </div>
                <div className=" col-span-1">

                </div>
            </section>


            {/* ================= ABOUT HEADER ================= */}
            <section className="py-20 bg-white grid grid-cols-8 mt-20">



                <div className="col-span-1">
                </div>

                <div className="col-span-6 mt-4">

                    <div className="grid md:grid-cols-2 gap-16">
                        {/* LEFT */}
                        <div>
                            <h2 className="text-3xl font-bold mb-4 flex gap-4 items-center "><GiBullseye/> OUR MISSION</h2>
                            <p className="text-gray-700 leading-relaxed">
                                We are committed to work tirelessly & selﬂessly for the holistic welfare and upliftment of the orphans, the poor, the needy, the neglected and the underprivileged elements of the society, irrespective of their cast, religion, creed or gender, through their empowerment and rehabilitation, so as to welcome them as contributing members of the mainstream society.
                            </p>
                        </div>

                        {/* RIGHT */}
                        <div>
                            <h2 className="text-3xl font-bold mb-4 flex gap-4 items-center "><TiEye/> OUR VALUES</h2>
                            <p className="text-gray-700 leading-relaxed">
                                We see every sheltered child as a future responsible citizen and strive to provide them every opportunity for self-reliance. As representatives of Mai and her institutions, we commit to reaching and helping every weak, neglected, and needy individual, not only in our society or country, but across the entire world.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1" />
            </section>

            {/* ================= VALUES SECTION ================= */}
            <section className="bg-sky-50 py-20 grid grid-cols-8">
                <div className="col-span-1" />

                <div className="col-span-6">
                    <h2 className="text-3xl font-bold mb-10 flex gap-4 items-center"><PiPlantFill/>OUR VALUES</h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* LEFT VALUES */}
                        <ul className="space-y-6  list-disc list-inside ">
                            <li>
                                <strong>Love</strong>
                                <p className="ml-6">
                                    Love is the global bond that brings human beings together and creates a society that aspires to touch the skies with its feet ﬁrmly grounded. That love, is the very foundation of Mai’s life-work.
                                </p>
                            </li>

                            <li>
                                <strong>Acceptance</strong>
                                <p className="ml-6">
                                    As we walk the path of service, this teaching of Mai’s perpetually enlightens our way: “There is no bigger agony than that of being rejected, so fully accept the pain that comes your way ﬁrst, and then strive towards overcoming it”
                                </p>
                            </li>

                            <li>
                                <strong>Awareness</strong>
                                <p className="ml-6">
                                    “Teach us to laugh, dear God, but never let us forget the tears that we shed in the past” Walking with the present, with a ﬁrm awareness of our past prepares us for the future.
                                </p>
                            </li>
                        </ul>

                        {/* RIGHT VALUES */}
                        <ul className="space-y-6 list-disc list-inside ">
                            <li>
                                <strong>Trust</strong>
                                <p className=" ml-6">
                                    Mai’s struggle and her work inspires us to trust ourselves always, to win the trust of others and to never lose it.
                                </p>
                            </li>

                            <li>
                                <strong>Simplicity</strong>
                                <p className=" ml-6">
                                    Simplicity is synonymous with Mai’s life and work, and it is our duty to maintain its sanctity at all costs.
                                </p>
                            </li>

                            <li>
                                <strong>Forgiveness</strong>
                                <p className=" ml-6">
                                    “Forgiveness will always guide you on your way forward” This belief of Mai’s always guides us in the right direction.
                                </p>
                            </li>

                            <li>
                                <strong>Gratitude</strong>
                                <p className=" ml-6">
                                    We are, and will forever be grateful to the countless helping hands that we have been blessed with.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-span-1" />
            </section>

            {/* ================= MAAI PARIVAR ================= */}
            <section className="bg-white grid grid-cols-8 mt-30">
                <div className="col-span-8 grid grid-cols-8 w-full justify-end items-center mb-18">
                    <div className=" col-span-1 flex items-center justify-end pr-2">
                        <span className="w-16 h-[2px] bg-black" />
                    </div>
                    <h2 className="text-2xl font-bold tracking-wide col-span-4">
                        MAAI PARIVAR
                    </h2>
                </div>

                <div className="col-span-1" />
                <div className="col-span-6 space-y-14">
                    {maaiParivarData.map((group) => (
                        <div key={group.parent} className="space-y-6">
                            <h3 className="text-2xl font-bold text-black">
                                {group.parent}
                            </h3>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {group.children.map((org) => (
                                    <div
                                        key={org.name}
                                        className="group relative overflow-hidden rounded-2xl  shadow-sm"
                                    >
                                        <img
                                            src={org.img}
                                            alt={org.name}
                                            className="w-full h-[240px] object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                                        />

                                        <div className="py-4 text-center px-4">
                                            <p className="font-semibold text-[#0f4c5c]">
                                                {org.name}
                                            </p>
                                        </div>

                                        <div className="absolute inset-0 flex items-center justify-center bg-black/55 text-white text-sm font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                            Click to know more
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col-span-1" />
            </section>

            <DonateCTA />

        </main >
    );
};

export default About;
