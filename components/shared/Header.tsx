'use client'

import { Contact2Icon, MenuIcon } from "lucide-react";
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "../ui/separator";
import { GiHomeGarage } from "react-icons/gi";
import { MdContactEmergency, MdContactPage, MdEventSeat, MdHome } from "react-icons/md";
import { PiPlant } from "react-icons/pi";
import { FaFacebook, FaInstagram, FaLinkedin, FaPeopleRoof, FaTwitter, FaYoutube } from "react-icons/fa6";
import { RiGalleryView2 } from "react-icons/ri";
import { GoMilestone } from "react-icons/go";
import { FaPeopleCarry } from "react-icons/fa";
import { BiDonateHeart } from "react-icons/bi";


const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isHomePage = pathname === "/" || pathname === "/home";
  const isOverlayHeaderPage = pathname === "/donate";

  const linkColor = isOverlayHeaderPage ? "text-white" : "text-black";

  // Active route check
  const isActive = (path: string) => pathname === path;

  // Reusable Nav Item
  const NavItem = ({
    label,
    path,
  }: {
    label: string;
    path: string;
  }) => (
    <div
      onClick={() => router.push(path)}
      className={`relative font-semibold cursor-pointer ${linkColor}`}
    >
      {label}

      {isActive(path) && (
        <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-6 h-[3px] bg-sky-500 rounded-full" />
      )}
    </div>
  );

  return (
    <>
      <div
        className={`md:absolute top-0 w-full z-50 grid grid-cols-8 items-center py-6 max-sm:hidden ${isOverlayHeaderPage ? "text-white" : "text-black"
          } ${isHomePage ? "bg-white/95 backdrop-blur-sm border-b border-black/10" : ""
          }`}
      >
        {/* LEFT GUTTER */}
        <div className="col-span-1" />

        {/* MAIN NAV */}
        <div className="col-span-6 flex justify-between items-center">
          {/* LOGO */}
          <img
            onClick={() => router.push("/")}
            src="/assets/images/logo.png"
            className="h-[90px] cursor-pointer"
            alt="Logo"
          />

          {/* NAV ITEMS */}
          <NavItem label="Home" path="/" />
          <NavItem label="The Founder" path="/maii" />
          <NavItem label="About Us" path="/about" />
          <NavItem label="Gallery" path="/gallery" />
          <NavItem label="Milestones" path="/milestones" />
          <NavItem label="Supporters" path="/supporters" />

          {/* DONATE BUTTON */}
          <Button
            onClick={() => router.push("/donate")}
            className="bg-sky-500 rounded-full text-xl text-white px-8 py-6 hover:bg-sky-600 cursor-pointer"
          >
            Donate Here
          </Button>
        </div>

        {/* RIGHT GUTTER */}
        <div className="col-span-1" />
      </div>

      <div className="md:hidden flex items-center justify-between p-4 w-screen">
        <img onClick={()=> router.push('/')} src="/assets/images/logo.png" className="h-[45px] cursor-pointer" alt="Logo" />
        <Sheet>
          <SheetTrigger>
            <MenuIcon />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <img onClick={()=>router.push('/')} src="/assets/images/logo.png" className="h-[30px] cursor-pointer" alt="Logo" />

              </SheetTitle>
              <Separator />
              <div className="flex flex-col gap-5 mt-4">
                <SheetClose className="flex items-center gap-3" onClick={()=>router.push('/')}>
                  <MdHome className="inline-block mr-2 text-sm" />
                  <span>Home</span>
                </SheetClose>
                <SheetClose className="flex items-center gap-3" onClick={()=>router.push('/maii')}>
                  <PiPlant className="inline-block mr-2 text-sm" />
                  <span>The Founder</span>
                </SheetClose>
                <SheetClose className="flex items-center gap-3" onClick={()=>router.push('/about')}>
                  <FaPeopleRoof className="inline-block mr-2 text-sm" />
                  <span>About Us</span>
                </SheetClose>
                <SheetClose className="flex items-center gap-3" onClick={()=>router.push('/gallery')}>
                  <RiGalleryView2 className="inline-block mr-2 text-sm" />
                  <span>Gallery</span>
                </SheetClose>
                <SheetClose className="flex items-center gap-3" onClick={()=>router.push('/milestones')}>
                  <GoMilestone className="inline-block mr-2 text-sm" />
                  <span>Milestones</span>
                </SheetClose>
                <SheetClose className="flex items-center gap-3" onClick={()=>router.push('/supporters')}>
                  <FaPeopleCarry className="inline-block mr-2 text-sm" />
                  <span>Supporters</span>
                </SheetClose>
                <SheetClose className="flex items-center gap-3" onClick={()=>router.push('/contact')}>
                  <MdContactPage className="inline-block mr-2 text-sm" />
                  <span>Contact Us</span>
                </SheetClose>

                <Separator/>

                <SheetClose className="flex items-center gap-3" onClick={()=>router.push('/donate')}>
                  <BiDonateHeart className="inline-block mr-2 text-sm" />
                  <span>Donate Here</span>
                </SheetClose>

                <Separator/>

                <SheetClose className="flex items-center gap-3" onClick={()=>router.push('/instagram')}>
                  <FaInstagram className="inline-block mr-2 text-sm" />
                  <span>Instagram</span>
                </SheetClose>
                <SheetClose className="flex items-center gap-3" onClick={()=>router.push('/facebook')}>
                  <FaFacebook className="inline-block mr-2 text-sm" />
                  <span>Facebook</span>
                </SheetClose>
                <SheetClose className="flex items-center gap-3" onClick={()=>router.push('/youtube')}>
                  <FaYoutube className="inline-block mr-2 text-sm" />
                  <span>YouTube</span>
                </SheetClose>
                <SheetClose className="flex items-center gap-3" onClick={()=>router.push('/twitter')}>
                  <FaTwitter className="inline-block mr-2 text-sm" />
                  <span>Twitter</span>
                </SheetClose>
                <SheetClose className="flex items-center gap-3" onClick={()=>router.push('/linkedin')}>
                  <FaLinkedin className="inline-block mr-2 text-sm" />
                  <span>LinkedIn</span>
                </SheetClose>

              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>

      {/* <Separator/> */}
      </div>
    </>
  );
};

export default Header;
