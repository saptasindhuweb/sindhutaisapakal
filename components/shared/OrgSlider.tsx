'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";
import { HoverCard } from "../ui/hover-card";
import { IoChevronForward } from "react-icons/io5";
import { HoverCardTrigger, HoverCardContent } from "../ui/hover-card";

const orgs = [
  {
    title: "Sanmati Bal Niketan",
    desc: "Dedicated to providing essential support to underprivileged children.",
    img: "/assets/images/sanmati.png",
    route: "/sanmati",
  },
  {
    title: "Tirthrup Shaikshanik Vasatigruh",
    desc: "A transitional child shelter for one and all and not the orphans.",
    img: "/assets/images/tirthrup.png",
    route: "/tirthrup",

  },
  {
    title: "Gopika Gai Rakshan Kendra",
    desc: "Maai’s care for orphans was extended to animals, especially cows",
    img: "/assets/images/gopika.png",
    route: "/gopika",

  },

  // {
  //   title: "Mamta Bal Sadan, Saswad",
  //   desc: "Orphanage for Girls",
  //   img: "/assets/images/mamta.png",
  //   route: "/mamta",

  // },
  // {
  //   title: "Savitribai Phule Mulinche Vasatigruh",
  //   desc: "Motivates and supports to needy and tribal girls to get educated.",
  //   img: "/assets/images/savitribai.jpg",
  //   route: "/savitribai",

  // },
  // {
  //   title: "Shree Manshanti Chhatralay, Shirur",
  //   desc: "Its home to destitute and needy childrenlly cows.",
  //   img: "/assets/images/shree.png",
  //   route: "/shree",

  // }
];

const CARDS_PER_SLIDE = 3;
const TOTAL_SLIDES = Math.ceil(orgs.length / CARDS_PER_SLIDE); // = 2


const OrgSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % TOTAL_SLIDES);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? TOTAL_SLIDES - 1 : prev - 1
    );
  };

  const startIndex = currentSlide * CARDS_PER_SLIDE;
  const visibleCards = orgs.slice(
    startIndex,
    startIndex + CARDS_PER_SLIDE
  );
  const [tooltip, setTooltip] = useState({
    visible: false,
    x: 0,
    y: 0,
  });
  return (
    <section className="bg-white py-16 grid grid-cols-8">
      <div className="col-span-8 grid grid-cols-8 w-full justify-end items-center mb-8">
        <div className=" col-span-1 flex items-center justify-end pr-2">


          <span className="w-16 h-[2px] bg-black" />
        </div>

        {/* <div className=" col-span-7 flex items-center gap-3 mb-8"> */}

        {/* <span className="w-16 h-[2px] bg-black" /> */}
        <h2 className="text-2xl font-bold tracking-wide col-span-4">OUR ORGANISATIONS</h2>
        {/* </div> */}
      </div>
      <div className="col-span-1" />

      <div className="col-span-6">

        <div className="grid md:grid-cols-3 gap-6 cursor-pointer relative">
          {orgs.map((item) => (
            <article
              key={item.title}
              onClick={() => router.push(item.route)}
              onMouseEnter={(e) =>
                setTooltip({ visible: true, x: e.clientX, y: e.clientY })
              }
              onMouseMove={(e) =>
                setTooltip({ visible: true, x: e.clientX, y: e.clientY })
              }
              onMouseLeave={() =>
                setTooltip({ visible: false, x: 0, y: 0 })
              }
              className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-700">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* CURSOR TOOLTIP */}
        {tooltip.visible && (
          <div
            className="fixed z-50 pointer-events-none bg-black text-white text-xs px-3 py-1 rounded-md"
            style={{
              top: tooltip.y + 12,
              left: tooltip.x + 12,
            }}
          >
            Click to know more
          </div>
        )}

      </div>
      <div className="col-span-1" />
    </section>
  );
};

export default OrgSlider;