'use client'

import { useRouter } from "next/navigation";


const DonateCTA = () => {

  const router = useRouter();

  return (
    <section className="py-20 bg-white grid grid-cols-8">
      <div className="col-span-1">

      </div>
      <div className="col-span-6 mx-16">
        <div
          className="relative overflow-hidden rounded-3xl bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/images/bg-donate.png')",
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
  );
};

export default DonateCTA;
