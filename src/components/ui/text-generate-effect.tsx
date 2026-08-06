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
        duration: 1.5,
        delay: stagger(0.03),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} aria-hidden="true" className="inline">
        {wordsArray.map((word, idx) => {
          if (word === "\n") {
            return (
              <span key={`br-${idx}`} className="block h-3">
                <br />
              </span>
            );
          }
          return (
            <motion.span
              key={word + idx}
              className="opacity-0 inline-block"
            >
              {word}&nbsp;
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div
      className={cn("relative", className)}
      aria-label={words}
      role="region"
    >
      <span className="sr-only">{words}</span>
      <div className="leading-relaxed">
        {renderWords()}
      </div>
    </div>
  );
};
