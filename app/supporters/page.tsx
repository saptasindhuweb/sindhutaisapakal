"use client";

import Image from "next/image";

const mainSupporters = [
  { name: "Bharati Vidyapeeth", img: "/assets/images/supporters/bharti.png" },
  { name: "Nobel Hospital", img: "/assets/images/supporters/nobel.png" },
  { name: "Villo Poonawala Foundation", img: "/assets/images/supporters/villo.png" },
  { name: "Kalyani Technoforge Limited", img: "/assets/images/supporters/kalyani.png" },
];

const SupportersPage = () => {
  return (
    <>
      <main className="w-full py-16 max-sm:hidden">
        <section className="bg-white py-10 grid grid-cols-8">
          <div className="col-span-8 grid grid-cols-8 w-full justify-end items-center mb-8">
            <div className="col-span-1 flex items-center justify-end pr-2">
              <span className="w-16 h-[2px] bg-black" />
            </div>
            <h2 className="text-2xl font-bold tracking-wide col-span-4">OUR SUPPORTERS</h2>
          </div>

          <div className="col-span-1" />
          <div className="col-span-6">
            <h2 className="text-xl font-semibold mb-10">
              We are advancing forward, thanks to the countless helping hands that have reached us !
              <br />
              Some noble souls came through to us in our tough times, and we think of them as Maai's blessings.
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {mainSupporters.map((supporter) => (
                <div key={supporter.name} className="bg-gray-100 p-4 rounded-xl text-center">
                  <div className="relative h-40 rounded-lg overflow-hidden mb-4">
                    <Image src={supporter.img} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" alt={supporter.name} />
                  </div>
                  <p className="font-medium text-lg py-2 px-3">{supporter.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-1" />
        </section>
      </main>

      <main className="w-full py-4 px-4 bg-white md:hidden">
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-[2px] bg-black" />
            <h2 className="text-lg font-bold tracking-wide">OUR SUPPORTERS</h2>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed mb-8">
            We are advancing forward, thanks to the countless helping hands that have reached us!
            <br />
            Some noble souls came through to us in our tough times, and we think of them as Maai's blessings.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {mainSupporters.map((supporter) => (
                <div key={supporter.name} className="bg-gray-100 p-3 rounded-xl text-center">
                <div className="relative h-24 rounded-lg overflow-hidden mb-3">
                  <Image src={supporter.img} fill sizes="50vw" className="object-cover" alt={supporter.name} />
                </div>
                <p className="font-medium text-sm">{supporter.name}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default SupportersPage;

