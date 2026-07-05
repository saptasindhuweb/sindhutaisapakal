'use client'

import { MenuIcon } from "lucide-react";
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "../ui/separator";
import { MdContactPage, MdHome, MdArticle } from "react-icons/md";
import { PiPlant } from "react-icons/pi";
import { FaPeopleRoof } from "react-icons/fa6";
import { RiGalleryView2 } from "react-icons/ri";
import { GoMilestone } from "react-icons/go";
import { FaPeopleCarry } from "react-icons/fa";
import { BiDonateHeart } from "react-icons/bi";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [language, setLanguage] = useState<"EN" | "MR">("EN");
  const labels =
    language === "MR"
      ? {
          home: "मुख्यपृष्ठ",
          founder: "संस्थापिका",
          about: "आमच्याबद्दल",
          gallery: "गॅलरी",
          milestones: "टप्पे",
          blog: "ब्लॉग",
          supporters: "समर्थक",
          contact: "संपर्क करा",
          donate: "देणगी द्या",
        }
      : {
          home: "Home",
          founder: "The Founder",
          about: "About Us",
          gallery: "Gallery",
          milestones: "Milestones",
          blog: "Blog",
          supporters: "Supporters",
          contact: "Contact Us",
          donate: "Donate Here",
        };

  const isHomePage = pathname === "/" || pathname === "/home";
  const isOverlayHeaderPage = pathname === "/donate";
  const linkColor = isOverlayHeaderPage ? "text-white" : "text-black";

  const isActive = (path: string) => pathname === path;

  const NavItem = ({ label, path }: { label: string; path: string }) => (
    <div onClick={() => router.push(path)} className={`relative font-semibold cursor-pointer ${linkColor}`}>
      {label}
      {isActive(path) && (
        <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-6 h-[3px] bg-sky-500 rounded-full" />
      )}
    </div>
  );

  return (
    <>
      <div
        className={`md:sticky top-0 w-full z-50 grid grid-cols-8 items-center py-2 lg:py-3 max-xl:hidden ${
          isOverlayHeaderPage ? "text-white" : "text-black"
        } ${isHomePage ? "bg-white/95 backdrop-blur-sm border-b border-black/10" : "bg-white/95 backdrop-blur-sm"}`}
      >
        <div className="col-span-1" />
        <div className="col-span-6 flex justify-between items-center">
          <img
            onClick={() => router.push("/")}
            src="/assets/images/branding/logo.png"
            className="h-[64px] lg:h-[74px] xl:h-[90px] cursor-pointer"
            alt="Logo"
          />

          <NavItem label={labels.home} path="/" />
          <NavItem label={labels.founder} path="/maii" />
          <NavItem label={labels.about} path="/about" />
          <NavItem label={labels.gallery} path="/gallery" />
          <NavItem label={labels.milestones} path="/milestones" />
          <NavItem label={labels.blog} path="/blogs" />
          <NavItem label={labels.supporters} path="/supporters" />

          <div className="flex items-center gap-2 border border-slate-300 rounded-full p-1">
            <button
              onClick={() => setLanguage("MR")}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition ${
                language === "MR" ? "bg-sky-500 text-white" : "text-slate-600"
              }`}
            >
              Mar
            </button>
            <button
              onClick={() => setLanguage("EN")}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition ${
                language === "EN" ? "bg-sky-500 text-white" : "text-slate-600"
              }`}
            >
              Eng
            </button>
          </div>

          <Button
            onClick={() => router.push("/donate")}
            className="bg-sky-500 rounded-full text-base lg:text-lg text-white px-6 lg:px-8 py-3 lg:py-4 hover:bg-sky-600 cursor-pointer"
          >
            {labels.donate}
          </Button>
        </div>
        <div className="col-span-1" />
      </div>

      <div className="xl:hidden sticky top-0 z-50 flex items-center justify-between md:px-36 px-3 py-3 w-full bg-white/95 backdrop-blur-sm border-b border-black/10">
        <img onClick={() => router.push("/")} src="/assets/images/branding/logo.png" className="h-[45px] md:h-[65px] cursor-pointer" alt="Logo" />

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 border border-slate-300 rounded-full p-1">
            <button
              onClick={() => setLanguage("MR")}
              className={`px-2 py-1 rounded-full text-[10px] font-semibold ${
                language === "MR" ? "bg-sky-500 text-white" : "text-slate-600"
              }`}
            >
              Mar
            </button>
            <button
              onClick={() => setLanguage("EN")}
              className={`px-2 py-1 rounded-full text-[10px] font-semibold ${
                language === "EN" ? "bg-sky-500 text-white" : "text-slate-600"
              }`}
            >
              Eng
            </button>
          </div>

          <Sheet>
            <SheetTrigger>
              <MenuIcon />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <img onClick={() => router.push("/")} src="/assets/images/branding/logo.png" className="h-[30px] cursor-pointer" alt="Logo" />
                </SheetTitle>
                <Separator />
                <div className="flex flex-col gap-5 mt-4">
                  <SheetClose className="flex items-center gap-3" onClick={() => router.push("/")}>
                    <MdHome className="inline-block mr-2 text-sm" />
                    <span>{labels.home}</span>
                  </SheetClose>
                  <SheetClose className="flex items-center gap-3" onClick={() => router.push("/maii")}>
                    <PiPlant className="inline-block mr-2 text-sm" />
                    <span>{labels.founder}</span>
                  </SheetClose>
                  <SheetClose className="flex items-center gap-3" onClick={() => router.push("/about")}>
                    <FaPeopleRoof className="inline-block mr-2 text-sm" />
                    <span>{labels.about}</span>
                  </SheetClose>
                  <SheetClose className="flex items-center gap-3" onClick={() => router.push("/gallery")}>
                    <RiGalleryView2 className="inline-block mr-2 text-sm" />
                    <span>{labels.gallery}</span>
                  </SheetClose>
                  <SheetClose className="flex items-center gap-3" onClick={() => router.push("/milestones")}>
                    <GoMilestone className="inline-block mr-2 text-sm" />
                    <span>{labels.milestones}</span>
                  </SheetClose>
                  <SheetClose className="flex items-center gap-3" onClick={() => router.push("/blogs")}>
                    <MdArticle className="inline-block mr-2 text-sm" />
                    <span>{labels.blog}</span>
                  </SheetClose>
                  <SheetClose className="flex items-center gap-3" onClick={() => router.push("/supporters")}>
                    <FaPeopleCarry className="inline-block mr-2 text-sm" />
                    <span>{labels.supporters}</span>
                  </SheetClose>
                  <SheetClose className="flex items-center gap-3" onClick={() => router.push("/contact")}>
                    <MdContactPage className="inline-block mr-2 text-sm" />
                    <span>{labels.contact}</span>
                  </SheetClose>

                  <Separator />

                  <SheetClose className="flex items-center gap-3" onClick={() => router.push("/donate")}>
                    <BiDonateHeart className="inline-block mr-2 text-sm" />
                    <span>{labels.donate}</span>
                  </SheetClose>
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
};

export default Header;

