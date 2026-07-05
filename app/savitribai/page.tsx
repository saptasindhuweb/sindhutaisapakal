"use client";

import DonateCTA from "@/components/shared/DonateCTA";
import savitribaiData from "@/lib/data/savitribai.json";

type SavitribaiImage = {
  src: string;
  alt: string;
};

type SavitribaiData = {
  title: string;
  heroText: string;
  points: string[];
  images: SavitribaiImage[];
};

const typedSavitribaiData = savitribaiData as SavitribaiData;

const Savitribai = () => {

  return (
    <main className="bg-white">
      <section className="grid grid-cols-8 pt-24">
        <div className="col-span-1 flex items-start justify-end px-4">
          <span className="w-20 h-[2px] bg-black mt-2" />
        </div>

        <div className="col-span-7">
          <p className="font-bold tracking-wide">{typedSavitribaiData.title}</p>
        </div>
      </section>

      <section className="grid grid-cols-8 pb-12 pt-4 mt-6">
        <div className="col-span-1" />

        <div className="col-span-4">
          <h1 className="text-3xl font-bold leading-snug pb-6">{typedSavitribaiData.heroText}</h1>

          <ul className="list-disc pl-5 text-xs text-gray-600 space-y-3">
            {typedSavitribaiData.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="col-span-2 grid grid-cols-2 gap-4 ">
          {typedSavitribaiData.images.map((img, i) => (
            <img key={i} src={img.src} alt={img.alt} className="rounded-2xl shadow-md" />
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

export default Savitribai;
