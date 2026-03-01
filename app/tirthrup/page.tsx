"use client";

import DonateCTA from "@/components/shared/DonateCTA";
import PageLoader from "@/components/shared/PageLoader";
import usePageReady from "@/hooks/usePageReady";

const Trithrup = () => {
    const isPageReady = usePageReady([
        "/assets/images/tirthrup-heros-1.png",
        "/assets/images/tirthrup-heros-2.png",
        "/assets/images/tirthrup1.png",
        "/assets/images/tirthrup2.png",
        "/assets/images/tirthrup3.png",
        "/assets/images/tirthrup4.png",
    ]);

    if (!isPageReady) {
        return <PageLoader />;
    }

    return (
        <>
            <main className="bg-white mt-20 max-sm:hidden">

                {/* ================= HERO / INTRO ================= */}
                <section className="grid grid-cols-8 pt-24">
                    {/* LEFT LINE */}
                    <div className="col-span-1 flex items-start justify-end px-4">
                        <span className="w-20 h-[2px] bg-black mt-2" />
                    </div>

                    {/* TITLE */}
                    <div className="col-span-7">
                        <p className="font-bold tracking-wide ">
                            TIRTHRUP SHAIKSHANIK VASATIGRUH
                        </p>

                    </div>
                </section>

                {/* ================= CONTENT + IMAGES ================= */}
                <section className="grid grid-cols-8 pb-24 pt-4">
                    {/* LEFT GUTTER */}
                    <div className="col-span-1" />

                    {/* TEXT CONTENT */}
                    <div className="col-span-4 ">
                        <h1 className="text-3xl font-bold leading-snug pb-8">
                            Cultivating Hope for Tomorrow, Nurturing <br />
                            underprivileged Children in with the Care They Deserve.
                        </h1>
                        <p className="text-xs text-gray-600 text-justify">
                            We are a transitional child shelter facility run by the ‘Saptasindhu’
                            Mahila Adhar, Balsangopan And Shikshan Sanstha manjari, pune- 412307,
                            founded by the ‘Padmashri’ dr. Sou. Sindhutai Sapakal, fondly called
                            “maai” by all the children she touched the lives of through her love
                            and compassion.

                            Under this parent institution the “Tirtharup Shaikshanik Vasatigruh”
                            was founded & inaugurated in 2017 & formal registration with all the
                            concerned authorities was completed in 2023 and are now working to
                            the best of our ability to fulfill our purpose.
                        </p>

                        <p className="text-xs font-semibold text-black pt-8">
                            Here is what the institution does, in a nutshell:
                        </p>

                        <p className="text-xs text-gray-600 text-justify">
                            A transitional child shelter refers to a designated facility that
                            provides care, support, and refuge for children who are not
                            technically orphans but share a similar plight due to diverse
                            challenging circumstances. These circumstances might encompass
                            factors such as family disruption, neglect or abandonment.

                            The shelter aims to offer a secure environment where these children
                            can access essential services, education, emotional support, and
                            guidance while their long-term living arrangements are determined
                            or rehabilitative efforts are undertaken.

                            We appeal to you, dear reader, to join our cause in any capacity you
                            can so that we can all earn the satisfaction of helping these
                            socially challenged children towards a better future.
                        </p>
                    </div>

                    {/* RIGHT IMAGES */}
                    <div className="col-span-2 relative flex justify-start ml-12">
                        <img
                            src="/assets/images/tirthrup-heros-1.png"
                            alt="Children"
                            className="rounded-2xl shadow-lg w-45 h-45 relative z-10"
                        />
                        <img
                            src="/assets/images/tirthrup-heros-2.png"
                            alt="Group"
                            className="rounded-2xl shadow-xl w-55 absolute top-32 -right-5"
                        />
                    </div>

                    {/* RIGHT GUTTER */}
                    <div className="col-span-1" />
                </section>

                {/* ================= IMAGE GRID ================= */}
                <section className="bg-[#fff7e6] py-18 grid grid-cols-8">
                    <div className="col-span-1" />

                    <div className="col-span-6" >
                        <p className=" text-2xl font-bold">Feel free to visit the institution or call us any time  <br />
                            should you need more information.
                        </p>
                    </div>
                    <div className="col-span-1" />
                    <div className="col-span-1" />

                    <div className="col-span-6 grid grid-cols-4 gap-8 mt-12">
                        {["tirthrup1.png", "tirthrup2.png", "tirthrup3.png", "tirthrup4.png"].map((img, i) => (
                            <img
                                key={i}
                                src={`/assets/images/${img}`}
                                alt=""
                                className="rounded-2xl shadow-md"
                            />
                        ))}
                    </div>

                    <div className="col-span-1" />
                </section>

                <DonateCTA />

            </main>

            {/* ================= MOBILE VERSION ================= */}
            <main className="bg-white md:hidden">

                {/* ===== HERO / INTRO ===== */}
                <section className="pt-4 px-4">

                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-10 h-[2px] bg-black" />
                        <p className="font-bold tracking-wide text-sm">
                            TIRTHRUP SHAIKSHANIK VASATIGRUH
                        </p>
                    </div>

                    <h1 className="text-xl font-bold leading-snug mb-6">
                        Cultivating Hope for Tomorrow, Nurturing
                        underprivileged Children with the Care They Deserve.
                    </h1>

                    {/* HERO IMAGES - ONE ROW, HEIGHT 30 */}
                    <div className="flex gap-3 mb-8">
                        <img
                            src="/assets/images/tirthrup-heros-1.png"
                            alt="Children"
                            className="w-1/2 h-30 object-cover rounded-xl shadow-md"
                        />
                        <img
                            src="/assets/images/tirthrup-heros-2.png"
                            alt="Group"
                            className="w-1/2 h-30 object-cover rounded-xl shadow-md"
                        />
                    </div>

                    <div className="text-gray-700 text-sm leading-relaxed space-y-4 text-justify">
                        <p>
                            We are a transitional child shelter facility run by the
                            ‘Saptasindhu’ Mahila Adhar, Balsangopan And Shikshan Sanstha,
                            founded by Padmashri Dr. Sou. Sindhutai Sapakal.
                        </p>

                        <p>
                            Tirtharup Shaikshanik Vasatigruh was founded in 2017 and formally
                            registered in 2023 to provide structured support for children in
                            vulnerable situations.
                        </p>

                        <p className="font-semibold text-black pt-4">
                            Here is what the institution does:
                        </p>

                        <p>
                            A transitional shelter offers care, education, emotional support,
                            and a secure environment for children facing neglect, abandonment,
                            or family disruption while long-term rehabilitation is arranged.
                        </p>

                        <p>
                            We appeal to you to join our cause and help these socially
                            challenged children build a better future.
                        </p>
                    </div>

                </section>


                {/* ===== IMAGE GRID ===== */}
                <section className="bg-[#fff7e6] py-12 px-4 mt-10">

                    <p className="text-lg font-bold mb-8">
                        Feel free to visit the institution or call us anytime
                        for more information.
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                        {["tirthrup1.png", "tirthrup2.png", "tirthrup3.png", "tirthrup4.png"].map(
                            (img, i) => (
                                <img
                                    key={i}
                                    src={`/assets/images/${img}`}
                                    alt=""
                                    className="w-full h-32 object-cover rounded-xl shadow-sm"
                                />
                            )
                        )}
                    </div>

                </section>

                <DonateCTA />

            </main>


        </>
    );
};

export default Trithrup;
