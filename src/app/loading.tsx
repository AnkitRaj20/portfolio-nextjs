export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-black/90 backdrop-blur-sm">
      <div className="relative flex items-center justify-center">
        {/* Outer rotating ring */}
        <div className="absolute h-24 w-24 rounded-full border-t-4 border-b-4 border-teal-500 animate-[spin_2s_linear_infinite]"></div>
        
        {/* Inner reverse rotating ring */}
        <div className="absolute h-16 w-16 rounded-full border-r-4 border-l-4 border-indigo-500 animate-[spin_1.5s_linear_infinite_reverse]"></div>
        
        {/* Center pulsing core */}
        <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-teal-400 to-indigo-500 animate-pulse"></div>
      </div>
      
      <p className="mt-8 text-sm font-semibold tracking-widest text-gray-500 dark:text-gray-400 uppercase animate-pulse">
        Loading...
      </p>
    </div>
  );
}
