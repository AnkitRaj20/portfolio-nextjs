/* eslint-disable @next/next/no-img-element */
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const ResumePage = () => {
  return (
    <>
      <div className="px-4 md:px-16 opacity-90">
        <Link href={"../"}>
          <MdOutlineKeyboardBackspace
            className="my-4 mt-6 text-teal-600 hover:text-teal-800 transition-all"
            size={30}
          />
        </Link>
      </div>
      <div className="px-4 md:px-16 flex flex-col justify-center items-center space-y-8">
        <div className="max-w-3xl w-full flex flex-col items-center">
        <h2 className="text-center text-base text-teal-600 font-semibold tracking-wide uppercase">
            Resume
          </h2>
          <p className="text-center text-2xl sm:text-3xl mb-4 font-extrabold">
            My Resume
          </p>
          {/* Embed PDF with styling */}
          <div className="w-full h-[600px] md:h-[700px] bg-zinc-100 dark:bg-zinc-800 rounded-lg shadow-lg overflow-hidden">
            <embed
              src="/ankit_resume.pdf"
              type="application/pdf"
              width="100%"
              height="100%"
              className="rounded-lg"
            />
          </div>
          {/* Download button */}
          <div className="mt-6">
            <a href="/ankit_resume.pdf" target="_blank" download>
              <Button size={"lg"} variant={"outline"} className="flex items-center px-6 py-3 bg-teal-600 text-white hover:bg-teal-700 transition-all rounded-md">
                <FiDownload className="mr-3" />
                Download Resume
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumePage;
