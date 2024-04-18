/* eslint-disable @next/next/no-img-element */
import { projectlist } from "@/constants/project";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const Page = ({ params }: any) => {
  const id = params.id;
  const project = projectlist.find((p) => p.id === id);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-100 via-purple-50 to-teal-100 dark:from-gray-500 dark:via-slate-700 dark:to-zinc-900">
      <div className="flex justify-between flex-col lg:flex-row gap-7">
        <a
          href={project?.url!}
          target="_blank"
          className="text-2xl mx-8 mt-12 sm:text-3xl font-bold"
        >
          {project?.name}
        </a>
        <div className="flex gap-3 mx-8 mt-12 ">
          {project?.url && (
            <a target="_blank" href={project?.url}>
              <Button className="opacity-90" size={"sm"}>
                Visit Live
              </Button>
            </a>
          )}
          <a target="_blank" href={project?.github}>
            <Button size={"sm"} variant="outline" className="border-2">
              Repository
            </Button>
          </a>
        </div>
      </div>
      <div className=" dark:text-gray-100 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 rounded-xl m-4 p-4 sm:p-6 lg:p-8">
        <div className="m-4 sm:m-12 rounded-lg  p-4 ">
          <img
            alt={project?.name}
            src={project?.image}
            className="h-60 w-full ring ring-indigo-50 dark:ring-slate-600 rounded-lg"
          />

          <p className="opacity-50 text-sm mt-4 mb-2 dark:opacity-100">
            Technology Used
          </p>
          {project?.languagesUsed.map((btn: any, i: any) => (
            <Button
              key={i}
              className="text-lg p-2 px-2 dark:bg-zinc-800 bg-zinc-100 rounded-md w-fit mx-4"
              variant="outline"
              size="icon"
            >
              <Image
                src={btn}
                alt="icon"
                width={30}
                height={30}
                className="h-4 w-4"
              />
            </Button>
          ))}
        </div>

        <div className="m-4 sm:m-12  rounded-lg h-auto lg:col-span-2">
          {/* TODO: Change ring-red-500 to ring-indigo-50 */}

          <article className="rounded-xl  p-4 ring ring-indigo-50 dark:ring-slate-600 sm:p-6 lg:p-8">
            <div className="flex items-start sm:gap-8">
              <div>
                <strong className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white">
                  {project?.tag.toUpperCase()}
                </strong>

                <h3 className="mt-4 text-lg font-medium sm:text-xl">
                  <a
                    href={project?.url!}
                    target="_blank"
                    className="hover:underline "
                  >
                    {project?.name}
                  </a>
                </h3>

                <p className="mt-1 text-sm text-gray-700 dark:text-white">
                  {project?.detailedDescription}
                </p>
                <p className="opacity-50 text-sm mt-5">Status</p>

                <div className="flex items-center gap-2">
                  <div className="w-[10px] h-[10px] rounded-full bg-[#50E3C2]"></div>
                  <p>{project?.status}</p>
                </div>

                <p className="opacity-50 text-sm mt-4 mb-2">Features</p>
                <ul>
                  {project?.features.map((feature: any, i: any) => (
                    <li key={i} className="mb-2">
                      {`${i + 1}`}. {feature}
                    </li>
                  ))}
                </ul>

                {/* <div className="mt-4 sm:flex sm:items-center sm:gap-2">
                  <div className="flex items-center gap-1 text-gray-500">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>

                    <p className="text-xs font-medium">48:32 minutes</p>
                  </div>

                  <span className="hidden sm:block" aria-hidden="true">
                    &middot;
                  </span>

                  <p className="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
                    Featuring{" "}
                    <a href="#" className="underline hover:text-gray-700">
                      Barry
                    </a>
                    ,
                    <a href="#" className="underline hover:text-gray-700">
                      Sandra
                    </a>{" "}
                    and
                    <a href="#" className="underline hover:text-gray-700">
                      August
                    </a>
                  </p>
                </div> */}
              </div>
            </div>
          </article>
        </div>
      </div>
      {/* <div className=" dark:text-gray-100 rounded-xl mx-4 my-2  p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
        <p className="opacity-50 text-sm mt-4 mb-2">Features</p>
        <ul>
          {project?.features.map((feature: any, i: any) => (
            <li key={i} className="mb-2">
              {`${i + 1}`}. {feature}
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default Page;
