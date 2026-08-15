'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoYoutube } from "react-icons/io5";
import { MdLocationOn, MdPhone, MdMail } from "react-icons/md";

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.1897700914246!2d73.97553257519165!3d18.520324582573185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c25e621417f3%3A0x1f02fe66ca156265!2sSanmati%20Bal%20Niketan!5e0!3m2!1sen!2sin!4v1773434262617!5m2!1sen!2sin" ;

const Footer = () => {
  const router = useRouter();

  return (
    <>
      <footer className="bg-black text-gray-300 pt-16 grid grid-cols-8 max-sm:hidden">
        <div className="col-span-1"></div>
        <div className="col-span-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <Image src="/assets/images/branding/logo.png" alt="Logo" width={112} height={56} className="w-28 mb-4" />
            <p className="text-xs font-semibold leading-relaxed">
              'Saptasindhu' Mahila Adhar,
              <br />
              Balsangopan And Shikshan Sanstha
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-xs">Quick Links</h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li onClick={() => router.push("/maii")} className="hover:text-white cursor-pointer">
                Maai
              </li>
              <li onClick={() => router.push("/about")} className="hover:text-white cursor-pointer">
                About us
              </li>
              <li onClick={() => router.push("/gallery")} className="hover:text-white cursor-pointer">
                Gallery
              </li>
              <li onClick={() => router.push("/supporters")} className="hover:text-white cursor-pointer">
                Supporters
              </li>
              <li onClick={() => router.push("/policy")} className="hover:text-white cursor-pointer">
                Policy
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-xs">Contact Us</h4>

            <div className="flex items-start gap-2 mb-3">
              <MdLocationOn className="text-yellow-400 mt-1 flex-shrink-0 text-sm" />
              <p className="text-xs leading-relaxed flex-1">
                Belhekar Vasti, Near Vasantdada Sugar Institute, AM College Road
                <br />
                Manjari (Bk), Tal. Haveli, Dist. Pune - 412 307
              </p>
            </div>

            <div className="space-y-1 mb-3">
              <div className="flex items-center gap-2">
                <MdPhone className="text-yellow-400 flex-shrink-0 text-sm" />
                <a
                  href="https://wa.me/919326535224"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs hover:underline"
                >
                  +91 93265 35224
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MdPhone className="text-yellow-400 flex-shrink-0 text-sm" />
                <span className="text-xs">+91 93710 74256</span>
              </div>
              <div className="flex items-center gap-2">
                <MdPhone className="text-yellow-400 flex-shrink-0 text-sm" />
                <span className="text-xs">+91 97308 31701</span>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <MdMail className="text-yellow-400 flex-shrink-0 text-sm" />
              <span className="text-xs">saptasindhu99@gmail.com</span>
            </div>

            <iframe
              src={MAP_EMBED_URL}
              title="Saptasindhu Location Map"
              loading="lazy"
              className="w-full h-32 rounded-md border border-slate-700"
            />
          </div>

          <div className="flex flex-col justify-start items-end text-right">
            <div className="text-white text-2xl font-bold leading-snug">मी माय झाले,<br/> तुम्ही गणगोत व्हा !..</div>

            <button
              onClick={() => router.push("/donate")}
              className="mt-6 bg-sky-500 text-white px-6 py-3 rounded font-semibold hover:bg-sky-600 transition"
            >
              Donate Here
            </button>

            <div className="mt-5 flex items-center gap-4 text-gray-200">
              <a
                href="https://www.facebook.com/sanmati.balniketan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Saptasindhu on Facebook"
              >
                <IoLogoFacebook className="cursor-pointer text-xl" />
                <span className="sr-only">Facebook – Sanmati Bal Niketan</span>
              </a>
              <a
                href="https://www.instagram.com/sanmatibalniketan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Saptasindhu on Instagram"
              >
                <IoLogoInstagram className="cursor-pointer text-xl" />
                <span className="sr-only">Instagram – Sanmati Bal Niketan</span>
              </a>
              <a
                href="https://www.youtube.com/@padmashridrsindhutaisapakal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Watch Saptasindhu on YouTube"
              >
                <IoLogoYoutube className="cursor-pointer text-xl" />
                <span className="sr-only">YouTube – Padma Shri Dr. Sindhutai Sapakal</span>
              </a>
              <a
                href="https://www.linkedin.com/company/saptasindhu-mahila-adhar-balsangopan-and-shikshan-sanstha/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with Saptasindhu on LinkedIn"
              >
                <IoLogoLinkedin className="cursor-pointer text-xl" />
                <span className="sr-only">LinkedIn – Saptasindhu Mahila Adhar Balsangopan And Shikshan Sanstha</span>
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-1"></div>

        <div className="border-t border-yellow-200 mt-12 col-span-8 mx-48">
          <div className="max-w-7xl mx-auto py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-300">
            <div>
              © 2025 sindhutaisapakal.org. All rights reserved.{" "}
              <span className="underline cursor-pointer" onClick={() => router.push("/policy")}>
                Privacy Policy
              </span>
            </div>
            <div className="mt-3 md:mt-0"></div>
          </div>
        </div>
      </footer>

      <footer className="bg-black text-gray-300 pt-12 pb-6 px-6 md:hidden">
        <div className="text-center mb-10">
          <Image src="/assets/images/branding/logo.png" alt="Logo" width={96} height={48} className="w-24 mx-auto mb-4" />
          <p className="text-xs font-semibold leading-relaxed">
            'Saptasindhu' Mahila Adhar,
            <br />
            Balsangopan And Shikshan Sanstha
          </p>
        </div>

        <div className="mb-10">
          <h4 className="text-white font-semibold mb-4 text-sm text-center">Quick Links</h4>
          <ul className="space-y-3 text-sm text-center">
            <li onClick={() => router.push("/maii")} className="hover:text-white cursor-pointer">
              Maai
            </li>
            <li onClick={() => router.push("/about")} className="hover:text-white cursor-pointer">
              About us
            </li>
            <li onClick={() => router.push("/gallery")} className="hover:text-white cursor-pointer">
              Gallery
            </li>
            <li onClick={() => router.push("/supporters")} className="hover:text-white cursor-pointer">
              Supporters
            </li>
            <li onClick={() => router.push("/policy")} className="hover:text-white cursor-pointer">
              Policy
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h4 className="text-white font-semibold mb-4 text-sm text-center">Contact Us</h4>

          <div className="flex items-start gap-3 mb-4">
            <MdLocationOn className="text-yellow-400 mt-1 flex-shrink-0 text-base" />
            <p className="text-xs leading-relaxed">
              Belhekar Vasti, Near Vasantdada Sugar Institute, AM College Road
              <br />
              Manjari (Bk), Tal. Haveli, Dist. Pune - 412 307
            </p>
          </div>

          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2">
              <MdPhone className="text-yellow-400 text-sm" />
              <a
                href="https://wa.me/919326535224"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs hover:underline"
              >
                +91 93265 35224
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MdPhone className="text-yellow-400 text-sm" />
              <span className="text-xs">+91 93710 74256</span>
            </div>
            <div className="flex items-center gap-2">
              <MdPhone className="text-yellow-400 text-sm" />
              <span className="text-xs">+91 97308 31701</span>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <MdMail className="text-yellow-400 text-sm" />
            <span className="text-xs">saptasindhu99@gmail.com</span>
          </div>

          <iframe
            src={MAP_EMBED_URL}
            title="Saptasindhu Location Map Mobile"
            loading="lazy"
            className="w-full h-44 rounded-md border border-slate-700"
          />
        </div>

        <div className="text-white text-xl font-bold text-center leading-snug mb-8">मी माय झाले,<br/> तुम्ही गणगोत व्हा !..</div>

        <button
          onClick={() => router.push("/donate")}
          className="w-full bg-sky-500 text-white py-3 rounded-md font-semibold mb-4 active:scale-[0.97] transition"
        >
          Donate Here
        </button>

        <div className="flex justify-center gap-5 mb-8 text-xl">
          <a href="https://www.facebook.com/sanmati.balniketan" target="_blank" rel="noopener noreferrer" aria-label="Follow Saptasindhu on Facebook">
            <IoLogoFacebook />
            <span className="sr-only">Facebook – Sanmati Bal Niketan</span>
          </a>
          <a href="https://www.instagram.com/sanmatibalniketan" target="_blank" rel="noopener noreferrer" aria-label="Follow Saptasindhu on Instagram">
            <IoLogoInstagram />
            <span className="sr-only">Instagram – Sanmati Bal Niketan</span>
          </a>
          <a
            href="https://www.youtube.com/@padmashridrsindhutaisapakal"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Watch Saptasindhu on YouTube"
          >
            <IoLogoYoutube />
            <span className="sr-only">YouTube – Padma Shri Dr. Sindhutai Sapakal</span>
          </a>
          <a
            href="https://www.linkedin.com/company/saptasindhu-mahila-adhar-balsangopan-and-shikshan-sanstha/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect with Saptasindhu on LinkedIn"
          >
            <IoLogoLinkedin />
            <span className="sr-only">LinkedIn – Saptasindhu Mahila Adhar Balsangopan And Shikshan Sanstha</span>
          </a>
        </div>

        <div className="border-t border-yellow-200 pt-6 text-center text-xs text-gray-400">
          © 2025 sindhutaisapakal.org. All rights reserved.
          <div className="underline cursor-pointer mt-2" onClick={() => router.push("/policy")}>
            Privacy Policy
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

