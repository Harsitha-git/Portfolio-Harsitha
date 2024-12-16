import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="d-flex flex-column align-items-center justify-content-center vh-50 bg-black text-white text-center p-5">
      {/* Hero Image */}
      <img src="comtext.gif" alt="Animated gif showing design process" className="mb-4 mx-auto lg:w-75" />

      
    
      {/* Link icons */}
      <ul className="flex justify-center mt-5 mx-auto lg:mx-10">
 
      <li>
    <a href="mailto:harsitha.sonu@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
    <div className="group relative">
      <button>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10">
        <path fillRule="evenodd" d="M17.834 6.166a8.25 8.25 0 1 0 0 11.668.75.75 0 0 1 1.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0 1 21.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 1 1-.82-6.26V8.25a.75.75 0 0 1 1.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 0 0-2.416-5.834ZM15.75 12a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0Z" clipRule="evenodd" />
      </svg>
      </button>
      <span className="absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-black py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">Email<span>
        </span></span></div>
    </a>
  </li>
 

  <li>
    <a href="https://www.behance.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
    <div className="group relative">
      <button>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="size-10">
    <path d="M 9 4 C 6.24 4 4 6.24 4 9 L 4 41 C 4 43.76 6.24 46 9 46 L 41 46 C 43.76 46 46 43.76 46 41 L 46 9 C 46 6.24 43.76 4 41 4 L 9 4 z M 12 18 L 18.730469 18 C 19.460469 18 23.410156 17.950312 23.410156 21.570312 C 23.410156 23.490313 22.099766 24.139688 21.509766 24.429688 C 22.389766 24.709688 24 25.52 24 28 C 24 31.83 19.609531 32 19.019531 32 L 12 32 L 12 18 z M 29 18 L 36 18 L 36 20 L 29 20 L 29 18 z M 15 20.429688 L 15 23.710938 L 18.220703 23.710938 C 18.660703 23.710938 20.119141 23.47 20.119141 22 C 20.119141 20.53 18.219687 20.429688 17.929688 20.429688 L 15 20.429688 z M 32.730469 21 C 36.630469 21 37.689609 24.039766 37.849609 24.759766 C 37.999609 25.489766 38 26.13 38 27 L 30.099609 27 C 30.099609 27.87 30.560625 29.830078 32.890625 29.830078 C 33.510625 29.830078 33.969453 29.680625 34.439453 29.390625 C 34.899453 29.100625 35.060938 28.819297 35.210938 28.529297 L 37.839844 28.529297 C 37.379844 29.679297 36.760078 30.550859 35.830078 31.130859 C 34.900078 31.710859 33.820078 32 32.580078 32 C 31.800078 32 31.03 31.850547 30.25 31.560547 C 29.63 31.270547 29.010781 30.840156 28.550781 30.410156 C 28.090781 29.970156 27.780703 29.389922 27.470703 28.669922 C 27.160703 28.089922 27 27.22 27 26.5 C 27 25.78 27.290469 21 32.730469 21 z M 32.730469 23.029297 C 30.470469 23.029297 30.099609 25.199844 30.099609 25.339844 L 35.060547 25.339844 C 34.900547 24.619844 34.250469 23.029297 32.730469 23.029297 z M 15 25.710938 L 15 29.570312 L 18.351562 29.570312 C 18.640563 29.570312 20.679688 29.480937 20.679688 27.710938 C 20.679687 25.950937 19.077562 25.710938 18.351562 25.710938 L 15 25.710938 z"></path>
    </svg>
      </button>
      <span className="absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-black py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">Behance<span>
        </span></span></div>
    </a>
  </li>


  
 
  
 
  <li>
    <a href="https://github.com/Harsitha-git" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
    <div className="group relative">
      <button>
        <svg strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" className="w-8 mt-1 hover:scale-125 duration-200"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
      </button>
      <span className="absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-black py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">GitHub<span>
        </span></span></div>
    </a>
  </li>

  

  
  <li>
  <div className="group relative">
      <button>
      <a href="https://www.linkedin.com/in/harsitha-anubhukta" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="size-10">
        <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" clipRule="evenodd"/>
      </svg>
    </a>
      </button>
      <span className="absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-black py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">LinkedIn<span>
        </span></span></div>
  </li>


  
</ul>

    
    
    
    
    
    </section>
  );
};

export default HeroSection;

