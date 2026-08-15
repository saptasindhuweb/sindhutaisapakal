import React from "react";
import Image from "next/image";
import { Award } from "lucide-react";
import { GiLaurelsTrophy } from "react-icons/gi";

type AchievementItem = {
    title: string;
    year: string;
    description: string;
    image: string;
    imageAlt: string;
    imageClassName?: string;
};

const achievements: AchievementItem[] = [
    {
        title: "Padma Shri Award in Social Work Category",
        year: "2021",
        description:
            "Sindhutai Sapkal, known as the Mother of Orphans, received the Padma Shri in 2021 for her lifelong service to orphaned and abandoned children. She raised over 1,500 children and rehabilitated marginalized communities through compassion, care, and advocacy.",
        image: "/assets/images/maii/maii1.jpg",
        imageAlt: "Padma Shri Award recognition",
        imageClassName: "object-[center_18%]",
    },
    {
        title: "National Award for Iconic Mother from the President of India",
        year: "2013",
        description:
            "This recognition honored her unmatched maternal care and resilience in raising over 1,500 orphaned and abandoned children as her own, while providing shelter, education, and guidance.",
        image: "/assets/images/maii/maii2.jpg",
        imageAlt: "National Award for Iconic Mother",
        imageClassName: "object-[center_18%]",
    },
    {
        title: "Nari Shakti Award from the President of India",
        year: "2017",
        description:
            "She was honored for extraordinary contributions to women empowerment and child welfare, including decades of work supporting vulnerable children and marginalized communities.",
        image: "/assets/images/maii/maii3.jpg",
        imageAlt: "Nari Shakti Award",
        imageClassName: "object-[center_14%]",
    },
    {
        title: "Doctor of Literature, D. Y. Patil University, Navi Mumbai",
        year: "2016",
        description:
            "Conferred in recognition of her lifelong social work, this honor acknowledged her transformative humanitarian efforts and service to underprivileged children.",
        image: "/assets/images/maii/maii4.jpg",
        imageAlt: "Doctor of Literature honor",
        imageClassName: "object-[center_18%]",
    },
    {
        title: "Doctor of Literature, D. Y. Patil University, Wardha",
        year: "2021",
        description:
            "This distinction recognized her exceptional commitment to society and her decades of nurturing children while inspiring communities with resilience and selfless service.",
        image: "/assets/images/maii/maii5.jpg",
        imageAlt: "Doctor of Literature Wardha honor",
        imageClassName: "object-[center_18%]",
    },
    {
        title: "Ahmadiyya Muslim Peace Prize, London",
        year: "2015",
        description:
            "An international honor recognizing her contribution to humanity through sheltering children, promoting social harmony, and serving vulnerable communities.",
        image: "/assets/images/maii/maii6.jpg",
        imageAlt: "Ahmadiyya Muslim Peace Prize",
        imageClassName: "object-bottom",
    },
    {
        title: "The One Rotary Award, Hong Kong and Global Love of Lives Award, Taiwan",
        year: "International Recognition",
        description:
            "These awards celebrated her remarkable humanitarian mission and global impact through compassion-driven care for orphaned and abandoned children.",
        image: "/assets/images/maii/maii7.jpg",
        imageAlt: "International humanitarian awards",
        imageClassName: "object-[center_18%]",
    },
    {
        title: "Biopic and Literary Milestones",
        year: "1986 - 2013",
        description:
            "Her autobiography Mee Vanvasi was published in 1986. The Marathi biopic Mee Sindhutai Sapkal released in 2010 and premiered at the 54th London Film Festival. The documentary Anathanchi Yashoda followed in 2013.",
        image: "/assets/images/maii/maii8.png",
        imageAlt: "Biopic and documentary milestones",
        imageClassName: "object-center",
    },
];

const Achievements: React.FC = () => {
    return (
        <>
            <section className="py-12 grid grid-cols-8 max-sm:hidden">
                <div className="col-span-1 flex items-center justify-end px-4 mb-4">
                    <span className="w-20 h-[2px] bg-black" />
                </div>

                <p className=" col-span-7 text-lg font-bold tracking-wide mb-4 flex items-center gap-2">
                    RECOGNITIONS
                </p>

                <div className="col-span-1" />

                <div className="col-span-7 lg:col-span-6 mt-12">
                    <div className="relative space-y-6">
                        <div className="absolute left-6 sm:left-16 top-30 bottom-20 w-px bg-slate-300" />

                        {achievements.map((item) => (
                            <article key={`${item.title}-${item.year}`} className="relative">
                                <div className="absolute top-25 left-21 w-6 sm:w-8 h-px bg-slate-300 z-20" />
                                <div className="absolute left-6 sm:left-16 top-20 -translate-x-1/2 z-10">
                                    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center">
                                        <GiLaurelsTrophy className="w-10 h-10 text-slate-600" />
                                    </div>
                                </div>

                                <div className="ml-14 sm:ml-30 rounded-xl border border-slate-200 bg-white/95 shadow-lg px-4 sm:px-6 py-5">
                                    <div className="grid grid-cols-1 md:grid-cols-[220px_minmax(0,1fr)] gap-4 md:gap-6 items-start">
                                        <Image
                                            src={item.image}
                                            alt={item.imageAlt}
                                            width={220}
                                            height={176}
                                            className={`h-44 w-full md:w-[220px] object-cover rounded-lg shadow ${item.imageClassName ?? "object-center"}`}
                                            loading="lazy"
                                        />

                                        <div>
                                            <p className="text-xs sm:text-sm text-slate-500 mb-1">{item.year}</p>
                                            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                                            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= RECOGNITIONS - MOBILE ONLY ================= */}
            <section className="py-10 bg-white p-4 md:hidden">

                {/* Heading */}
                <div className="flex items-center gap-3 mb-8">
                    <span className="w-10 h-[2px] bg-black" />
                    <h2 className="text-lg font-bold tracking-wide">
                        RECOGNITIONS
                    </h2>
                </div>

                {/* Cards */}
                <div className="space-y-8">
                    {achievements.map((item) => (
                        <article
                            key={`${item.title}-${item.year}`}
                            className="rounded-2xl border border-slate-200 bg-white shadow-md p-4"
                        >
                            {/* Trophy + Year */}
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center">
                                    <GiLaurelsTrophy className="w-5 h-5 text-slate-600" />
                                </div>
                                <p className="text-xs text-slate-500">
                                    {item.year}
                                </p>
                            </div>

                            {/* Image */}
                            <Image
                                src={item.image}
                                alt={item.imageAlt}
                                width={400}
                                height={192}
                                className={`w-full h-48 object-cover rounded-lg mb-4 ${item.imageClassName ?? "object-center"}`}
                                loading="lazy"
                            />

                            {/* Content */}
                            <h3 className="text-base font-bold text-slate-900 mb-2">
                                {item.title}
                            </h3>

                            <p className="text-sm text-slate-700 leading-relaxed text-justify">
                                {item.description}
                            </p>
                        </article>
                    ))}
                </div>

            </section>
        </>
    );
};

export default Achievements;

