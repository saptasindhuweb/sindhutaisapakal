type StatItem = {
  icon: string;
  value: string;
  label: string;
};

const stats: StatItem[] = [
  {
    icon: "/assets/images/cows.jpg",
    value: "1200+",
    label: "Orphans Nurtured",
  },
  {
    icon: "/assets/images/cows.jpg",
    value: "260+",
    label: "Orphans in Care",
  },
  {
    icon: "/assets/images/cows.jpg",
    value: "6",
    label: "Organisations",
  },
  {
    icon: "/assets/images/cows.jpg",
    value: "250+",
    label: "Cows under care",
  },
];

const StatsSection = () => {
  return (
    <section className=" py-16 w-full grid grid-cols-8">
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
                <img
                  src={item.icon}
                  alt={item.label}
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
  );
};

export default StatsSection;
