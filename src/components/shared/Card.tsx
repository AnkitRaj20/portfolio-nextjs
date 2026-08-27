// /* eslint-disable @next/next/no-img-element */
// import React from "react";
// import { Button } from "@/components/ui/button";
// import { ChevronRightIcon } from "@radix-ui/react-icons";
// import Image from "next/image";
// import { formatDate } from "@/lib/dateFormatter";

// const Card = ({
//   id,
//   name,
//   description,
//   image,
//   languagesUsed,
//   isFeatured,
//   status,
//   github,
//   url,
//   tag,
//   isBlog,
//   publishedAt,
// }: any) => {
//   return (
//     <div>
//       <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg dark:shadow-gray-700/25 h-[500px] flex flex-col">
//         {/* Image or fallback */}
//         <div className="relative">
//           {image ? (
//             <img alt={name} src={image} className="h-56 w-full object-fill" />
//           ) : (
//             <div className="h-56 w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 text-sm">
//               No image available
//             </div>
//           )}
//         </div>

//         {/* Content */}
//         <div className="bg-white p-4 sm:p-6 dark:bg-gray-900 flex flex-col justify-between flex-grow">
//           <div>
//             <div className="flex justify-between">
//               <h3 className="text-xl font-bold my-3 hover:text-teal-600 dark:hover:text-teal-600 text-gray-900 dark:text-white text-start">
//                 {name}
//               </h3>
//               {github && (
//                 <a href={github} target="_blank" rel="noopener noreferrer">
//                   <Button
//                     className="px-4 bg-gradient-to-b from-neutral-200 to-neutral-500 text-black"
//                     variant="link"
//                   >
//                     Github
//                   </Button>
//                 </a>
//               )}
//             </div>

//             <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400 text-start">
//               {description && description.replace(/<br\s*\/?>/g, " ")}
//             </p>

//             <div className="flex justify-between mt-4 gap-2">
//               <div className="flex gap-4 flex-wrap">
//                 {languagesUsed?.map((btn: any, i: any) => (
//                   <Button
//                     key={i}
//                     className="text-lg p-2 px-2 bg-zinc-100 rounded-md w-fit hover:bg-teal-400"
//                     variant="outline"
//                     size="icon"
//                   >
//                     <Image
//                       src={btn}
//                       alt="icon"
//                       width={30}
//                       height={30}
//                       className="h-4 w-4"
//                     />
//                   </Button>
//                 ))}
//               </div>
//               {url && (
//                 <a href={url} target="_blank" rel="noopener noreferrer">
//                   <Button className="px-4 bg-teal-600 hover:bg-teal-900 hover:text-white" variant="link">
//                     Live <ChevronRightIcon className="h-4 w-4 hover:animate-ping" />
//                   </Button>
//                 </a>
//               )}
//             </div>
//           </div>

//           {/* Date + Read More */}
//           {isBlog && (
//             <div className="mt-4 flex justify-between items-center">
//               {publishedAt && (
//                 <time
//                   dateTime={publishedAt}
//                   className="text-xs bg-white/80 dark:bg-gray-800/70 text-gray-800 dark:text-gray-200 px-2 py-0.5 rounded shadow-sm"
//                 >
//                   {formatDate(publishedAt)}
//                 </time>
//               )}
//               <a
//                 href={`https://${tag === "dsa" ? "dsa-with-ankit" : "development-with-ankit"}.hashnode.dev/${id}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-sm text-blue-600 hover:underline"
//               >
//                 Read more →
//               </a>
//             </div>
//           )}
//         </div>
//       </article>
//     </div>
//   );
// };

// export default Card;

'use client';

import React, { FC } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRightIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import { formatDate } from '@/lib/dateFormatter';

type Props = {
  id: string;
  name: string;
  description?: string;
  image?: string;
  images?: string[];
  languagesUsed?: string[];
  github?: string | null;
  url?: string | null;
  tag?: 'dsa' | 'development';
  isBlog?: boolean;
  publishedAt?: string;
};

const Card: FC<Props> = ({
  id,
  name,
  description,
  image,
  images = [],
  languagesUsed = [],
  github,
  url,
  tag = 'development',
  isBlog = false,
  publishedAt,
}) => {
  const blogUrl = `https://${tag === 'dsa' ? 'dsa-with-ankit' : 'development-with-ankit'}.hashnode.dev/${id}`;
  const displayImages = images.length > 0 ? images : (image ? [image] : []);
  
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = React.useState(false);

  React.useEffect(() => {
    if (displayImages.length <= 1 || isHovered) return;
    
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { clientWidth, scrollLeft, scrollWidth } = scrollRef.current;
        const maxScrollLeft = scrollWidth - clientWidth;
        if (scrollLeft >= maxScrollLeft - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: clientWidth, behavior: "smooth" });
        }
      }
    }, 3000);
    
    return () => clearInterval(interval);
  }, [displayImages.length, isHovered]);

  return (
    <div>
      <article 
        className="relative h-[500px] flex flex-col overflow-hidden rounded-lg shadow transition hover:shadow-lg dark:shadow-gray-700/25 group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image or fallback */}
        <div className="relative h-56 w-full">
          {displayImages.length > 0 ? (
            <div 
              ref={scrollRef}
              className="flex h-full w-full overflow-x-auto snap-x snap-mandatory hide-scrollbar"
            >
              {displayImages.map((img, idx) => (
                <div key={idx} className="relative h-full w-full flex-none snap-start">
                  <Image
                    src={img}
                    alt={`${name} image ${idx + 1}`}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority={false}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="h-full w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 text-sm">
              No image available
            </div>
          )}
          
          {displayImages.length > 1 && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
              {displayImages.map((_, idx) => (
                <div key={idx} className="w-1.5 h-1.5 rounded-full bg-white/70 shadow-sm" />
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="bg-white p-4 sm:p-6 dark:bg-gray-900 flex flex-col justify-between flex-grow">
          <header>
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold my-3 text-start text-gray-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400">
                {name}
              </h3>
              {github && (
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <Button
                    className="px-4 bg-gradient-to-b from-neutral-200 to-neutral-500 text-black"
                    variant="link"
                  >
                    GitHub
                  </Button>
                </a>
              )}
            </div>

            {description && (
              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400 text-start">
                {description.replace(/<br\s*\/?>/g, ' ')}
              </p>
            )}
          </header>

          <div className="flex justify-between mt-4 gap-2">
            <div className="flex gap-4 flex-wrap">
              {languagesUsed.map((iconUrl, i) => (
                <Button
                  key={i}
                  className="p-2 bg-zinc-100 rounded-md hover:bg-teal-400"
                  variant="outline"
                  size="icon"
                >
                  <Image src={iconUrl} alt="Tech icon" width={24} height={24} />
                </Button>
              ))}
            </div>

            {url && (
              <a href={url} target="_blank" rel="noopener noreferrer">
                <Button className="px-4 bg-teal-600 hover:bg-teal-900 hover:text-white" variant="link">
                  Live <ChevronRightIcon className="h-4 w-4 ml-1 hover:animate-ping" />
                </Button>
              </a>
            )}
          </div>

          {/* Blog footer: date + read more */}
          {isBlog && (
            <footer className="mt-4 flex justify-between items-center">
              {publishedAt && (
                <time
                  dateTime={publishedAt}
                  className="text-xs bg-white/80 dark:bg-gray-800/70 text-gray-800 dark:text-gray-200 px-2 py-0.5 rounded shadow-sm"
                >
                  {formatDate(publishedAt)}
                </time>
              )}
              <a
                href={blogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline"
              >
                Read more →
              </a>
            </footer>
          )}
        </div>
      </article>
    </div>
  );
};

export default Card;
