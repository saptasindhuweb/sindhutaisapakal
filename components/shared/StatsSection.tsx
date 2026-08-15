import Image from "next/image";

type StatItem = {
  icon: string;
  value: string;
  label: string;
};

const stats: StatItem[] = [
  {
    icon: "/assets/images/misc/cows.jpg",
    value: "1200+",
    label: "Orphans Nurtured",
  },
  {
    icon: "/assets/images/misc/orphans-in-care.jpg",
    value: "260+",
    label: "Orphans in Care",
  },
  {
    icon: "/assets/images/misc/organisations.jpg",
    value: "6",
    label: "Organisations",
  },
  {
    icon: "/assets/images/misc/cows.jpg",
    value: "250+",
    label: "Cows under care",
  },
];

const StatsSection = () => {
  return (
    <>
      <section className=" py-16 w-full grid grid-cols-8 max-sm:hidden">
        <div className="col-span-1">

        </div>
        <div className="col-span-6">
          <div className="flex flex-row gap-4 justify-between items-center rounded-3xl bg-white  py-4 px-12 shadow-sm">
            {stats.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center rounded-2xl"
              >
                <div className="h-40 w-40  flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={128}
                    height={128}
                    className="h-32 w-32 object-cover rounded-xl"
                  />
                </div>

                <p className="text-2xl font-bold text-sky-400">
                  {item.value}
                </p>

                <p className=" text-sm font-semibold mt-2 text-gray-600">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className=" col-span-1">

        </div>
      </section>
      {/* ===== STATS SECTION - MOBILE ONLY ===== */}
      <section className="py-12 bg-white p-4 md:hidden">

        <div className="rounded-3xl bg-white shadow-sm p-6">

          <div className="grid grid-cols-2 gap-6">
            {stats.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center active:scale-[0.97] transition"
              >
                {/* Icon */}
                <div className="h-20 w-20 flex items-center justify-center mb-3">
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={64}
                    height={64}
                    className="h-16 w-16 object-cover rounded-lg"
                  />
                </div>

                {/* Value */}
                <p className="text-xl font-bold text-sky-400">
                  {item.value}
                </p>

                {/* Label */}
                <p className="text-xs font-semibold mt-1 text-gray-600">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default StatsSection;

