"use client";

import { useEffect, useMemo, useState } from "react";
import DonateCTA from "@/components/shared/DonateCTA";
import ImageLightbox from "@/components/shared/ImageLightbox";
import PageLoader from "@/components/shared/PageLoader";
import galleryData from "@/lib/data/gallery.json";

type GallerySection = {
  title: string;
  images: string[];
};

const typedGalleryData = galleryData as {
  sections: GallerySection[];
};

const Gallery = () => {
  const [isPageReady, setIsPageReady] = useState(false);
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  const imageSources = useMemo(
    () => typedGalleryData.sections.flatMap((section) => section.images),
    []
  );

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
    <main className="w-full bg-white md:mt-20">
      {typedGalleryData.sections.map((section, idx) => (
        <section key={idx} className="py-20 grid grid-cols-8 max-sm:hidden">
          <div className="col-span-1 flex items-center justify-end px-4 mb-4">
            <span className="w-20 h-[2px] bg-black" />
          </div>

          <p className="col-span-7 text-sm font-semibold tracking-wide mb-4 flex items-center gap-2">
            {section.title}
          </p>
          <div className="col-span-1"></div>

          <div className="col-span-6">
            <div className="flex items-center gap-4 mb-10"></div>

            <div className="columns-1 sm:columns-2 md:columns-4 gap-6 space-y-6">
              {section.images.map((img, i) => (
                <div key={i} className="overflow-hidden rounded-2xl break-inside-avoid">
                  <img
                    src={img}
                    alt=""
                    className="w-full object-cover rounded-2xl hover:scale-[1.02] transition duration-300 cursor-pointer"
                    onClick={() => setExpandedImage(img)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-1" />
        </section>
      ))}

      {typedGalleryData.sections.map((section, idx) => (
        <section key={idx} className="py-4 px-4 bg-white md:hidden">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-10 h-[2px] bg-black" />
            <p className="text-sm font-semibold tracking-wide">{section.title}</p>
          </div>

          <div className="columns-2 gap-4 space-y-4">
            {section.images.map((img, i) => (
              <div key={i} className="break-inside-avoid overflow-hidden rounded-xl">
                <img
                  src={img}
                  alt=""
                  className="w-full object-cover rounded-xl active:scale-[0.98] transition cursor-pointer"
                  onClick={() => setExpandedImage(img)}
                />
              </div>
            ))}
          </div>
        </section>
      ))}

      <DonateCTA />

      <ImageLightbox
        imageSrc={expandedImage}
        onRequestClose={() => setExpandedImage(null)}
        alt="Expanded gallery preview"
      />
    </main>
  );
};

export default Gallery;
