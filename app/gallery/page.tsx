"use client";

import Image from "next/image";
import { useState } from "react";
import DonateCTA from "@/components/shared/DonateCTA";
import ImageLightbox from "@/components/shared/ImageLightbox";
import AlbumCard from "@/components/shared/AlbumCard";
import AlbumLightbox from "@/components/shared/AlbumLightbox";
import galleryData from "@/lib/data/gallery.json";

type GallerySection = {
  title: string;
  images: string[];
};

type Album = {
  id: string;
  title: string;
  cover: string;
  images: string[];
};

type YearlyAlbumSection = {
  id: string;
  title: string;
  albums: Album[];
};

type CaptionPhoto = {
  src: string;
  caption: string;
};

type CaptionSection = {
  id: string;
  title: string;
  photos: CaptionPhoto[];
};

const typedGalleryData = galleryData as {
  sections: GallerySection[];
};

const yearlyAlbumSections: YearlyAlbumSection[] = [
  {
    id: "yashodamai-national-award",
    title: "Yashodamai National Award",
    albums: [
      {
        id: "yashodamai-2023",
        title: "2023",
        cover: "/assets/gallery/yashodamai/2023/1.jpg",
        images: ["/assets/gallery/yashodamai/2023/1.jpg", "/assets/gallery/yashodamai/2023/2.jpg", "/assets/gallery/yashodamai/2023/3.jpg", "/assets/gallery/yashodamai/2023/4.jpg", "/assets/gallery/yashodamai/2023/5.jpg", "/assets/gallery/yashodamai/2023/6.jpg"],
      },
      {
        id: "yashodamai-2024",
        title: "2024",
        cover: "/assets/gallery/yashodamai/2024/1.jpg",
        images: ["/assets/gallery/yashodamai/2024/1.jpg", "/assets/gallery/yashodamai/2024/2.jpg", "/assets/gallery/yashodamai/2024/3.jpg", "/assets/gallery/yashodamai/2024/4.jpg", "/assets/gallery/yashodamai/2024/5.jpg", "/assets/gallery/yashodamai/2024/6.jpg", "/assets/gallery/yashodamai/2024/7.jpg"],
      },
      {
        id: "yashodamai-2025",
        title: "2025",
        cover: "/assets/gallery/yashodamai/2025/1.jpg",
        images: ["/assets/gallery/yashodamai/2025/1.jpg", "/assets/gallery/yashodamai/2025/2.jpg", "/assets/gallery/yashodamai/2025/3.jpg", "/assets/gallery/yashodamai/2025/4.jpg", "/assets/gallery/yashodamai/2025/5.jpg", "/assets/gallery/yashodamai/2025/6.jpg"],
      },
      {
        id: "yashodamai-2026",
        title: "2026",
        cover: "/assets/gallery/yashodamai/2026/1.jpg",
        images: ["/assets/gallery/yashodamai/2026/1.jpg", "/assets/gallery/yashodamai/2026/2.jpg", "/assets/gallery/yashodamai/2026/3.jpg", "/assets/gallery/yashodamai/2026/4.jpg", "/assets/gallery/yashodamai/2026/5.jpg", "/assets/gallery/yashodamai/2026/6.jpg", "/assets/gallery/yashodamai/2026/7.jpg", "/assets/gallery/yashodamai/2026/8.jpg", "/assets/gallery/yashodamai/2026/9.jpg", "/assets/gallery/yashodamai/2026/10.jpg", "/assets/gallery/yashodamai/2026/11.jpg"],
      },
    ],
  },
  {
    id: "zep",
    title: "Zep",
    albums: [
      {
        id: "zep-2023",
        title: "2023",
        cover: "/assets/gallery/25.png",
        images: ["/assets/gallery/25.png", "/assets/gallery/26.png", "/assets/gallery/27.png", "/assets/gallery/28.png"],
      },
      {
        id: "zep-2024",
        title: "2024",
        cover: "/assets/zhep/2023/trip.jpg",
        images: [
          "/assets/zhep/2023/trip.jpg",
          "/assets/zhep/2023/%E0%A4%AE%E0%A4%BE%E0%A4%88%20%E0%A4%B8%E0%A4%AD%E0%A4%BE%E0%A4%97%E0%A5%83%E0%A4%B9.jpg",
          "/assets/zhep/2023/%E0%A4%AF%E0%A5%8B%E0%A4%97%20%E0%A4%A6%E0%A4%BF%E0%A4%A8.jpg",
          "/assets/zhep/2023/%E0%A4%B8%E0%A4%9A%E0%A4%BF%E0%A4%A8%20%E0%A4%A4%E0%A5%87%E0%A4%82%E0%A4%A1%E0%A5%81%E0%A4%B2%E0%A4%95%E0%A4%B0.jpg",
        ],
      },
      {
        id: "zep-2025",
        title: "2025",
        cover: "/assets/gallery/zep/2025/1.jpg",
      images: ["/assets/gallery/zep/2025/1.jpg", "/assets/gallery/zep/2025/2.jpg", "/assets/gallery/zep/2025/3.jpg", "/assets/gallery/zep/2025/4.jpg", "/assets/gallery/zep/2025/5.jpg", "/assets/gallery/zep/2025/6.jpg", "/assets/gallery/zep/2025/7.jpg", "/assets/gallery/zep/2025/8.jpg", "/assets/gallery/zep/2025/9.jpg", "/assets/gallery/zep/2025/10.jpg", "/assets/gallery/zep/2025/11.jpg", "/assets/gallery/zep/2025/12.jpg"],
      },
     
    ],
  },
];

const captionSections: CaptionSection[] = [
  {
    id: "festival-celebration-sanmati",
    title: "Festival Celebration At Sanmati",
    photos: [
      { src: "/assets/gallery/festival/bahubij-1.jpg", caption: "Bhaubij" },
      { src: "/assets/gallery/festival/bahubij-2.jpg", caption: "Bhaubij" },
      { src: "/assets/gallery/festival/dahi-handi.jpg", caption: "Dahi Handi" },
      { src: "/assets/gallery/festival/gokul-ashtami.jpg", caption: "Gokul Ashtami" },
      { src: "/assets/gallery/festival/raksha-bandhan-1.jpg", caption: "Raksha Bandhan" },
      { src: "/assets/gallery/festival/raksha-bandhan-2.jpg", caption: "Raksha Bandhan" },
    ],
  },
  // {
  //   id: "programs-activities-sanmati",
  //   title: "Programs and Activities at Sanmati",
  //   photos: [

  //   ],
  // },
];

const Gallery = () => {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);
  const [activeAlbum, setActiveAlbum] = useState<Album | null>(null);

  return (
    <main className="w-full bg-white">
      {yearlyAlbumSections.map((section, idx) => (
        <section key={`${section.id}-${idx}`} className="py-20 grid grid-cols-8 max-sm:hidden">
          <div className="col-span-1 flex items-center justify-end px-4 mb-4">
            <span className="w-20 h-[2px] bg-black" />
          </div>
          <p className="col-span-7 text-sm font-semibold tracking-wide mb-4 flex items-center gap-2">{section.title}</p>
          <div className="col-span-1" />
          <div className="col-span-6">
            <div className="grid md:grid-cols-2 gap-8">
              {section.albums.map((album) => (
                <AlbumCard
                  key={album.id}
                  cover={album.cover}
                  title={album.title}
                  photoCount={album.images.length}
                  onClick={() => setActiveAlbum(album)}
                />
              ))}
            </div>
          </div>
          <div className="col-span-1" />
        </section>
      ))}

      {captionSections.map((section, idx) => (
        <section key={`${section.id}-${idx}`} className="py-20 grid grid-cols-8 max-sm:hidden">
          <div className="col-span-1 flex items-center justify-end px-4 mb-4">
            <span className="w-20 h-[2px] bg-black" />
          </div>
          <p className="col-span-7 text-sm font-semibold tracking-wide mb-4 flex items-center gap-2">{section.title}</p>
          <div className="col-span-1" />
          <div className="col-span-6">
            <div className="grid md:grid-cols-3 gap-6">
              {section.photos.map((photo, i) => (
                <div key={`${section.id}-${i}`} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                  <div className="relative h-64">
                    <Image
                      src={photo.src}
                      alt={photo.caption}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover cursor-pointer"
                      onClick={() => setExpandedImage(photo.src)}
                      loading="lazy"
                    />
                  </div>
                  <p className="px-3 py-2 text-sm text-gray-700">{photo.caption}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-1" />
        </section>
      ))}

      {yearlyAlbumSections.map((section, idx) => (
        <section key={`${section.id}-m-${idx}`} className="py-4 px-4 bg-white md:hidden">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-10 h-[2px] bg-black" />
            <p className="text-sm font-semibold tracking-wide">{section.title}</p>
          </div>
          <div className="space-y-4">
            {section.albums.map((album) => (
              <AlbumCard
                key={`${album.id}-m`}
                cover={album.cover}
                title={album.title}
                photoCount={album.images.length}
                onClick={() => setActiveAlbum(album)}
              />
            ))}
          </div>
        </section>
      ))}

      {captionSections.map((section, idx) => (
        <section key={`${section.id}-m-${idx}`} className="py-4 px-4 bg-white md:hidden">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-10 h-[2px] bg-black" />
            <p className="text-sm font-semibold tracking-wide">{section.title}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {section.photos.map((photo, i) => (
              <div key={`${section.id}-m-${i}`} className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                <div className="relative h-36">
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    fill
                    sizes="50vw"
                    className="object-cover cursor-pointer"
                    onClick={() => setExpandedImage(photo.src)}
                    loading="lazy"
                  />
                </div>
                <p className="px-2 py-2 text-xs text-gray-700">{photo.caption}</p>
              </div>
            ))}
          </div>
        </section>
      ))}

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
                  <Image
                    src={img}
                    alt=""
                    width={800}
                    height={600}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                    className="w-full h-auto object-cover rounded-2xl hover:scale-[1.02] transition duration-300 cursor-pointer"
                    onClick={() => setExpandedImage(img)}
                    loading="lazy"
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
                <Image
                  src={img}
                  alt=""
                  width={600}
                  height={450}
                  sizes="50vw"
                  className="w-full h-auto object-cover rounded-xl active:scale-[0.98] transition cursor-pointer"
                  onClick={() => setExpandedImage(img)}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>
      ))}

      <DonateCTA />

      <AlbumLightbox
        album={activeAlbum}
        onClose={() => setActiveAlbum(null)}
        onImageClick={(src) => setExpandedImage(src)}
      />

      <ImageLightbox
        imageSrc={expandedImage}
        onRequestClose={() => setExpandedImage(null)}
        alt="Expanded gallery preview"
      />
    </main>
  );
};

export default Gallery;
