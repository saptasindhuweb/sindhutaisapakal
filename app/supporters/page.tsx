"use client";

import React from "react";
import { useRouter } from "next/navigation";
import supportersData from "@/lib/data/supporters.json";

type FeaturedSupporter = {
  name: string;
  title: string;
  img: string;
  blurb1: string;
  blurb2: string;
  href: string;
};

type GridSupporter = {
  name: string;
  img: string;
};

type SupportersData = {
  heading: string;
  featuredSupporters: FeaturedSupporter[];
  supportersGridA: GridSupporter[];
  supportersGridB: GridSupporter[];
  mobileReadMoreLabel: string;
};

const typedSupportersData = supportersData as SupportersData;

const SupportersPage = () => {
  const router = useRouter();

  return (
    <>
      <main className="w-full mt-24 py-16 max-sm:hidden">
        <section className="bg-white py-10 grid grid-cols-8">
          <div className="col-span-8 grid grid-cols-8 w-full justify-end items-center mb-10">
            <div className="col-span-1 flex items-center justify-end pr-2">
              <span className="w-16 h-[2px] bg-black" />
            </div>
            <h2 className="text-2xl font-bold tracking-wide col-span-4">{typedSupportersData.heading}</h2>
          </div>

          <div className="col-span-1" />
          <div className="col-span-6 space-y-12">
            {typedSupportersData.featuredSupporters.map((supporter, index) => {
              const imageFirst = index % 2 === 1;

              return (
                <div key={supporter.name} className="grid md:grid-cols-2 gap-12 items-center">
                  <div className={imageFirst ? "flex justify-end md:order-2" : "flex justify-between"}>
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

                    <p className="mt-4 text-gray-600 leading-relaxed">{supporter.blurb1}</p>

                    <p className="mt-3 text-gray-600 leading-relaxed">{supporter.blurb2}</p>

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

        <section className="bg-white py-10 grid grid-cols-8">
          <div className="col-span-8 grid grid-cols-8 w-full justify-end items-center mb-10">
            <div className="col-span-1 flex items-center justify-end pr-2">
              <span className="w-16 h-[2px] bg-black" />
            </div>
            <h2 className="text-2xl font-bold tracking-wide col-span-4">{typedSupportersData.heading}</h2>
          </div>

          <div className="col-span-1" />
          <div className="col-span-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {typedSupportersData.supportersGridA.map((supporter) => (
                <div key={supporter.name} className="overflow-hidden rounded-2xl bg-[#f6fbfd] shadow-sm">
                  <img src={supporter.img} alt={supporter.name} className="w-full h-[240px] object-cover" />
                  <div className="py-4 text-center px-4">
                    <p className="font-semibold text-[#0f4c5c]">{supporter.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-1" />
        </section>

        <section className="bg-white py-10 grid grid-cols-8">
          <div className="col-span-8 grid grid-cols-8 w-full justify-end items-center mb-10">
            <div className="col-span-1 flex items-center justify-end pr-2">
              <span className="w-16 h-[2px] bg-black" />
            </div>
            <h2 className="text-2xl font-bold tracking-wide col-span-4">{typedSupportersData.heading}</h2>
          </div>

          <div className="col-span-1" />
          <div className="col-span-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {typedSupportersData.supportersGridB.map((supporter) => (
                <div key={supporter.name} className="overflow-hidden rounded-2xl bg-[#f6fbfd] shadow-sm">
                  <img src={supporter.img} alt={supporter.name} className="w-full h-[220px] object-cover" />
                  <div className="py-4 text-center px-4">
                    <p className="font-semibold text-[#0f4c5c]">{supporter.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-1" />
        </section>
      </main>

      <main className="w-full py-4 px-4 bg-white md:hidden">
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-10 h-[2px] bg-black" />
            <h2 className="text-lg font-bold tracking-wide">{typedSupportersData.heading}</h2>
          </div>

          <div className="space-y-12">
            {typedSupportersData.featuredSupporters.map((supporter) => (
              <div key={supporter.name} className="space-y-6">
                <div className="w-full h-60 overflow-hidden rounded-2xl">
                  <img src={supporter.img} alt={supporter.name} className="w-full h-full object-cover" />
                </div>

                <div>
                  <h3 className="text-xl font-bold leading-snug">
                    {supporter.name}
                    <br />
                    <span className="text-base font-semibold">{supporter.title}</span>
                  </h3>

                  <p className="mt-4 text-sm text-gray-600 leading-relaxed">{supporter.blurb1}</p>

                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">{supporter.blurb2}</p>

                  <button
                    onClick={() => router.push(supporter.href)}
                    className="mt-5 text-sm font-semibold text-sky-700 active:scale-95 transition"
                  >
                    {typedSupportersData.mobileReadMoreLabel}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-10 h-[2px] bg-black" />
            <h2 className="text-lg font-bold tracking-wide">{typedSupportersData.heading}</h2>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {typedSupportersData.supportersGridA.map((supporter) => (
              <div key={supporter.name} className="overflow-hidden rounded-xl bg-[#f6fbfd] shadow-sm">
                <img src={supporter.img} alt={supporter.name} className="w-full h-36 object-cover" />
                <div className="py-3 text-center px-2">
                  <p className="text-sm font-semibold text-[#0f4c5c]">{supporter.name}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-10 h-[2px] bg-black" />
            <h2 className="text-lg font-bold tracking-wide">{typedSupportersData.heading}</h2>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {typedSupportersData.supportersGridB.map((supporter) => (
              <div key={supporter.name} className="overflow-hidden rounded-xl bg-[#f6fbfd] shadow-sm">
                <img src={supporter.img} alt={supporter.name} className="w-full h-36 object-cover" />
                <div className="py-3 text-center px-2">
                  <p className="text-sm font-semibold text-[#0f4c5c]">{supporter.name}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default SupportersPage;
