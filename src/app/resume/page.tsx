/* eslint-disable @next/next/no-img-element */
import resume from "@/public/resume.png";
import Image from "next/image";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const ResumePage = () => {
  return (
    <>
      <div className="px-[1.2rem] md:px-[9rem] opacity-70">
        <Link href={"../"}>
          <MdOutlineKeyboardBackspace
            className="my-[1.3rem] mt-[2rem]"
            size={25}
          />
        </Link>
      </div>
      <div className="px-[1.2rem] md:px-[9rem] flex flex-col justify-center items-center">
        <div className="max-w-[400px]  overflow-hidden flex flex-col ">
          <h2 className="text-center text-base text-teal-600 font-semibold tracking-wide uppercase">
            Resume
          </h2>
          <p className="text-center text-2xl sm:text-3xl mb-4 font-extrabold">
            My Resume
          </p>
          <div className="p-3 dark:bg-zinc-800 bg-zinc-100 rounded-lg">
            <img
              alt="myresume"
              className="rounded-md"
              src={"/images/resume.png"}
            />
          </div>
          <a
            href={
              "/resume.pdf"
            }
            target="_blank"
            download
          >
            <Button size={"sm"} variant={"outline"} className="my-3">
              <FiDownload className="mr-2" />
              Download
            </Button>
          </a>
        </div>
      </div>
    </>
  );
};

export default ResumePage;