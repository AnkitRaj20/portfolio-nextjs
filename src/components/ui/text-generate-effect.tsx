/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  // Replace literal '\n' and actual newlines with a unique token surrounded by spaces
  // so it gets split properly.
  const processedWords = words.replace(/\\n/g, " \n ").replace(/\n/g, " \n ");
  const wordsArray = processedWords
    .split(" ")
    .filter((word) => word.length > 0 || word === "\n");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.1),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} aria-hidden="true">
        {wordsArray.map((word, idx) => {
          if (word === "\n") {
            return <br key={`br-${idx}`} />;
          }
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-black opacity-0 inline-block"
            >
              {word}&nbsp;
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)} aria-label={words} role="region">
      <div className="mt-4">
        {/* Semantic clean text for search engine crawlers and screen readers */}
        <p className="sr-only">{words}</p>
        <div className="dark:text-white text-black text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
