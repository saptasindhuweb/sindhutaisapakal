"use client";

const milestoneEvents = [
  {
    title: "Padma Shri. Dr. Sau. Sindutai Sapakal Yashodamaai National Award 2026",
    link: "https://youtu.be/9hG98a4ccao?si=BIHprC4Cy4k8uKmO",
    image: "/assets/images/backgrounds/bg-legacy.png",
  },
  {
    title: "Zep 2025",
    link: "https://www.youtube.com/watch?v=-uyFrWYJa7U&list=PL8gCb0gPpoBzaV06cjOFTE8-3ZdW5Y9xa",
    image: "/assets/images/backgrounds/bg-legacy.png",
  },
  {
    title: "Padma Shri. Dr. Sau. Sindutai Sapakal Yashodamaai National Award 2025",
    link: "https://youtu.be/pw_2yDHoU38?si=hg4XF_T_anPqIYDC",
    image: "/assets/images/backgrounds/bg-legacy.png",
  },
  {
    title: "Padma Shri. Dr. Sau. Sindutai Sapakal Yashodamaai National Award 2024",
    link: "https://youtu.be/loVWoDlhiNk?si=0WCM3icUaae2GH4h",
    image: "/assets/images/backgrounds/bg-legacy.png",
  },
  {
    title: "Padma Shri. Dr. Sau. Sindutai Sapakal Yashodamaai National Award 2023",
    link: "https://youtu.be/loVWoDlhiNk?si=0WCM3icUaae2GH4h",
    image: "/assets/images/backgrounds/bg-legacy.png",
  },
];

const MilestonesPage = () => {
  return (
    <main className="w-full bg-white py-16 px-4 md:px-0">
      <section className="grid grid-cols-8 max-sm:hidden">
        <div className="col-span-8 grid grid-cols-8 w-full justify-end items-center mb-10">
          <div className="col-span-1 flex items-center justify-end pr-2">
            <span className="w-16 h-[2px] bg-black" />
          </div>
          <h1 className="text-2xl font-bold tracking-wide col-span-4">MILESTONES</h1>
        </div>

        <div className="col-span-1" />
        <div className="col-span-6 space-y-10">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-3">Zep</h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              This initiative is conducted so that the children in the institution are introduced to subjects beyond
              their regular school curriculum and develop interest in them.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed mt-3">
              Under the theme experts from different fields are invited over a period of ten days to share knowledge
              and interact with the children. Their sessions, along with follow-up discussions, are organised as part
              of the programme. In addition, activities like trekking and visits to various organisations are also
              included.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed mt-3">
              Zep is not just a camp. It is a platform that goes beyond academics, helping children discover their
              hidden talents and laying the foundation for essential life skills.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-3">Yashodamaai</h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Padma Shri Dr. Sau. Sindhutai Sapakal&apos;s work, her contribution to the upliftment of the
              underprivileged, and her love for orphaned children are well known. Even today, there are many
              individuals and organisations in society who continue to work in their own way for disadvantaged and
              vulnerable communities, especially orphaned and destitute children and women.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed mt-3">
              Among these, one individual and one organisation are honoured each year with the Padma Shri Dr. Sau
              Sindhutai Sapakal Yashodamaai National Award on Maai&apos;s remembrance day, that is, 4th January. The
              selection of both the individual and the organisation for this award is done with great thought and care.
              On Maai&apos;s Remembrance Day, these awards are presented by respected dignitaries.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed mt-3">
              The purpose of these awards is to ensure that Maai&apos;s blessings and the inspiration drawn from her
              life&apos;s work reach as many social workers as possible, giving them the strength and energy to continue
              their journey of service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
          {milestoneEvents.map((event) => (
            <a
              key={event.title}
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition"
            >
              <img src={event.image} alt={event.title} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h3 className="text-base font-semibold text-slate-900">{event.title}</h3>
              </div>
            </a>
          ))}
          </div>
        </div>
        <div className="col-span-1" />
      </section>

      <section className="md:hidden">
        <div className="flex items-center gap-3 mb-8">
          <span className="w-10 h-[2px] bg-black" />
          <h1 className="text-xl font-bold tracking-wide">MILESTONES</h1>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <h2 className="text-lg font-bold text-slate-900 mb-2">Zep</h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              This initiative is conducted so that the children in the institution are introduced to subjects beyond
              their regular school curriculum and develop interest in them.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed mt-2">
              Under the theme experts from different fields are invited over a period of ten days to share knowledge
              and interact with the children. Their sessions, along with follow-up discussions, are organised as part
              of the programme, along with activities like trekking and visits to organisations.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed mt-2">
              Zep is not just a camp. It is a platform beyond academics for hidden talents and life skills.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <h2 className="text-lg font-bold text-slate-900 mb-2">Yashodamaai</h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Padma Shri Dr. Sau. Sindhutai Sapakal&apos;s work and contribution for underprivileged and orphaned children
              are well known. Many people and organisations continue this service.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed mt-2">
              Each year, one individual and one organisation are honoured with this award on Maai&apos;s remembrance day
              (4th January), selected with great thought and care.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed mt-2">
              The purpose is to pass Maai&apos;s inspiration to social workers and strengthen their journey of service.
            </p>
          </div>

          {milestoneEvents.map((event) => (
            <a
              key={event.title}
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl overflow-hidden border border-slate-200 shadow-sm"
            >
              <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-sm font-semibold text-slate-900 leading-relaxed">{event.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
};

export default MilestonesPage;

