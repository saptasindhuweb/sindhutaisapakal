"use client";

import Image from "next/image";
import DonateCTA from "@/components/shared/DonateCTA";
import mamtaData from "@/lib/data/mamta.json";

type MamtaData = {
  title: string;
  heroText: string;
  points: string[];
  images: string[];
};

const typedMamtaData = mamtaData as MamtaData;

const Mamta = () => {

  return (
    <main className="bg-white">
      <section className="grid grid-cols-8 pt-24">
        <div className="col-span-1 flex items-start justify-end px-4">
          <span className="w-20 h-[2px] bg-black mt-2" />
        </div>

        <div className="col-span-7">
          <p className="font-bold tracking-wide">{typedMamtaData.title}</p>
        </div>
      </section>

      <section className="grid grid-cols-8 pt-10">
        <div className="col-span-1" />

        <div className="col-span-6">
          <h1 className="text-3xl font-bold leading-snug mb-8">{typedMamtaData.heroText}</h1>

          <ul className="list-disc pl-5 text-xs text-gray-600 space-y-3 max-w-xl">
            {typedMamtaData.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="col-span-1" />
      </section>

      <section className="py-14 grid grid-cols-8">
        <div className="col-span-1" />

        <div className="col-span-6 grid grid-cols-4 gap-8">
          {typedMamtaData.images.map((img, i) => (
            <Image key={i} src={img} alt="Mamta Bal Sadan" width={300} height={300} className="rounded-2xl shadow-md w-full h-auto" loading="lazy" />
          ))}
        </div>

        <div className="col-span-1" />
      </section>

      <section className="py-12">
        <DonateCTA />
      </section>
    </main>
  );
};

export default Mamta;
