"use client";
import React, { useRef, useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageCarousel({ images, projectName }: { images: string[]; projectName: string }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const scroll = useCallback((direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth, scrollLeft, scrollWidth } = scrollRef.current;
      const maxScrollLeft = scrollWidth - clientWidth;
      
      let scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      
      // Handle wrapping for right scroll
      if (direction === "right" && scrollLeft >= maxScrollLeft - 10) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        return;
      }
      
      // Handle wrapping for left scroll
      if (direction === "left" && scrollLeft <= 10) {
        scrollRef.current.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
        return;
      }
      
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    if (images.length <= 1 || isHovered) return;
    
    const interval = setInterval(() => {
      scroll("right");
    }, 3000); // 3 seconds interval
    
    return () => clearInterval(interval);
  }, [images.length, isHovered, scroll]);

  return (
    <div 
      className="relative group w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        ref={scrollRef}
        className="flex w-full gap-4 overflow-x-auto snap-x snap-mandatory pb-4 hide-scrollbar"
      >
        {images.map((img: string, idx: number) => (
          <img
            key={idx}
            alt={`${projectName} - Image ${idx + 1}`}
            src={img}
            className="h-60 w-[95%] sm:w-[90%] flex-none snap-center ring ring-indigo-50 dark:ring-slate-600 rounded-lg object-contain bg-white dark:bg-zinc-800"
          />
        ))}
      </div>
      
      {images.length > 1 && (
        <>
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 dark:bg-black/50 p-2 rounded-full shadow-md text-gray-800 dark:text-gray-200 hover:bg-white dark:hover:bg-black transition-colors opacity-0 group-hover:opacity-100 disabled:opacity-50"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 dark:bg-black/50 p-2 rounded-full shadow-md text-gray-800 dark:text-gray-200 hover:bg-white dark:hover:bg-black transition-colors opacity-0 group-hover:opacity-100 disabled:opacity-50"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}
    </div>
  );
}
