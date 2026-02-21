const supporters = [
  { name: "Bharati Vidyapeeth", img: "/assets/images/bharti.png" },
  { name: "Nobel Hospital", img: "/assets/images/nobel.png" },
  { name: "Villo Poonawala Foundation", img: "/assets/images/villo.png" },
  { name: "Kalyani Technoforge Limited", img: "/assets/images/kalyani.png" },
];

const SupportersSlider = () => {
  return (
      <section className="bg-white py-16 grid grid-cols-8">
        <div className="col-span-8 grid grid-cols-8 w-full justify-end items-center mb-8">
          <div className=" col-span-1 flex items-center justify-end pr-2">


            <span className="w-16 h-[2px] bg-black" />
          </div>

          {/* <div className=" col-span-7 flex items-center gap-3 mb-8"> */}

          {/* <span className="w-16 h-[2px] bg-black" /> */}
          <h2 className="text-2xl font-bold tracking-wide col-span-4">OUR SUPPORTERS</h2>
          {/* </div> */}
        </div>
        <div className="col-span-1"/>
        <div className="col-span-6">

        <h2 className="text-xl font-semibold mb-10 ">
            We are advancing forward, thanks to the countless helping hands that have reached us !
            <br/>Some noble souls came through to us in our tough times, and we think of them as Maai’s blessings.
        </h2>

        {/* cards */}
        <div className="grid md:grid-cols-4 gap-8 ">
          {supporters.map((s, i) => (
             <div
                key={i}
                className="bg-gray-100 p-4 rounded-xl text-center"
                >
                <img
                    src={s.img}
                    className="rounded-lg mb-4"
                    alt={s.name}
                />
                <p className="font-medium text-lg py-2 px-6">{s.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* right spacer */}
      <div className="col-span-1" />
    </section>
  );
};

export default SupportersSlider;
