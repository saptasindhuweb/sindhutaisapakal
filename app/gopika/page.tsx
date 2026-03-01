"use client";

import DonateCTA from "@/components/shared/DonateCTA";
import PageLoader from "@/components/shared/PageLoader";
import gopikaData from "@/lib/data/gopika.json";
import usePageReady from "@/hooks/usePageReady";

type GopikaData = {
  hero: {
    title: string;
    subtitle: string;
    yearLabel: string;
    primaryImage: string;
    primaryAlt: string;
    secondaryImage: string;
    secondaryAlt: string;
  };
  desktopParagraphs: string[];
  mobileParagraphs: string[];
  galleryCtaDesktop: string;
  galleryCtaMobile: string;
  galleryImages: string[];
};

const typedGopikaData = gopikaData as GopikaData;

const Gopika = () => {
  const isPageReady = usePageReady([
    typedGopikaData.hero.primaryImage,
    typedGopikaData.hero.secondaryImage,
    ...typedGopikaData.galleryImages,
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
            <p className="font-bold tracking-wide">{typedGopikaData.hero.title}</p>
          </div>
        </section>

        <section className="grid grid-cols-8 pb-24 pt-4">
          <div className="col-span-1" />

          <div className="col-span-4 mt-6">
            <h1 className="text-3xl font-bold leading-snug pb-6">{typedGopikaData.hero.subtitle}</h1>

            <p className="text-xs text-gray-600 text-justify ">
              <span className="font-semibold text-black">{typedGopikaData.hero.yearLabel}</span>
            </p>

            {typedGopikaData.desktopParagraphs.map((text, idx) => (
              <p key={idx} className="text-xs text-gray-600 text-justify ">
                {text}
              </p>
            ))}
          </div>

          <div className="col-span-2 relative flex justify-start ml-12">
            <img
              src={typedGopikaData.hero.primaryImage}
              alt={typedGopikaData.hero.primaryAlt}
              className="rounded-2xl shadow-lg w-48 h-48 relative z-10"
            />
            <img
              src={typedGopikaData.hero.secondaryImage}
              alt={typedGopikaData.hero.secondaryAlt}
              className="rounded-2xl shadow-xl w-55 absolute top-32 -right-5"
            />
          </div>

          <div className="col-span-1" />
        </section>

        <section className="bg-[#fff7e6] py-20 grid grid-cols-8">
          <div className="col-span-1" />

          <div className="col-span-6">
            <p className="text-2xl font-bold">{typedGopikaData.galleryCtaDesktop}</p>
          </div>

          <div className="col-span-1" />

          <div className="col-span-1" />
          <div className="col-span-6 grid grid-cols-5 gap-8 mt-12">
            {typedGopikaData.galleryImages.map((img, i) => (
              <img key={i} src={img} alt="Gopika Gallery" className="rounded-2xl shadow-md" />
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
            <p className="font-bold tracking-wide text-sm">{typedGopikaData.hero.title}</p>
          </div>

          <h1 className="text-xl font-bold leading-snug mb-4">{typedGopikaData.hero.subtitle}</h1>

          <p className="text-xs font-semibold mb-4">{typedGopikaData.hero.yearLabel}</p>

          <div className="flex gap-3 mb-8">
            <img
              src={typedGopikaData.hero.primaryImage}
              alt={typedGopikaData.hero.primaryAlt}
              className="w-1/2 h-30 object-cover rounded-xl shadow-md"
            />
            <img
              src={typedGopikaData.hero.secondaryImage}
              alt={typedGopikaData.hero.secondaryAlt}
              className="w-1/2 h-30 object-cover rounded-xl shadow-md"
            />
          </div>

          <div className="text-gray-700 text-sm leading-relaxed space-y-4 text-justify">
            {typedGopikaData.mobileParagraphs.map((text, idx) => (
              <p key={idx}>{text}</p>
            ))}
          </div>
        </section>

        <section className="bg-[#fff7e6] py-12 px-4 mt-10">
          <p className="text-lg font-bold mb-8">{typedGopikaData.galleryCtaMobile}</p>

          <div className="grid grid-cols-2 gap-4">
            {typedGopikaData.galleryImages.map((img, i) => (
              <img key={i} src={img} alt="Gopika Gallery" className="w-full h-32 object-cover rounded-xl shadow-sm" />
            ))}
          </div>
        </section>

        <DonateCTA />
      </main>
    </>
  );
};

export default Gopika;
