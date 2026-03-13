'use client'

import { useMemo, useState } from "react";
import ImageLightbox from "@/components/shared/ImageLightbox";
import PageLoader from "@/components/shared/PageLoader";
import sanmatiData from "@/lib/data/sanmati.json";
import usePageReady from "@/hooks/usePageReady";

type TabKey = "campus" | "activities" | "festivals" | "successStories";

type SuccessStory = {
  image: string;
  name: string;
  subtitle: string;
  extra: string;
};

type SanmatiData = {
  title: string;
  subtitle: string;
  yearInfoDesktop: string;
  yearInfoMobile: string;
  heroImages: {
    primary: {
      src: string;
      alt: string;
    };
    secondary: {
      src: string;
      alt: string;
    };
  };
  desktopParagraphs: string[];
  mobileParagraphs: string[];
  gallery: {
    facilities: string[];
    activity: string[];
    program: string[];
    festival: string[];
    trip: string[];
  };
  successStories: SuccessStory[];
};

const typedSanmatiData = sanmatiData as SanmatiData;

const SanmatiBalNiketan = () => {
  const sectionTabs: { key: TabKey; label: string }[] = [
    { key: "campus", label: "Campus" },
    { key: "activities", label: "Activities" },
    { key: "festivals", label: "Festivals" },
    { key: "successStories", label: "Success Stories" },
  ];

  const sectionImages = useMemo(
    () => ({
      campus: typedSanmatiData.gallery.facilities,
      activities: [
        ...typedSanmatiData.gallery.activity,
        ...typedSanmatiData.gallery.program,
        ...typedSanmatiData.gallery.trip,
      ],
      festivals: typedSanmatiData.gallery.festival,
    }),
    []
  );

  const preloadImages = useMemo(
    () => [
      typedSanmatiData.heroImages.primary.src,
      typedSanmatiData.heroImages.secondary.src,
      ...sectionImages.campus,
      ...sectionImages.activities,
      ...sectionImages.festivals,
      ...typedSanmatiData.successStories.map((story) => story.image),
    ],
    [sectionImages]
  );

  const isPageReady = usePageReady(preloadImages);

  const [activeTab, setActiveTab] = useState<TabKey>("campus");
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  if (!isPageReady) {
    return <PageLoader />;
  }

  return (
    <>
      <main className="bg-white max-sm:hidden">
        <section className="grid grid-cols-8 py-24">
          <div className="col-span-1 flex items-center justify-end px-4 mb-4">
            <span className="w-20 h-[2px] bg-black" />
          </div>
          <p className="col-span-7 font-bold tracking-wide mb-4 flex items-center gap-2">{typedSanmatiData.title}</p>
          <div className="col-span-1 " />

          <div className="col-span-7">
            <h1 className="text-3xl font-bold mb-4">{typedSanmatiData.subtitle}</h1>

            <p className="text-xs text-gray-600 mb-6">{typedSanmatiData.yearInfoDesktop}</p>
          </div>

          <div className="col-span-1 " />

          <div className="col-span-6 grid grid-cols-6  items-start gap-12">
            <div className="col-span-4">
              <div className="text-gray-700 text-xs text-justify">
                {typedSanmatiData.desktopParagraphs.map((text, idx) => (
                  <p key={idx} className={idx === 3 ? "mt-4" : ""}>
                    {text}
                  </p>
                ))}
              </div>
            </div>

            <div className="col-span-2 relative flex justify-start">
              <img
                src={typedSanmatiData.heroImages.primary.src}
                alt={typedSanmatiData.heroImages.primary.alt}
                className="w-50 rounded-2xl shadow-lg relative z-10"
              />

              <img
                src={typedSanmatiData.heroImages.secondary.src}
                alt={typedSanmatiData.heroImages.secondary.alt}
                className="w-55 rounded-2xl shadow-xl absolute top-30 -right-6"
              />
            </div>
          </div>

          <div className="col-span-1" />
        </section>

        <section className="grid grid-cols-8 pb-32">
          <div className="col-span-1" />

          <div className="col-span-6">
            <div className="flex justify-center gap-16 mb-14 text-sm font-semibold">
              {sectionTabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`relative ${activeTab === tab.key ? "text-black" : "text-gray-400"}`}
                >
                  {tab.label}

                  {activeTab === tab.key && (
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-[3px] bg-sky-500 rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {activeTab !== "successStories" ? (
              <div className="columns-1 sm:columns-2 md:columns-4 gap-6 space-y-6">
                {sectionImages[activeTab as Exclude<TabKey, "successStories">].map((img, i) => (
                  <div key={i} className="break-inside-avoid rounded-2xl overflow-hidden">
                    <img
                      src={img}
                      alt=""
                      className="w-full object-cover rounded-2xl cursor-zoom-in"
                      onClick={() => setExpandedImage(img)}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="relative">
                <div className="flex justify-center gap-8 items-start">
                  {typedSanmatiData.successStories.map((story, i) => {
                    return (
                      <div key={i} className="w-64 text-center transition-all duration-300">
                        <img src={story.image} alt={story.name} className="w-full h-64 object-cover rounded-2xl mb-4" />

                        <h4 className="font-semibold text-sm">{story.name}</h4>
                        <p className="text-xs text-gray-600">{story.subtitle}</p>
                        <p className="text-xs text-gray-500">{story.extra}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <div className="col-span-1" />
        </section>

        <ImageLightbox
          imageSrc={expandedImage}
          onRequestClose={() => setExpandedImage(null)}
          alt="Expanded sanmati gallery preview"
        />
      </main>

      <main className="bg-white  md:hidden">
        <section className="py-4 px-4">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-[2px] bg-black" />
            <p className="font-bold tracking-wide text-sm">{typedSanmatiData.title}</p>
          </div>

          <h1 className="text-2xl font-bold mb-3">{typedSanmatiData.subtitle}</h1>

          <p className="text-xs text-gray-600 mb-6">{typedSanmatiData.yearInfoMobile}</p>

          <div className="mb-8 flex items-center justify-center gap-2">
            <img
              src={typedSanmatiData.heroImages.primary.src}
              alt={typedSanmatiData.heroImages.primary.alt}
              className="w-full h-30 object-cover rounded-2xl shadow-md"
            />
            <img
              src={typedSanmatiData.heroImages.secondary.src}
              alt={typedSanmatiData.heroImages.secondary.alt}
              className="w-full h-30 object-cover rounded-2xl shadow-md"
            />
          </div>

          <div className="text-gray-700 text-sm leading-relaxed space-y-4 text-justify">
            {typedSanmatiData.mobileParagraphs.map((text, idx) => (
              <p key={idx}>{text}</p>
            ))}
          </div>
        </section>

        <section className="pb-20 px-4">
          <div className="flex gap-6 overflow-x-auto pb-4 mb-8 text-sm font-semibold">
            {sectionTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`whitespace-nowrap relative ${activeTab === tab.key ? "text-black" : "text-gray-400"}`}
              >
                {tab.label}

                {activeTab === tab.key && (
                  <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-sky-500 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {activeTab !== "successStories" ? (
            <div className="columns-2 gap-4 space-y-4">
              {sectionImages[activeTab as Exclude<TabKey, "successStories">].map((img, i) => (
                <div key={i} className="break-inside-avoid rounded-xl overflow-hidden">
                  <img
                    src={img}
                    alt=""
                    className="w-full object-cover rounded-xl"
                    onClick={() => setExpandedImage(img)}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-8">
              {typedSanmatiData.successStories.map((story, i) => (
                <div key={i} className="text-center">
                  <img src={story.image} alt={story.name} className="w-full h-64 object-cover rounded-2xl mb-4" />
                  <h4 className="font-semibold text-sm">{story.name}</h4>
                  <p className="text-xs text-gray-600">{story.subtitle}</p>
                  <p className="text-xs text-gray-500">{story.extra}</p>
                </div>
              ))}
            </div>
          )}
        </section>

        <ImageLightbox
          imageSrc={expandedImage}
          onRequestClose={() => setExpandedImage(null)}
          alt="Expanded sanmati gallery preview"
        />
      </main>
    </>
  );
};

export default SanmatiBalNiketan;
