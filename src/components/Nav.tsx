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
    icon: "/icons/home.png",
  },
  {
    label: "Resume",
    route: "/resume",
    icon: "/assets/icons/image.svg",
  },
  {
    label: "Projects",
    route: "/projects",
    icon: "/assets/icons/stars.svg",
  },
  {
    label: "Blogs",
    route: "/blogs",
    icon: "/assets/icons/stars.svg",
  },
  {
    label: "Contact",
    route: "mailto:ankit21654@gmail.com",
    icon: "/assets/icons/scan.svg",
  },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <div className="flex justify-between shadow-lg sticky  shadow-indigo-500/40 dark:shadow-indigo-300/40  dark:bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <div>
        <Link href="/" className="flex items-center gap-2 md:py-2">
          <Image
            src="/images/logo.jpg"
            alt="logo"
            width={50}
            height={30}
            className="rounded-full mx-5"
          />
        </Link>
      </div>
      <div>
        <nav className="flex gap-2 items-center justify-center">
          <Sheet>
            <Darkmode />

            <Button className="bg-transparent border  text-black dark:text-white hover:dark:bg-white hover:dark:text-black hover:bg-black hover:text-white">
              <Link className="opacity-90" href="/resume">
                Resume
              </Link>
            </Button>
            <SheetTrigger className="flex items-center gap-2 py-2">
              <Image
                src="/images/menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="cursor-pointer flex items-center gap-2 md:py-2 mx-4"
              />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
              <>
                <Image
                  src="/images/logo.jpg"
                  alt="menu"
                  width={32}
                  height={32}
                  className="cursor-pointer rounded-full"
                />

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
                          className=" mt-5 sidebar-link cursor-pointer h-12"
                          href={link.route}
                        >
                          {/* <Image
                          src={link.icon}
                          alt="logo"
                          width={24}
                          height={24}
                        /> */}
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
