"use client";

import * as React from "react";
import DonateCTA from "@/components/shared/DonateCTA";
import OrgSlider from "@/components/shared/OrgSlider";
import StatsSection from "@/components/shared/StatsSection";
import SupportersSlider from "@/components/shared/SupportersSlider";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import homeData from "@/lib/data/home.json";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

type HomeSection = {
  title: string;
  subtitle?: string;
  image: string;
  alt: string;
  paragraphs: string[];
  route: string;
  readMoreLabel: string;
};

type HomeData = {
  heroImages: string[];
  sections: {
    maai: HomeSection;
    legacy: HomeSection;
  };
  latestUpdates: {
    heading: string;
    moreLabelDesktop: string;
    moreLabelMobile: string;
  };
};

const typedHomeData = homeData as HomeData;

interface MilestoneDoc {
  _id: string;
  slug: string;
  title: string;
  thumbnail: string;
  shortDescription: string;
  date: string;
  youtubeLink?: string;
  type: string;
}

const Home = () => {
  const router = useRouter();
  const [recentUpdates, setRecentUpdates] = React.useState<MilestoneDoc[]>([]);
  const [loadingUpdates, setLoadingUpdates] = React.useState(true);

  React.useEffect(() => {
    fetch("/api/milestones?past=true&limit=3")
      .then((r) => r.json())
      .then((data) => setRecentUpdates(data.milestones ?? []))
      .catch(() => setRecentUpdates([]))
      .finally(() => setLoadingUpdates(false));
  }, []);

  return (
    <>
      <section className="w-full bg-white max-sm:hidden">
        <div className="md:relative flex items-center justify-center">
          <Carousel
            className="w-full flex justify-center"
            opts={{ loop: true }}
            plugins={[
              Autoplay({
                delay: 5000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
          >
            <CarouselContent>
              {typedHomeData.heroImages.map((img, index) => (
                <CarouselItem key={index} className="flex justify-center">
                  <div className="flex items-center justify-center bg-white" style={{ width: "1600px", height: "900px" }}>
                    <img src={img} alt={`Hero slide ${index + 1}`} className="h-full w-full object-contain" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      <section className="w-full bg-white md:hidden">
        <div className="w-full">
          <Carousel
            className="w-full"
            opts={{ loop: true }}
            plugins={[
              Autoplay({
                delay: 5000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
          >
            <CarouselContent>
              {typedHomeData.heroImages.map((img, index) => (
                <CarouselItem key={index}>
                  <div className="w-full h-[220px] sm:h-[350px] md:h-[500px] lg:h-[650px] xl:h-[750px]">
                    <img src={img} alt={`Hero slide ${index + 1}`} className="w-full h-full object-cover" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      <section className="bg-white py-10 grid grid-cols-8 max-sm:hidden">
        <div className="col-span-1"></div>
        <div className="col-span-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold leading-tight">
                {typedHomeData.sections.maai.title} <br />
                {typedHomeData.sections.maai.subtitle}
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">{typedHomeData.sections.maai.paragraphs[0]}</p>
              <p className="mt-3 text-gray-600 leading-relaxed">{typedHomeData.sections.maai.paragraphs[1]}</p>

              <button
                onClick={() => router.push(typedHomeData.sections.maai.route)}
                className="mt-5 text-sm font-semibold text-sky-700 hover:underline cursor-pointer"
              >
                {typedHomeData.sections.maai.readMoreLabel}
              </button>
            </div>

            <div className="flex justify-end">
              <img
                src={typedHomeData.sections.maai.image}
                alt={typedHomeData.sections.maai.alt}
                className="rounded-3xl max-w-md w-full object-cover h-[420px] object-[center_25%]"
              />
            </div>
          </div>
        </div>
        <div className="col-span-1"></div>
      </section>

      <section className="bg-white py-10 p-4 md:hidden">
        <div className="col-span-6">
          <div className="gap-12 items-center">
            <div className="flex flex-col items-center gap-4">
              <div className="flex justify-end">
                <img
                  src={typedHomeData.sections.maai.image}
                  alt={typedHomeData.sections.maai.alt}
                  className="rounded-3xl max-w-md w-full object-cover h-[320px] object-[center_25%]"
                />
              </div>

              <h2 className="text-xl font-bold leading-tight text-center">
                {typedHomeData.sections.maai.title} <br />
                {typedHomeData.sections.maai.subtitle}
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed text-justify">{typedHomeData.sections.maai.paragraphs[0]}</p>

              <p className="mt-3 text-gray-600 leading-relaxed text-justify">
                {typedHomeData.sections.maai.paragraphs[1]}{" "}
                <button
                  onClick={() => router.push(typedHomeData.sections.maai.route)}
                  className="text-sm font-semibold text-sky-700 hover:underline cursor-pointer"
                >
                  {typedHomeData.sections.maai.readMoreLabel}
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 grid grid-cols-8 max-sm:hidden">
        <div className="col-span-1"></div>
        <div className="col-span-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={typedHomeData.sections.legacy.image}
                alt={typedHomeData.sections.legacy.alt}
                className="rounded-3xl h-[420px] max-w-md w-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold leading-tight">{typedHomeData.sections.legacy.title}</h2>

              <p className="mt-4 text-gray-600 leading-relaxed">{typedHomeData.sections.legacy.paragraphs[0]}</p>
              <p className="mt-3 text-gray-600 leading-relaxed">{typedHomeData.sections.legacy.paragraphs[1]}</p>

              <div className="mt-4 flex gap-6 text-sm font-semibold text-sky-700">
                <span onClick={() => router.push(typedHomeData.sections.legacy.route, { scroll: false })} className="cursor-pointer hover:underline">
                  {typedHomeData.sections.legacy.readMoreLabel}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1"></div>
      </section>

      <section className="bg-white py-10 p-4 md:hidden">
        <div className="col-span-6">
          <div className="gap-12 items-center">
            <div className="flex flex-col items-center gap-4">
              <div className="flex justify-end">
                <img
                  src={typedHomeData.sections.legacy.image}
                  alt={typedHomeData.sections.legacy.alt}
                  className="rounded-3xl max-w-md w-full object-cover h-[320px] object-[center_25%]"
                />
              </div>

              <h2 className="text-xl font-bold leading-tight text-center">{typedHomeData.sections.legacy.title}</h2>

              <p className="mt-4 text-gray-600 leading-relaxed text-justify">{typedHomeData.sections.legacy.paragraphs[0]}</p>

              <p className="mt-3 text-gray-600 leading-relaxed text-justify">
                {typedHomeData.sections.legacy.paragraphs[1]}{" "}
                <button
                  onClick={() => router.push(typedHomeData.sections.legacy.route, { scroll: false })}
                  className="text-sm font-semibold text-sky-700 hover:underline cursor-pointer"
                >
                  {typedHomeData.sections.legacy.readMoreLabel}
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 grid grid-cols-8 max-sm:hidden">
        <div className="col-span-8 grid grid-cols-8 w-full justify-end items-center mb-8">
          <div className="col-span-1 flex items-center justify-end pr-2">
            <span className="w-16 h-[2px] bg-black" />
          </div>

          <div className="col-span-6 flex justify-between">
            <h2 className="text-2xl font-bold tracking-wide">{typedHomeData.latestUpdates.heading}</h2>
            <h3 onClick={() => router.push("/milestones")} className="text-sky-700 cursor-pointer hover:text-sky-800">
              {typedHomeData.latestUpdates.moreLabelDesktop}
            </h3>
          </div>
        </div>
        <div className="col-span-1" />
        <div className="col-span-6">
          <div className="grid md:grid-cols-3 gap-6">
            {loadingUpdates
              ? [1, 2, 3].map((i) => (
                  <div key={i} className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
                    <Skeleton className="w-full h-48" />
                    <div className="p-5 space-y-2">
                      <Skeleton className="h-3 w-1/3" />
                      <Skeleton className="h-5 w-3/4" />
                      <Skeleton className="h-4 w-full" />
                    </div>
                  </div>
                ))
              : recentUpdates.map((item) => (
                  <article
                    key={item._id}
                    onClick={() =>
                      item.youtubeLink
                        ? window.open(item.youtubeLink, "_blank", "noopener,noreferrer")
                        : router.push(`/milestones/${item.slug}`)
                    }
                    className="cursor-pointer rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden hover:shadow-md transition"
                  >
                    <img src={item.thumbnail} alt={item.title} className="w-full h-48 object-cover" />
                    <div className="p-5">
                      <p className="text-xs text-slate-500 mb-2">{new Date(item.date).toDateString()}</p>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-slate-700 leading-relaxed">{item.shortDescription}</p>
                    </div>
                  </article>
                ))
            }
          </div>
        </div>
        <div className="col-span-1" />
      </section>

      <section className="bg-white py-12 p-4 md:hidden">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-10 h-[2px] bg-black" />
            <h2 className="text-xl font-bold tracking-wide">{typedHomeData.latestUpdates.heading}</h2>
          </div>

          <h3
            onClick={() => router.push("/milestones")}
            className="text-sky-700 text-sm font-medium cursor-pointer hover:underline"
          >
            {typedHomeData.latestUpdates.moreLabelMobile}
          </h3>
        </div>

        <div className="space-y-6">
          {loadingUpdates
            ? [1, 2, 3].map((i) => (
                <div key={i} className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
                  <Skeleton className="w-full h-52" />
                  <div className="p-4 space-y-2">
                    <Skeleton className="h-3 w-1/3" />
                    <Skeleton className="h-5 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                </div>
              ))
            : recentUpdates.map((item) => (
                <article
                  key={item._id}
                  onClick={() =>
                    item.youtubeLink
                      ? window.open(item.youtubeLink, "_blank", "noopener,noreferrer")
                      : router.push(`/milestones/${item.slug}`)
                  }
                  className="cursor-pointer rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden active:scale-[0.98] transition"
                >
                  <img src={item.thumbnail} alt={item.title} className="w-full h-52 object-cover" />
                  <div className="p-4">
                    <p className="text-xs text-slate-500 mb-2">{new Date(item.date).toDateString()}</p>
                    <h3 className="text-base font-semibold text-slate-900 mb-2 leading-snug">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.shortDescription}</p>
                  </div>
                </article>
              ))
          }
        </div>
      </section>

      <OrgSlider />
      <SupportersSlider />
      <StatsSection />
      <DonateCTA />
    </>
  );
};

export default Home;
