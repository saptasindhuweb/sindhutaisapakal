"use client";

import DonateCTA from "@/components/shared/DonateCTA";
import StatsSection from "@/components/shared/StatsSection";
import aboutData from "@/lib/data/about.json";
import router from "next/router";
import { GiBullseye } from "react-icons/gi";
import { TiEye } from "react-icons/ti";
import { PiPlantFill } from "react-icons/pi";
import { useRouter } from "next/navigation";

type Founder = {
  name: string;
  role?: string;
  img: string;
};

type CommitteeMember = {
  name: string;
  role: string;
  img: string;
};

type JourneyItem = {
  year: string;
  title: string;
  awardDate?: string;
  description: string;
  image: string;
  link?: string;
};

type OrganisationItem = {
  title: string;
  image: string;
  alt: string;
  descriptionDesktop: string[];
  descriptionMobile: string[];
  readMoreRoute: string;
};

type CoreValue = {
  title: string;
  desktopText: string;
  mobileText: string;
};

type MaaiChild = {
  name: string;
  img: string;
};

type MaaiGroup = {
  parent: string;
  children: MaaiChild[];
};

const typedAboutData = aboutData as {
  hero: {
    desktopTitleLine1: string;
    desktopTitleLine2: string;
    desktopDescription: string;
    mobileTitle: string;
    mobileDescription: string;
  };
  headings: {
    founders: string;
    managingCommittee: string;
    journey: string;
    organisations: string;
    maaiParivar: string;
    mission: string;
    values: string;
  };
  founders: {
    main: {
      name: string;
      image: string;
      alt: string;
    };
    members: Founder[];
  };
  managingCommittee: CommitteeMember[];
  journey: JourneyItem[];
  organisations: OrganisationItem[];
  aboutHeader: {
    missionText: string;
    valuesText: string;
    mobileMissionText: string;
    mobileValuesText: string;
  };
  coreValues: CoreValue[];
  maaiParivar: MaaiGroup[];
};

const About = () => {
  const router = useRouter();

  const sanmati = typedAboutData.organisations[0];
  const tirthrup = typedAboutData.organisations[1];
  const gopika = typedAboutData.organisations[2];

  const leftValues = typedAboutData.coreValues.slice(0, 3);
  const rightValues = typedAboutData.coreValues.slice(3);

  return (
    <main className="w-full">
      <section className="relative w-full pb-24 overflow-hidden max-sm:hidden">
        <div className="absolute inset-x-0 top-0 h-[48%] z-0" />
        <div className="relative z- w-full">
          <div className="w-full rounded-2xl ">
            <div className="grid grid-cols-8 text-center bg-[#eef8fb] rounded-2xl py-28 pb-40">
              <div className="col-span-1" />

              <div className="col-span-6">
                <h1 className="text-4xl font-bold text-[#0f4c5c] leading-tight ">
                  {typedAboutData.hero.desktopTitleLine1}
                  {typedAboutData.hero.desktopTitleLine2 ? (
                    <>
                      <br />
                      {typedAboutData.hero.desktopTitleLine2}
                    </>
                  ) : null}
                </h1>

                <p className="mt-4 text-gray-600">{typedAboutData.hero.desktopDescription}</p>
              </div>

              <div className="col-span-1" />
            </div>

            <div className="-mt-47">
              <StatsSection />
            </div>

            <div className="bg-white py-16 grid grid-cols-8">
              <div className="col-span-8 grid grid-cols-8 w-full justify-end items-center mb-8">
                <div className="col-span-1 flex items-center justify-end pr-2">
                  <span className="w-16 h-[2px] bg-black" />
                </div>

                <h2 className="text-2xl font-bold tracking-wide col-span-4">{typedAboutData.headings.founders}</h2>
              </div>

              <div className="col-span-8 grid grid-cols-4 p-8">
                <div className="col-span-1" />
                <div className="col-span-2 flex flex-col items-center justify-center">
                  <img
                    src={typedAboutData.founders.main.image}
                    alt={typedAboutData.founders.main.alt}
                    className="rounded-3xl w-full object-cover h-[470px] object-[center_25%]"
                  />
                  <p className="text-center text-2xl font-extrabold tracking-tight text-balance">
                    {typedAboutData.founders.main.name}
                  </p>
                </div>
                <div className="col-span-1" />
              </div>

              <div className="col-span-1" />
              <div className="col-span-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 mt-10">
                {typedAboutData.founders.members.map((person, i) => (
                  <div key={i} className="overflow-hidden rounded-2xl bg-[#f6fbfd]">
                    <img src={person.img} alt={person.name} className="w-full h-[260px] object-cover" />
                    <div className="py-4 text-center">
                      <p className="font-semibold text-[#0f4c5c]">{person.name}</p>
                      {person.role ? <p className="text-sm text-gray-600 mt-1">{person.role}</p> : null}
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-span-1" />

              <div className="col-span-8 grid grid-cols-8 w-full justify-end items-center mt-10 mb-6">
                <div className="col-span-1 flex items-center justify-end pr-2">
                  <span className="w-16 h-[2px] bg-black" />
                </div>
                <h2 className="text-2xl font-bold tracking-wide col-span-4">{typedAboutData.headings.managingCommittee}</h2>
              </div>

              <div className="col-span-1" />
              <div className="col-span-6">
                <ul className="space-y-3 text-gray-700 list-disc list-inside">
                  {typedAboutData.managingCommittee.map((member) => (
                    <li key={member.name}>
                      {member.name} - {member.role}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-1" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-white md:hidden">
        <div className="bg-[#eef8fb] rounded-2xl px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-[#0f4c5c] leading-snug">{typedAboutData.hero.mobileTitle}</h1>

          <p className="mt-4 text-sm text-gray-600">{typedAboutData.hero.mobileDescription}</p>
        </div>

        <div className="">
          <StatsSection />
        </div>

        <div className="px-4">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-10 h-[2px] bg-black" />
            <h2 className="text-lg font-bold tracking-wide">{typedAboutData.headings.founders}</h2>
          </div>

          <div className="flex flex-col items-center mb-10">
            <img
              src={typedAboutData.founders.main.image}
              alt={typedAboutData.founders.main.alt}
              className="rounded-2xl w-full h-72 object-cover object-[center_25%]"
            />
            <p className="text-center text-lg font-bold mt-4 text-[#0f4c5c]">{typedAboutData.founders.main.name}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            {typedAboutData.founders.members.map((person, i) => (
              <div key={i} className="overflow-hidden rounded-xl bg-[#f6fbfd]">
                <img src={person.img} alt={person.name} className="w-full h-40 object-cover" />
                <div className="py-3 text-center">
                  <p className="text-sm font-semibold text-[#0f4c5c]">{person.name}</p>
                  {person.role ? <p className="text-xs text-gray-600 mt-1">{person.role}</p> : null}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 mb-6 mt-8">
            <span className="w-10 h-[2px] bg-black" />
            <h2 className="text-lg font-bold tracking-wide">{typedAboutData.headings.managingCommittee}</h2>
          </div>
          <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside mb-8">
            {typedAboutData.managingCommittee.map((member) => (
              <li key={member.name}>
                {member.name} - {member.role}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white grid grid-cols-8 max-sm:hidden">
        <div className="col-span-8 grid grid-cols-8 w-full justify-end items-center mb-18">
          <div className="col-span-1 flex items-center justify-end pr-2">
            <span className="w-16 h-[2px] bg-black" />
          </div>

          <h2 className="text-2xl font-bold tracking-wide col-span-4">{typedAboutData.headings.journey}</h2>
        </div>
        <div className="col-span-1" />

        <div className="col-span-6 mx-auto px-6">
          <div className="relative">
            <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gray-300 -translate-x-1/2" />

            <div className="space-y-32">
              {typedAboutData.journey.map((item, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <a
                    key={index}
                    href={item.link || "#"}
                    target={item.link ? "_blank" : undefined}
                    rel={item.link ? "noopener noreferrer" : undefined}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative group"
                  >
                    <div className="absolute left-1/2 w-4 h-4 bg-sky-500 rounded-full -translate-x-1/2 z-10" />

                    {isLeft ? (
                      <>
                        <div className="md:pr-16 text-right">
                          <h3 className="text-3xl font-bold mb-2">{item.year}</h3>
                          <h4 className="text-xl font-semibold mb-4">{item.title}</h4>
                          {item.awardDate ? <p className="text-sm text-sky-700 font-semibold mb-3">{item.awardDate}</p> : null}
                          <p className="text-gray-600 leading-relaxed">{item.description}</p>
                        </div>

                        <div className="md:pl-16">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-[280px] object-cover rounded-2xl transition-transform duration-300 group-hover:scale-[1.02]"
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="md:pr-16 order-2 md:order-1">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-[280px] object-cover rounded-2xl"
                          />
                        </div>

                        <div className="md:pl-16 order-1 md:order-2">
                          <h3 className="text-3xl font-bold mb-2">{item.year}</h3>
                          <h4 className="text-xl font-semibold mb-4">{item.title}</h4>
                          {item.awardDate ? <p className="text-sm text-sky-700 font-semibold mb-3">{item.awardDate}</p> : null}
                          <p className="text-gray-600 leading-relaxed">{item.description}</p>
                        </div>
                      </>
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 px-4 md:hidden">
        <div className="flex items-center gap-3 mb-10">
          <span className="w-10 h-[2px] bg-black" />
          <h2 className="text-lg font-bold tracking-wide">{typedAboutData.headings.journey}</h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-[2px] bg-gray-300" />

          <div className="space-y-16">
            {typedAboutData.journey.map((item, index) => (
              <a
                key={index}
                href={item.link || "#"}
                target={item.link ? "_blank" : undefined}
                rel={item.link ? "noopener noreferrer" : undefined}
                className="relative pl-12 block"
              >
                <div className="absolute left-4 top-2 w-3 h-3 bg-sky-500 rounded-full -translate-x-1/2 z-10" />

                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
                  <h3 className="text-xl font-bold mb-1">{item.year}</h3>

                  <h4 className="text-base font-semibold mb-3">{item.title}</h4>
                  {item.awardDate ? <p className="text-xs text-sky-700 font-semibold mb-3">{item.awardDate}</p> : null}

                  <img src={item.image} alt={item.title} className="w-full h-44 object-cover rounded-lg mb-3" />

                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white grid grid-cols-8 mt-30 max-sm:hidden">
        <div className="col-span-8 grid grid-cols-8 w-full justify-end items-center mb-18">
          <div className="col-span-1 flex items-center justify-end pr-2">
            <span className="w-16 h-[2px] bg-black" />
          </div>

          <h2 className="text-2xl font-bold tracking-wide col-span-4">{typedAboutData.headings.organisations}</h2>
        </div>
        <div className="col-span-1" />
        <div className="col-span-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold leading-tight">{sanmati.title}</h2>

              {sanmati.descriptionDesktop.map((text, idx) => (
                <p key={idx} className={`text-gray-600 leading-relaxed ${idx === 0 ? "mt-4" : "mt-3"}`}>
                  {text}
                </p>
              ))}

              <button
                onClick={() => router.push(sanmati.readMoreRoute)}
                className="mt-5 text-sm font-semibold text-sky-700 hover:underline cursor-pointer"
              >
                Read More
              </button>
            </div>

            <div className="flex justify-end">
              <img
                src={sanmati.image}
                alt={sanmati.alt}
                className="rounded-3xl max-w-md w-full object-cover h-[420px] object-[center_5%]"
              />
            </div>
          </div>
        </div>
        <div className="col-span-1" />
      </section>

      <section className="bg-white py-12 px-4 md:hidden">
        <div className="flex items-center gap-3 mb-8">
          <span className="w-10 h-[2px] bg-black" />
          <h2 className="text-lg font-bold tracking-wide">{typedAboutData.headings.organisations}</h2>
        </div>

        <div className="space-y-6">
          <div className="w-full h-60 overflow-hidden rounded-2xl">
            <img src={sanmati.image} alt={sanmati.alt} className="w-full h-full object-cover object-top " />
          </div>

          <div>
            <h3 className="text-2xl font-bold leading-snug">{sanmati.title}</h3>

            {sanmati.descriptionMobile.map((text, idx) => (
              <p key={idx} className={`text-sm text-gray-600 leading-relaxed ${idx === 0 ? "mt-4" : "mt-3"}`}>
                {text}
              </p>
            ))}

            <button
              onClick={() => router.push(sanmati.readMoreRoute)}
              className="mt-5 text-sm font-semibold text-sky-700 active:scale-95 transition"
            >
              Read More -&gt;
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 grid grid-cols-8 max-sm:hidden">
        <div className="col-span-1" />
        <div className="col-span-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src={gopika.image} alt={gopika.alt} className="rounded-3xl h-[420px] max-w-md w-full object-cover object-left" />
            </div>

            <div>
              <h2 className="text-3xl font-bold leading-tight">{gopika.title}</h2>

              {gopika.descriptionDesktop.map((text, idx) => (
                <p key={idx} className={`text-gray-600 leading-relaxed ${idx === 0 ? "mt-4" : "mt-3"}`}>
                  {text}
                </p>
              ))}

              <div className="mt-4 flex gap-6 text-sm font-semibold text-sky-700">
                <span
                  onClick={() => {
                    router.push(gopika.readMoreRoute);
                  }}
                  className="cursor-pointer hover:underline"
                >
                  Read More
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1" />
      </section>

      <section className="bg-white py-12 px-4 md:hidden">
        <div className="space-y-6">
          <div className="w-full h-60 overflow-hidden rounded-2xl">
            <img
              src={gopika.image}
              alt={gopika.alt}
              className="w-full h-full object-cover"
              style={{ objectPosition: "left center" }}
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold leading-snug">{gopika.title}</h2>

            {gopika.descriptionMobile.map((text, idx) => (
              <p key={idx} className={`text-sm text-gray-600 leading-relaxed ${idx === 0 ? "mt-4" : "mt-3"}`}>
                {text}
              </p>
            ))}

            <div className="mt-5 text-sm font-semibold text-sky-700">
              <span onClick={() => router.push(gopika.readMoreRoute)} className="active:scale-95 transition">
                Read More -&gt;
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white grid grid-cols-8 mt-30 max-sm:hidden">
        <div className="col-span-1" />
        <div className="col-span-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold leading-tight">{tirthrup.title}</h2>

              {tirthrup.descriptionDesktop.map((text, idx) => (
                <p key={idx} className={`text-gray-600 leading-relaxed ${idx === 0 ? "mt-4" : "mt-3"}`}>
                  {text}
                </p>
              ))}

              <button
                onClick={() => router.push(tirthrup.readMoreRoute)}
                className="mt-5 text-sm font-semibold text-sky-700 hover:underline cursor-pointer"
              >
                Read More
              </button>
            </div>

            <div className="flex justify-end">
              <img
                src={tirthrup.image}
                alt={tirthrup.alt}
                className="rounded-3xl max-w-md w-full object-cover h-[420px] object-[center_25%]"
              />
            </div>
          </div>
        </div>
        <div className="col-span-1" />
      </section>

      <section className="bg-white py-12 px-4 md:hidden">
        <div className="space-y-6">
          <div className="w-full h-60 overflow-hidden rounded-2xl">
            <img src={tirthrup.image} alt={tirthrup.alt} className="w-full h-full object-cover" />
          </div>

          <div>
            <h2 className="text-2xl font-bold leading-snug">{tirthrup.title}</h2>

            {tirthrup.descriptionMobile.map((text, idx) => (
              <p key={idx} className={`text-sm text-gray-600 leading-relaxed ${idx === 0 ? "mt-4" : "mt-3"}`}>
                {text}
              </p>
            ))}

            <div className="mt-5 text-sm font-semibold text-sky-700">
              <span onClick={() => router.push(tirthrup.readMoreRoute)} className="active:scale-95 transition">
                Read More -&gt;
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white grid grid-cols-8 mt-20 max-sm:hidden">
        <div className="col-span-1" />

        <div className="col-span-6 mt-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-4 flex gap-4 items-center ">
                <GiBullseye /> {typedAboutData.headings.mission}
              </h2>
              <p className="text-gray-700 leading-relaxed">{typedAboutData.aboutHeader.missionText}</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 flex gap-4 items-center ">
                <TiEye /> {typedAboutData.headings.values}
              </h2>
              <p className="text-gray-700 leading-relaxed">{typedAboutData.aboutHeader.valuesText}</p>
            </div>
          </div>
        </div>

        <div className="col-span-1" />
      </section>

      <section className="bg-sky-50 py-20 grid grid-cols-8 max-sm:hidden">
        <div className="col-span-1" />

        <div className="col-span-6">
          <h2 className="text-3xl font-bold mb-10 flex gap-4 items-center">
            <PiPlantFill />{typedAboutData.headings.values}
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <ul className="space-y-6 list-disc list-inside ">
              {leftValues.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <p className="ml-6">{item.desktopText}</p>
                </li>
              ))}
            </ul>

            <ul className="space-y-6 list-disc list-inside ">
              {rightValues.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <p className="ml-6">{item.desktopText}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-span-1" />
      </section>

      <section className="bg-white grid grid-cols-8 mt-30 max-sm:hidden">
        <div className="col-span-8 grid grid-cols-8 w-full justify-end items-center mb-18">
          <div className="col-span-1 flex items-center justify-end pr-2">
            <span className="w-16 h-[2px] bg-black" />
          </div>
          <h2 className="text-2xl font-bold tracking-wide col-span-4">{typedAboutData.headings.maaiParivar}</h2>
        </div>

        <div className="col-span-1" />
        <div className="col-span-6 space-y-14">
          {typedAboutData.maaiParivar.map((group) => (
            <div key={group.parent} className="space-y-6">
              <h3 className="text-2xl font-bold text-black">{group.parent}</h3>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {group.children.map((org) => (
                  <div key={org.name} className="group relative overflow-hidden rounded-2xl shadow-sm">
                    <img
                      src={org.img}
                      alt={org.name}
                      className="w-full h-[240px] object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />

                    <div className="py-4 text-center px-4">
                      <p className="font-semibold text-[#0f4c5c]">{org.name}</p>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center bg-black/55 text-white text-sm font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Click to know more
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-1" />
      </section>

      <section className="py-12 bg-white px-4 md:hidden">
        <div className="space-y-10">
          <div>
            <h2 className="text-2xl font-bold mb-4 flex gap-3 items-center">
              <GiBullseye /> {typedAboutData.headings.mission}
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">{typedAboutData.aboutHeader.mobileMissionText}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 flex gap-3 items-center">
              <TiEye /> {typedAboutData.headings.values}
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">{typedAboutData.aboutHeader.mobileValuesText}</p>
          </div>
        </div>
      </section>

      <section className="bg-sky-50 py-12 px-4 md:hidden">
        <h2 className="text-2xl font-bold mb-8 flex gap-3 items-center">
          <PiPlantFill /> {typedAboutData.headings.values}
        </h2>

        <ul className="space-y-6 text-sm text-gray-700">
          {typedAboutData.coreValues.map((item) => (
            <li key={item.title}>
              <strong>{item.title}</strong>
              <p className="mt-1">{item.mobileText}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-white py-12 px-4 md:hidden">
        <div className="flex items-center gap-3 mb-10">
          <span className="w-10 h-[2px] bg-black" />
          <h2 className="text-lg font-bold tracking-wide">{typedAboutData.headings.maaiParivar}</h2>
        </div>

        <div className="space-y-12">
          {typedAboutData.maaiParivar.map((group) => (
            <div key={group.parent} className="space-y-6">
              <h3 className="text-xl font-bold">{group.parent}</h3>

              <div className="grid grid-cols-2 gap-4">
                {group.children.map((org) => (
                  <div key={org.name} className="overflow-hidden rounded-xl bg-white shadow-sm">
                    <img src={org.img} alt={org.name} className="w-full h-36 object-cover" />

                    <div className="py-3 text-center px-2">
                      <p className="text-sm font-semibold text-[#0f4c5c]">{org.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <DonateCTA />
    </main>
  );
};

export default About;
