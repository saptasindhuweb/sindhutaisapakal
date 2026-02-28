"use client";

import React from "react";
import { useRouter } from "next/navigation";

const SupportersPage = () => {
  const router = useRouter();

  const featuredSupporters = [
    {
      name: "Padma Shri Dr. Sou. Sindhutai Sapakal (Maai)",
      title: "Mother of Orphans",
      img: "/assets/images/1.png",
      blurb1:
        "A soul out of life’s hardship was born as Mother to over a thousand children and devoted her entire life to social service. After 70 years of lifespan (Born: 1948 – Died: 2022), she raised a grand family of 220 sons-in-laws, 50 daughters-in-laws.",
      blurb2:
        "She adopted more than 1200 orphaned children and provided them food, shelter, and education. She was honored with Padma Shri in 2021.",
      href: "/maii",
    },
    {
      name: "Mamata Tai Sapakal",
      title: "Carrying the Legacy",
      img: "/assets/images/maii2.jpg",
      blurb1:
        "Mamata Tai has stood beside Maai’s mission for decades, guiding and nurturing generations of children with warmth and resolve.",
      blurb2:
        "She continues to expand the family and strengthen institutions that care for the underprivileged.",
      href: "/mamtatai",
    },
    {
      name: "Sanmati Support Circle",
      title: "Community of Care",
      img: "/assets/images/sanmati.png",
      blurb1:
        "A collective of well-wishers who support education, shelter, and daily needs across Maai’s institutions.",
      blurb2:
        "Their consistent involvement helps build stable homes and opportunities for every child.",
      href: "/maii",
    },
    {
      name: "Gopika Initiative",
      title: "Future Builders",
      img: "/assets/images/gopika.png",
      blurb1:
        "Focused on empowering girls through education and mentorship, inspired by Maai’s lifelong commitment.",
      blurb2:
        "The initiative nurtures leadership, confidence, and self-reliance.",
      href: "/maii",
    },
  ];

  const supportersGridA = Array.from({ length: 6 }).map((_, i) => ({
    name: `Supporter ${i + 1}`,
    img: `/assets/images/maii${(i % 7) + 1}.jpg`,
  }));

  const supportersGridB = Array.from({ length: 8 }).map((_, i) => ({
    name: `Supporter ${i + 7}`,
    img: `/assets/images/maii${(i % 7) + 1}.jpg`,
  }));

  return (
    <main className="w-full mt-24 py-16">
      {/* ================= OUR SUPPORTERS (FEATURED) ================= */}
      <section className="bg-white py-10 grid grid-cols-8">
        <div className="col-span-8 grid grid-cols-8 w-full justify-end items-center mb-10">
          <div className="col-span-1 flex items-center justify-end pr-2">
            <span className="w-16 h-[2px] bg-black" />
          </div>
          <h2 className="text-2xl font-bold tracking-wide col-span-4">
            OUR SUPPORTERS
          </h2>
        </div>

        <div className="col-span-1" />
        <div className="col-span-6 space-y-12">
          {featuredSupporters.map((supporter, index) => {
            const imageFirst = index % 2 === 1;

            return (
              <div
                key={supporter.name}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div
                  className={
                    imageFirst ? "flex justify-end md:order-2" : "flex justify-between"
                  }
                >
                  <img
                    src={supporter.img}
                    alt={supporter.name}
                    className="rounded-3xl max-w-md w-full object-cover h-[420px] object-[center_25%]"
                  />
                </div>

                <div className={imageFirst ? "md:order-1" : ""}>
                  <h2 className="text-3xl font-bold leading-tight">
                    {supporter.name} <br />
                    {supporter.title}
                  </h2>

                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {supporter.blurb1}
                  </p>

                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {supporter.blurb2}
                  </p>

                  <button
                    onClick={() => router.push(supporter.href)}
                    className="mt-5 text-sm font-semibold text-sky-700 hover:underline cursor-pointer"
                  >
                    Read More
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-span-1" />
      </section>

      {/* ================= OUR SUPPORTERS (GRID 3-COL) ================= */}
      <section className="bg-white py-10 grid grid-cols-8">
        <div className="col-span-8 grid grid-cols-8 w-full justify-end items-center mb-10">
          <div className="col-span-1 flex items-center justify-end pr-2">
            <span className="w-16 h-[2px] bg-black" />
          </div>
          <h2 className="text-2xl font-bold tracking-wide col-span-4">
            OUR SUPPORTERS
          </h2>
        </div>

        <div className="col-span-1" />
        <div className="col-span-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportersGridA.map((supporter) => (
              <div
                key={supporter.name}
                className="overflow-hidden rounded-2xl bg-[#f6fbfd] shadow-sm"
              >
                <img
                  src={supporter.img}
                  alt={supporter.name}
                  className="w-full h-[240px] object-cover"
                />
                <div className="py-4 text-center px-4">
                  <p className="font-semibold text-[#0f4c5c]">
                    {supporter.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-1" />
      </section>

      {/* ================= OUR SUPPORTERS (GRID 4-COL) ================= */}
      <section className="bg-white py-10 grid grid-cols-8">
        <div className="col-span-8 grid grid-cols-8 w-full justify-end items-center mb-10">
          <div className="col-span-1 flex items-center justify-end pr-2">
            <span className="w-16 h-[2px] bg-black" />
          </div>
          <h2 className="text-2xl font-bold tracking-wide col-span-4">
            OUR SUPPORTERS
          </h2>
        </div>

        <div className="col-span-1" />
        <div className="col-span-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportersGridB.map((supporter) => (
              <div
                key={supporter.name}
                className="overflow-hidden rounded-2xl bg-[#f6fbfd] shadow-sm"
              >
                <img
                  src={supporter.img}
                  alt={supporter.name}
                  className="w-full h-[220px] object-cover"
                />
                <div className="py-4 text-center px-4">
                  <p className="font-semibold text-[#0f4c5c]">
                    {supporter.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-1" />
      </section>
    </main>
  );
};

export default SupportersPage;
