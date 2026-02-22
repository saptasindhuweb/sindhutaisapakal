"use client";

import * as React from "react";
import DonateCTA from "@/components/shared/DonateCTA";
import LegacySection from "@/components/shared/LegacySection";
import NgoFocus from "@/components/shared/NgoFocus";
import OrgSlider from "@/components/shared/OrgSlider";
import PageLoader from "@/components/shared/PageLoader";
import StatsSection from "@/components/shared/StatsSection";
import SupportersSlider from "@/components/shared/SupportersSlider";
import usePageReady from "@/hooks/usePageReady";
import { useRouter } from "next/navigation";
import { events } from "@/lib/data/events";

/* shadcn carousel */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

/* ===== HERO IMAGES ===== */
const heroImages = [
  "/assets/carousel/2.jpg",
  "/assets/carousel/3.jpg",
  "/assets/carousel/1.jpg",
];

const latestUpdates = [
  {
    title: "New Education Support Drive Launched",
    description:
      "A new learning support initiative has started to provide books, mentoring, and skill training for children across our homes.",
    date: "January 15, 2026",
    image: "/assets/images/maii5.jpg",
  },
  {
    title: "Health Camp Completed Across Centers",
    description:
      "A multi-center medical camp was conducted with routine checkups, nutrition consultations, and essential medicine support.",
    date: "December 8, 2025",
    image: "/assets/images/maii6.jpg",
  },
  {
    title: "Community Volunteers Joined Child Care Programs",
    description:
      "New volunteers were onboarded to assist with child engagement, after-school learning, and emotional wellbeing activities.",
    date: "November 22, 2025",
    image: "/assets/images/maii7.jpg",
  },
];

const Home = () => {
  const isPageReady = usePageReady([
    ...heroImages,
    "/assets/images/1.png",
    "/assets/images/2.png",
  ]);

  const router = useRouter();

  const recentCompletedEvents = React.useMemo(() => {
    const today = new Date();

    return events
      .filter((event) => new Date(event.date) < today) // past events
      .sort(
        (a, b) =>
          new Date(b.date).getTime() - new Date(a.date).getTime()
      ) // most recent first
      .slice(0, 3); // only 3
  }, []);
  if (!isPageReady) {
    return <PageLoader />;
  }



  return (
    <>
      {/* ===== HERO CAROUSEL (FIXED IMAGE SIZE) ===== */}
      <section className="w-full bg-white">
        {/* <div className="grid grid-cols-8"> */}

        {/* LEFT SPACER */}
        {/* <div className="col-span-1" /> */}

        {/* CENTER COLUMN */}
        <div className=" relative flex items-center justify-center">

          <Carousel
            className="w-full flex justify-center"
            opts={{
              loop: true
            }}
            plugins={[
              Autoplay({
                delay: 5000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,

              }),
            ]}
          >
            <CarouselContent>

              {heroImages.map((img, index) => (
                <CarouselItem key={index} className="flex justify-center">
                  {/* FIXED IMAGE CONTAINER */}
                  <div
                    className="
                  flex items-center justify-center
                  bg-white
                "
                    style={{
                      width: "1600px",
                      height: "900px",
                    }}
                  >
                    <img
                      src={img}
                      alt={`Hero slide ${index + 1}`}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}

            </CarouselContent>

            {/* PREV */}
            {/* <CarouselPrevious
                className="
            absolute left-[-4rem] top-1/2 -translate-y-1/2
            h-12 w-12
            bg-black/60 text-white
            hover:bg-black/80
          "
              /> */}

            {/* NEXT */}
            {/* <CarouselNext
                className="
            absolute right-[-4rem] top-1/2 -translate-y-1/2
            h-12 w-12
            bg-black/60 text-white
            hover:bg-black/80
          "
              /> */}

          </Carousel>
        </div>

        {/* RIGHT SPACER */}
        {/* <div className="col-span-1" /> */}

        {/* </div> */}
      </section>




      <section className="bg-white py-10 grid grid-cols-8">
        <div className=" col-span-1">

        </div>
        <div className=" col-span-6">
          <div className=" grid md:grid-cols-2 gap-12 items-center">
            <div>

              <h2 className="text-3xl font-bold leading-tight">
                Padma Shri Dr. Sou. Sindhutai Sapakal (Maai) <br />
                Mother of Orphans
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                A soul out of life’s hardship was born as Mother to over a thousand
                children and devoted her entire life to social service. After 70
                years of lifespan (Born: 1948 – Died: 2022), she raised a grand
                family of 220 sons-in-laws, 50 daughters-in-laws.
              </p>

              <p className="mt-3 text-gray-600 leading-relaxed">
                She adopted more than 1200 orphaned children and provided them
                food, shelter, and education. She was honored with Padma Shri in
                2021.
              </p>

              <button onClick={() => router.push("/maii")} className="mt-5 text-sm font-semibold text-sky-700 hover:underline cursor-pointer">
                Read More
              </button>
            </div>

            <div className="flex justify-end">
              <img
                src="/assets/images/1.png"
                alt="Sindhutai Sapkal"
                className="rounded-3xl max-w-md w-full object-cover h-[420px] object-[center_25%]"
              />
            </div>
          </div>
        </div>
        <div className=" col-span-1">

        </div>
      </section>

      <section className="bg-white py-20 grid grid-cols-8">
        <div className=" col-span-1">

        </div>
        <div className=" col-span-6">
          <div className=" grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/assets/images/2.png"
                alt="Children with Mai"
                className="rounded-3xl h-[420px] max-w-md w-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold leading-tight">
                The Legacy and The Responsibility
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Sindhutai gave away her own daughter “Mamata” to the Shrimant Dagdu
                Sheth Halwai trust of Pune, to eliminate the feeling of partiality
                between her own child and the adopted children.
              </p>

              <p className="mt-3 text-gray-600 leading-relaxed">
                Years later and
                after completing her education, Mamata-tai – as she is lovingly
                called by the children, started assisting “Maai”. After the sad
                demise of Sindhutai in Jan 2022, Mamata Sindhutai Sapakal undertook
                the responsibility of children
              </p>

              <div className="mt-4 flex gap-6 text-sm font-semibold text-sky-700">
                <span onClick={() => { router.push("/mamtatai") }} className="cursor-pointer hover:underline">Read More</span>
                {/* <span onClick={() => (router.push("/sanmati"))} className="cursor-pointer hover:underline">
                  Saptasindhu
                </span> */}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">

        </div>
      </section>

      <section className="bg-white py-16 grid grid-cols-8">
        <div className="col-span-8 grid grid-cols-8 w-full justify-end items-center mb-8">
          <div className=" col-span-1 flex items-center justify-end pr-2">


            <span className="w-16 h-[2px] bg-black" />
          </div>

          {/* <div className=" col-span-7 flex items-center gap-3 mb-8"> */}

          {/* <span className="w-16 h-[2px] bg-black" /> */}
          <div className=" col-span-6 flex justify-between">
            <h2 className="text-2xl font-bold tracking-wide ">LATEST UPDATES</h2>
            <h3 onClick={() => router.push("/milestones")} className=" text-sky-400 cursor-pointer hover:text-sky-500">More Updates</h3>

          </div>
          {/* </div> */}
        </div>
        <div className="col-span-1" />
        <div className="col-span-6">

          <div className="grid md:grid-cols-3 gap-6">
            {recentCompletedEvents.map((item) => (
              <article
                key={item.id}
                onClick={() => router.push(`/milestones/${item.id}`)}
                className="cursor-pointer rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden hover:shadow-md transition"
              >
                <img
                  src={item.coverImage}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-5">
                  <p className="text-xs text-slate-500 mb-2">
                    {new Date(item.date).toDateString()}
                  </p>

                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-700 leading-relaxed">
                    {item.shortDescription}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="col-span-1" />
      </section>

      <OrgSlider />
      {/* <NgoFocus /> */}
      {/* <LegacySection /> */}
      <SupportersSlider />
      <StatsSection />
      <DonateCTA />
    </>
  );
};

export default Home;
