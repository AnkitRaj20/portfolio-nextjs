/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
const Card = ({
  id,
  name,
  description,
  details,
  image,
  languagesUsed,
  isFeatured,
  status,
  github,
  url,
}: any) => {
  return (
    <div>
      <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg dark:shadow-gray-700/25">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          className="h-56 w-full object-cover"
        />

        <div className="bg-white p-4 sm:p-6 dark:bg-gray-900">
          {/* <time
            datetime="2022-10-10"
            className="block text-xs text-gray-500 dark:text-gray-400"
          >
            10th Oct 2022
          </time> */}

          <div className="flex justify-between">
            <h3 className="text-xl font-bold my-3 hover:text-teal-600 dark:hover:text-teal-600 text-gray-900 dark:text-white text-start">
              {name}
            </h3>

            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer">
                <Button
                  className="px-4 bg-gradient-to-b from-neutral-200 to-neutral-500 text-black"
                  variant="link"
                >
                  Github
                </Button>
              </a>
            )}
          </div>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400 text-start">
            {description}
          </p>

          <div className="flex justify-between mt-2 gap-2">
            <div className="flex gap-4">
              {languagesUsed.map((btn: any, i: any) => (
                <Button key={i} className="text-lg p-2 px-2 dark:bg-zinc-800 bg-zinc-100 rounded-md w-fit" variant="outline" size="icon">
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
            <div>
              {url && (
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <Button
                    className="px-4 bg-teal-600 hover:bg-teal-900 hover:text-white "
                    variant="link"
                  >
                    Live{" "}
                    <ChevronRightIcon className="h-4 w-4 hover:animate-ping" />
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Card;
