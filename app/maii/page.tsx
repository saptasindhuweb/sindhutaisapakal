'use client'

import Achievements from "@/components/shared/Achievements";
import DonateCTA from "@/components/shared/DonateCTA";
import PageLoader from "@/components/shared/PageLoader";
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
  const [isPageReady, setIsPageReady] = useState(false);
  const [activeAlbum, setActiveAlbum] = useState<Album | null>(null);

  const imageSources = useMemo(() => {
    const albumImages = typedMaiiData.albums.flatMap((album) => [album.cover, ...album.images]);
    return Array.from(
      new Set([
        ...typedMaiiData.preloadImages,
        typedMaiiData.journey.heroImage,
        typedMaiiData.legacy.heroImage,
        ...typedMaiiData.memories,
        ...albumImages,
      ])
    );
  }, []);

  useEffect(() => {
    let isCancelled = false;

    const waitForWindowLoad = new Promise<void>((resolve) => {
      if (document.readyState === "complete") {
        resolve();
        return;
      }

      const onLoad = () => {
        window.removeEventListener("load", onLoad);
        resolve();
      };

      window.addEventListener("load", onLoad);
    });

    const preloadImage = (src: string) =>
      new Promise<void>((resolve) => {
        const image = new Image();
        image.onload = () => resolve();
        image.onerror = () => resolve();
        image.src = src;
      });

    const preloadAllImages = Promise.all(imageSources.map(preloadImage));

    Promise.all([waitForWindowLoad, preloadAllImages]).then(() => {
      if (!isCancelled) {
        setIsPageReady(true);
      }
    });

    return () => {
      isCancelled = true;
    };
  }, [imageSources]);

  if (!isPageReady) {
    return <PageLoader />;
  }

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

        <section className="pt-28 bg-white grid grid-cols-8">
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
              <div
                key={album.id}
                onClick={() => setActiveAlbum(album)}
                className="relative cursor-pointer rounded-3xl overflow-hidden group"
              >
                <img
                  src={album.cover}
                  alt={album.title}
                  className="w-full h-[320px] object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold text-center px-4">{album.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="col-span-1" />
        </section>

        {activeAlbum && (
          <div className="fixed inset-0 z-[100] bg-black/90 flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 text-white">
              <h2 className="text-2xl font-bold">{activeAlbum.title}</h2>

              <button onClick={() => setActiveAlbum(null)} className="text-3xl font-bold hover:opacity-70">
                X
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 pb-10">
              <div className="grid md:grid-cols-3 gap-6">
                {activeAlbum.images.map((img, i) => (
                  <img key={i} src={img} alt="" className="rounded-2xl object-cover hover:scale-[1.02] transition" />
                ))}
              </div>
            </div>
          </div>
        )}
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
              <div
                key={album.id}
                onClick={() => setActiveAlbum(album)}
                className="relative rounded-2xl overflow-hidden cursor-pointer"
              >
                <img src={album.cover} alt={album.title} className="w-full h-56 object-cover" />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <h3 className="text-white text-lg font-bold text-center px-4">{album.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {activeAlbum && (
          <div className="fixed inset-0 z-[100] bg-black/95 flex flex-col md:hidden">
            <div className="flex items-center justify-between px-4 py-4 text-white">
              <h2 className="text-lg font-bold">{activeAlbum.title}</h2>

              <button onClick={() => setActiveAlbum(null)} className="text-3xl font-bold">
                X
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 pb-10">
              <div className="space-y-4">
                {activeAlbum.images.map((img, i) => (
                  <img key={i} src={img} alt="" className="rounded-xl object-cover w-full" />
                ))}
              </div>
            </div>
          </div>
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
