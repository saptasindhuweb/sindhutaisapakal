'use client'

import { useRouter } from "next/navigation";


const DonateCTA = () => {

  const router = useRouter();

  return (
    <>
      <section className="py-20 bg-white grid grid-cols-8 max-sm:hidden">
        <div className="col-span-1">

        </div>
        <div className="col-span-6 mx-16">
          <div
            className="relative overflow-hidden rounded-3xl bg-cover bg-center"
            style={{
              backgroundImage: "url('/assets/images/backgrounds/bg-donate.png')",
            }}
          >
            {/* overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20">
              <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">
                Your small act of kindness today can become  <br />
                their strength for a brighter tomorrow.
              </h2>

              <div className="flex flex-wrap gap-4 justify-center">
                <button onClick={() => router.push("/contact")} className="bg-sky-500 text-white font-semibold px-6 py-3 rounded-sm hover:bg-sky-600 transition">
                  Join as a volunteer
                </button>

                <button onClick={() => router.push("/donate")} className="bg-white text-black font-semibold px-6 py-3 rounded-sm hover:bg-gray-100 transition">
                  Donate Here
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">

        </div>
      </section>

      {/* ===== DONATE CTA - MOBILE ONLY ===== */}
      <section className="py-12 bg-white p-4 md:hidden">

        <div
          className="relative overflow-hidden rounded-2xl bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/images/backgrounds/bg-donate.png')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-14">

            <h2 className="text-white text-xl font-bold leading-snug mb-8">
              Your small act of kindness today can become
              their strength for a brighter tomorrow.
            </h2>

            <div className="flex flex-col w-full gap-4">
              <button
                onClick={() => router.push("/contact")}
                className="w-full bg-sky-500 text-white font-semibold py-3 rounded-md active:scale-[0.97] transition"
              >
                Join as a volunteer
              </button>

              <button
                onClick={() => router.push("/donate")}
                className="w-full bg-white text-black font-semibold py-3 rounded-md active:scale-[0.97] transition"
              >
                Donate Here
              </button>
            </div>

          </div>
        </div>

      </section>
    </>
  );
};

export default DonateCTA;

