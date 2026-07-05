"use client";

import DonateCTA from "@/components/shared/DonateCTA";
import shreeData from "@/lib/data/shree.json";

type ShreeData = {
  title: string;
  heroText: string;
  points: string[];
  images: string[];
};

const typedShreeData = shreeData as ShreeData;

const Shree = () => {

  return (
    <main className="bg-white">
      <section className="grid grid-cols-8 pt-24">
        <div className="col-span-1 flex items-start justify-end px-4">
          <span className="w-20 h-[2px] bg-black mt-2" />
        </div>

        <div className="col-span-7">
          <p className="font-bold tracking-wide">{typedShreeData.title}</p>
        </div>
      </section>

      <section className="grid grid-cols-8 pt-10">
        <div className="col-span-1" />

        <div className="col-span-6">
          <h1 className="text-3xl font-bold leading-snug mb-8">{typedShreeData.heroText}</h1>

          <ul className="list-disc pl-5 text-xs text-gray-600 space-y-3 max-w-4xl">
            {typedShreeData.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="col-span-1" />
      </section>

      <section className="py-14 grid grid-cols-8">
        <div className="col-span-1" />

        <div className="col-span-6 grid grid-cols-4 gap-8">
          {typedShreeData.images.map((img, i) => (
            <img key={i} src={img} alt="Shree Manshanti Chatralay" className="rounded-2xl shadow-md" />
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

export default Shree;
