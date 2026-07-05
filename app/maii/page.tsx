'use client'

import Achievements from "@/components/shared/Achievements";
import DonateCTA from "@/components/shared/DonateCTA";
import AlbumCard from "@/components/shared/AlbumCard";
import AlbumLightbox from "@/components/shared/AlbumLightbox";
import maiiData from "@/lib/data/maii.json";
import { useEffect, useMemo, useState } from "react";

type Album = {
  id: string;
  title: string;
  cover: string;
  images: string[];
};

type MaiiData = {
  preloadImages: string[];
  headings: {
    journey: string;
    legacy: string;
    legacyMobile: string;
    memories: string;
    album: string;
    videos: string;
  };
  journey: {
    heroImage: string;
    heroAlt: string;
    name: string;
    dates: string;
    placeOfBirth: string;
    education: string;
    marriage: string;
    storyDesktop: string;
    storyMobile: string;
  };
  legacy: {
    heroImage: string;
    heroAlt: string;
    title: string;
    subtitle: string;
    desktopText: string;
    mobileText: string;
  };
  memories: string[];
  albums: Album[];
  videos: {
    playlistUrl: string;
  };
};

const typedMaiiData = maiiData as MaiiData;

const Maai: React.FC = () => {
  const [activeAlbum, setActiveAlbum] = useState<Album | null>(null);

  // Scroll to hash anchor on mount (after the DOM is fully painted)
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    setTimeout(() => {
      const el = document.getElementById(hash.slice(1));
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
  }, []);

  return (
    <>
      <main className="w-full max-sm:hidden">
        <section className="pt-28 bg-white grid grid-cols-8">
          <div className="col-span-1 flex items-center justify-end px-4 mb-4">
            <span className="w-20 h-[2px] bg-black" />
          </div>

          <p className="col-span-7 text-lg font-bold tracking-wide mb-4 flex items-center gap-2">
            {typedMaiiData.headings.journey}
          </p>
          <div className="col-span-1" />

          <div className="col-span-6">
            <div className="flex items-center gap-4 mb-8"></div>

            <div className="relative z-10">
              <img
                src={typedMaiiData.journey.heroImage}
                alt={typedMaiiData.journey.heroAlt}
                className="w-full max-h-150 object-cover grayscale rounded-3xl -mb-32 object-[center_40%]"
              />
            </div>
          </div>

          <div className="col-span-1" />
        </section>

        <section className="bg-sky-50 pt-40 pb-20 grid grid-cols-8">
          <div className="col-span-1" />

          <div className="col-span-6">
            <h2 className="text-4xl font-bold mb-1">{typedMaiiData.journey.name}</h2>
            <p className="text-xs font-bold text-black mb-6">{typedMaiiData.journey.dates}</p>

            <div className="text-black leading-relaxed space-y-4">
              <p>
                <strong>Place of Birth:</strong> {typedMaiiData.journey.placeOfBirth}
              </p>

              <p>
                <strong>Education:</strong> {typedMaiiData.journey.education}
              </p>

              <p>
                <strong>Marriage:</strong> {typedMaiiData.journey.marriage}
              </p>

              <p className="text-justify">{typedMaiiData.journey.storyDesktop}</p>
            </div>
          </div>

          <div className="col-span-1" />
        </section>

        <Achievements />

        <section id="mamtatai" className="pt-28 bg-white grid grid-cols-8">
          <div className="col-span-1 flex items-center justify-end px-4 mb-4">
            <span className="w-20 h-[2px] bg-black" />
          </div>

          <p className="col-span-7 text-lg font-bold tracking-wide mb-4 flex items-center gap-2">
            {typedMaiiData.headings.legacy}
          </p>
          <div className="col-span-1" />

          <div className="col-span-6">
            <div className="flex items-center gap-4 mb-8"></div>

            <div className="relative z-10">
              <img
                src={typedMaiiData.legacy.heroImage}
                alt={typedMaiiData.legacy.heroAlt}
                className="w-full max-h-150 object-cover grayscale rounded-3xl -mb-32"
              />

              <div className="absolute inset-0 flex items-center pl-12"></div>
            </div>
          </div>

          <div className="col-span-1" />
        </section>

        <section className="bg-sky-50 pt-40 pb-20 grid grid-cols-8">
          <div className="col-span-1" />

          <div className="col-span-6">
            <h2 className="text-4xl font-bold mb-2">
              {typedMaiiData.legacy.title}{" "}
              <span className="text-lg font-normal">{typedMaiiData.legacy.subtitle}</span>
            </h2>

            <p className="text-sm text-gray-700 leading-relaxed text-justify">{typedMaiiData.legacy.desktopText}</p>
          </div>

          <div className="col-span-1" />
        </section>

        <section className="pt-14 bg-white grid grid-cols-8">
          <div className="col-span-1 flex items-center justify-end px-4 mb-4">
            <span className="w-20 h-[2px] bg-black" />
          </div>

          <p className="col-span-7 text-lg font-bold tracking-wide mb-4 flex items-center gap-2">
            {typedMaiiData.headings.memories}
          </p>
          <div className="col-span-1" />
          <div className="col-span-6 grid grid-cols-4 gap-8">
            {typedMaiiData.memories.map((img, i) => (
              <img key={i} src={img} alt="" className="rounded-2xl object-cover" />
            ))}
          </div>
          <div className="col-span-1" />
        </section>

        <section className="bg-sky-50 pt-14 mt-12 grid grid-cols-8">
          <div className="col-span-1 flex items-center justify-end px-4 mb-4">
            <span className="w-20 h-[2px] bg-black" />
          </div>

          <p className="col-span-7 text-lg font-bold tracking-wide mb-6">{typedMaiiData.headings.album}</p>

          <div className="col-span-1" />

          <div className="col-span-6 grid md:grid-cols-2 gap-10">
            {typedMaiiData.albums.map((album) => (
              <AlbumCard
                key={album.id}
                cover={album.cover}
                title={album.title}
                photoCount={album.images.length}
                onClick={() => setActiveAlbum(album)}
              />
            ))}
          </div>

          <div className="col-span-1" />
        </section>

        <AlbumLightbox
          album={activeAlbum}
          onClose={() => setActiveAlbum(null)}
        />
        <section className="pt-14 mt-12 grid grid-cols-8">
          <div className="col-span-1 flex items-center justify-end px-4 mb-4">
            <span className="w-20 h-[2px] bg-black" />
          </div>

          <p className="col-span-7 text-lg font-bold tracking-wide mb-4 flex items-center gap-2">
            {typedMaiiData.headings.videos}
          </p>
          <div className="col-span-1" />
          <div className="col-span-6 ">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src={typedMaiiData.videos.playlistUrl}
                referrerPolicy="strict-origin-when-cross-origin"
                allow="autoplay; encrypted-media"
              ></iframe>
            </div>
          </div>
          <div className="col-span-1" />
        </section>

        <DonateCTA />
      </main>

      <main className="w-full  md:hidden">
        <section className="pt-10 pb-6 bg-white p-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-[2px] bg-black" />
            <h2 className="text-lg font-bold tracking-wide">{typedMaiiData.headings.journey}</h2>
          </div>

          <img
            src={typedMaiiData.journey.heroImage}
            alt={typedMaiiData.journey.heroAlt}
            className="w-full h-64 object-cover grayscale rounded-2xl"
          />
        </section>

        <section className="bg-sky-50 py-10 p-4">
          <h2 className="text-2xl font-bold mb-1">{typedMaiiData.journey.name}</h2>
          <p className="text-xs font-bold mb-6">{typedMaiiData.journey.dates}</p>

          <div className="text-sm leading-relaxed space-y-4 text-justify">
            <p>
              <strong>Place of Birth:</strong> {typedMaiiData.journey.placeOfBirth}
            </p>
            <p>
              <strong>Education:</strong> {typedMaiiData.journey.education}
            </p>
            <p>
              <strong>Marriage:</strong> {typedMaiiData.journey.marriage}
            </p>

            <p>{typedMaiiData.journey.storyMobile}</p>
          </div>
        </section>

        <Achievements />

        <section className="pt-10 bg-white p-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-[2px] bg-black" />
            <h2 className="text-lg font-bold tracking-wide">{typedMaiiData.headings.legacyMobile}</h2>
          </div>

          <img
            src={typedMaiiData.legacy.heroImage}
            alt={typedMaiiData.legacy.heroAlt}
            className="w-full h-64 object-cover grayscale rounded-2xl mb-6"
          />
        </section>

        <section className="bg-sky-50 py-10 p-4">
          <h2 className="text-xl font-bold mb-2">{typedMaiiData.legacy.title}</h2>

          <p className="text-sm text-gray-700 leading-relaxed text-justify">{typedMaiiData.legacy.mobileText}</p>
        </section>

        <section className="pt-10 bg-white p-4">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-[2px] bg-black" />
            <h2 className="text-lg font-bold tracking-wide">{typedMaiiData.headings.memories}</h2>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {typedMaiiData.memories.map((img, i) => (
              <img key={i} src={img} alt="" className="rounded-xl object-cover h-40 w-full" />
            ))}
          </div>
        </section>

        <section className="bg-sky-50 py-10 p-4">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-[2px] bg-black" />
            <h2 className="text-lg font-bold tracking-wide">{typedMaiiData.headings.album}</h2>
          </div>

          <div className="space-y-6">
            {typedMaiiData.albums.map((album) => (
              <AlbumCard
                key={album.id}
                cover={album.cover}
                title={album.title}
                photoCount={album.images.length}
                onClick={() => setActiveAlbum(album)}
              />
            ))}
          </div>
        </section>

        {activeAlbum && (
          <AlbumLightbox
            album={activeAlbum}
            onClose={() => setActiveAlbum(null)}
          />
        )}

        <section className="pt-10 bg-white p-4">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-[2px] bg-black" />
            <h2 className="text-lg font-bold tracking-wide">{typedMaiiData.headings.videos}</h2>
          </div>

          <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src={typedMaiiData.videos.playlistUrl}
              allow="autoplay; encrypted-media"
            />
          </div>
        </section>

        <DonateCTA />
      </main>
    </>
  );
};

export default Maai;
