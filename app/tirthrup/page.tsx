"use client";

import DonateCTA from "@/components/shared/DonateCTA";
import PageLoader from "@/components/shared/PageLoader";
import tirthrupData from "@/lib/data/tirthrup.json";
import usePageReady from "@/hooks/usePageReady";

type TirthrupData = {
  hero: {
    title: string;
    subtitle: string;
    primaryImage: string;
    primaryAlt: string;
    secondaryImage: string;
    secondaryAlt: string;
  };
  desktopParagraphs: string[];
  desktopNutshellHeading: string;
  desktopNutshellText: string;
  mobileParagraphs: string[];
  mobileNutshellHeading: string;
  galleryCtaDesktop: string;
  galleryCtaMobile: string;
  galleryImages: string[];
};

const typedTirthrupData = tirthrupData as TirthrupData;

const Trithrup = () => {
  const isPageReady = usePageReady([
    typedTirthrupData.hero.primaryImage,
    typedTirthrupData.hero.secondaryImage,
    ...typedTirthrupData.galleryImages,
  ]);

  if (!isPageReady) {
    return <PageLoader />;
  }

  return (
    <>
      <main className="bg-white mt-20 max-sm:hidden">
        <section className="grid grid-cols-8 pt-24">
          <div className="col-span-1 flex items-start justify-end px-4">
            <span className="w-20 h-[2px] bg-black mt-2" />
          </div>

          <div className="col-span-7">
            <p className="font-bold tracking-wide ">{typedTirthrupData.hero.title}</p>
          </div>
        </section>

        <section className="grid grid-cols-8 pb-24 pt-4">
          <div className="col-span-1" />

          <div className="col-span-4 ">
            <h1 className="text-3xl font-bold leading-snug pb-8">{typedTirthrupData.hero.subtitle}</h1>

            {typedTirthrupData.desktopParagraphs.map((text, idx) => (
              <p key={idx} className="text-xs text-gray-600 text-justify">
                {text}
              </p>
            ))}

            <p className="text-xs font-semibold text-black pt-8">{typedTirthrupData.desktopNutshellHeading}</p>

            <p className="text-xs text-gray-600 text-justify">{typedTirthrupData.desktopNutshellText}</p>
          </div>

          <div className="col-span-2 relative flex justify-start ml-12">
            <img
              src={typedTirthrupData.hero.primaryImage}
              alt={typedTirthrupData.hero.primaryAlt}
              className="rounded-2xl shadow-lg w-45 h-45 relative z-10"
            />
            <img
              src={typedTirthrupData.hero.secondaryImage}
              alt={typedTirthrupData.hero.secondaryAlt}
              className="rounded-2xl shadow-xl w-55 absolute top-32 -right-5"
            />
          </div>

          <div className="col-span-1" />
        </section>

        <section className="bg-[#fff7e6] py-18 grid grid-cols-8">
          <div className="col-span-1" />

          <div className="col-span-6">
            <p className="text-2xl font-bold">{typedTirthrupData.galleryCtaDesktop}</p>
          </div>
          <div className="col-span-1" />
          <div className="col-span-1" />

          <div className="col-span-6 grid grid-cols-4 gap-8 mt-12">
            {typedTirthrupData.galleryImages.map((img, i) => (
              <img key={i} src={img} alt="" className="rounded-2xl shadow-md" />
            ))}
          </div>

          <div className="col-span-1" />
        </section>

        <DonateCTA />
      </main>

      <main className="bg-white md:hidden">
        <section className="pt-4 px-4">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-[2px] bg-black" />
            <p className="font-bold tracking-wide text-sm">{typedTirthrupData.hero.title}</p>
          </div>

          <h1 className="text-xl font-bold leading-snug mb-6">{typedTirthrupData.hero.subtitle}</h1>

          <div className="flex gap-3 mb-8">
            <img
              src={typedTirthrupData.hero.primaryImage}
              alt={typedTirthrupData.hero.primaryAlt}
              className="w-1/2 h-30 object-cover rounded-xl shadow-md"
            />
            <img
              src={typedTirthrupData.hero.secondaryImage}
              alt={typedTirthrupData.hero.secondaryAlt}
              className="w-1/2 h-30 object-cover rounded-xl shadow-md"
            />
          </div>

          <div className="text-gray-700 text-sm leading-relaxed space-y-4 text-justify">
            {typedTirthrupData.mobileParagraphs.slice(0, 2).map((text, idx) => (
              <p key={idx}>{text}</p>
            ))}

            <p className="font-semibold text-black pt-4">{typedTirthrupData.mobileNutshellHeading}</p>

            {typedTirthrupData.mobileParagraphs.slice(2).map((text, idx) => (
              <p key={idx}>{text}</p>
            ))}
          </div>
        </section>

        <section className="bg-[#fff7e6] py-12 px-4 mt-10">
          <p className="text-lg font-bold mb-8">{typedTirthrupData.galleryCtaMobile}</p>

          <div className="grid grid-cols-2 gap-4">
            {typedTirthrupData.galleryImages.map((img, i) => (
              <img key={i} src={img} alt="" className="w-full h-32 object-cover rounded-xl shadow-sm" />
            ))}
          </div>
        </section>

        <DonateCTA />
      </main>
    </>
  );
};

export default Trithrup;
