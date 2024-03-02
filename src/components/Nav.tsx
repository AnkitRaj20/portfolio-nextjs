"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Darkmode from "./Darkmode";

const navLinks = [
  {
    label: "Home",
    route: "/",
    icon: "/assets/icons/home.svg",
  },
  {
    label: "About",
    route: "/about",
    icon: "/assets/icons/image.svg",
  },
  {
    label: "Projects",
    route: "/projects",
    icon: "/assets/icons/stars.svg",
  },
  {
    label: "Conatct",
    route: "/contact",
    icon: "/assets/icons/scan.svg",
  },
];

const Nav = () => {
    const pathname = usePathname();
  return (
    <div className="flex justify-between shadow-lg sticky  shadow-indigo-500/40 dark:shadow-indigo-300/40  dark:bg-slate-900">
      <div>
      <Link href="/" className="flex items-center gap-2 md:py-2">
          <Image
            src="/assets/images/RestoreMagic.png"
            alt="logo"
            width={180}
            height={28}
          />
        </Link>
      </div>
      <div>
      <nav className="flex gap-2">
        <Sheet>
        <Darkmode />
          <SheetTrigger>
            <Image
              src="/images/menu.svg"
              alt="menu"
              width={32}
              height={32}
              className="cursor-pointer"
            />
          </SheetTrigger>
          <SheetContent className="sheet-content sm:w-64">
            <>
              <Image
                src="/assets/images/RestoreMagic.png"
                alt="menu"
                width={152}
                height={32}
                className="cursor-pointer"
              />
              {/* RestoreMagic logo*/}
              <ul className="header-nav_elements">
                {navLinks.map((link) => {
                  const isActive = link.route === pathname;

                  return (
                    <li
                      key={link.route}
                      className={`${
                        isActive && "gradient-text"
                      } p-18 flex whitespace-nowrap text-dark-700`}
                    >
                      <Link
                        className="sidebar-link cursor-pointer"
                        href={link.route}
                      >
                        <Image
                          src={link.icon}
                          alt="logo"
                          width={24}
                          height={24}
                        />
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <ul className="sidebar-nav_elements">
                {navLinks.slice(6).map((link) => {
                  const isActive = link.route === pathname;

                  return (
                    <li
                      key={link.route}
                      className={`sidebar-nav_element group ${
                        isActive
                          ? "bg-purple-gradient text-white"
                          : "text-gray-700"
                      }`}
                    >
                      <Link className="sidebar-link" href={link.route}>
                        <Image
                          src={link.icon}
                          alt="logo"
                          width={24}
                          height={24}
                          className={`${isActive && "brightness-200"}`}
                        />
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </>
          </SheetContent>
        </Sheet>
      </nav>
      </div>
  
    </div>
  );
};

export default Nav;
