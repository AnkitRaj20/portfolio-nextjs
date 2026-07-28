import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] w-full flex flex-col items-center justify-center relative dark:bg-black bg-white dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]">
      <div className="absolute inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none"></div>
      
      <div className="z-10 flex flex-col items-center text-center px-4 space-y-6">
        <h1 className="text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-teal-800 to-teal-400">
          404
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold dark:text-white text-gray-900">
          Page Not Found
        </h2>
        <p className="max-w-md mx-auto text-gray-600 dark:text-gray-400">
          Oops! The page you are looking for doesn't exist, has been moved, or is temporarily unavailable.
        </p>
        
        <Link href="/">
          <Button size="lg" className="mt-4 bg-teal-600 hover:bg-teal-700 text-white border-none">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
