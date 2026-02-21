'use client'

import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";

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
    <div
      className={`absolute top-0 w-full z-50 grid grid-cols-8 items-center py-6 ${
        isOverlayHeaderPage ? "text-white" : "text-black"
      } ${
        isHomePage ? "bg-white/95 backdrop-blur-sm border-b border-black/10" : ""
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
  );
};

export default Header;
