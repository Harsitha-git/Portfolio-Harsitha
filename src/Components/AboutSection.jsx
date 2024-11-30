import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-black text-gray-300 py-10 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-200 mb-4 flex items-center">
          About me
          <div className="border-t border-gray-600 w-1/4 ml-2"></div>
        </h2>
        
        <p className="text-lg leading-relaxed mb-6">
          I am currently a <span className="font-semibold text-gray-100">Product Designer</span> at <span className="font-semibold">Brainymed</span>, working on designing and developing a custom Remote Patient Management system. I attended University of Houston - Clear Lake to study <span className="font-semibold text-gray-100">Computer Science</span> from 2017 to 2020. I strive to bridge the gap between technology and user needs.
        </p>
        
        <p className="text-lg leading-relaxed mb-8">
          Here are some technologies/tools I enjoy working with:
        </p>
        
        <div className="grid grid-cols-2 gap-2 text-sm text-gray-400 mb-8">
          <div className="flex items-center space-x-2">
            <span className="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                </svg>
                </span> <span>Figma</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
            </svg>
            </span> <span>React.js</span>
          </div>
         
          <div className="flex items-center space-x-2">
            <span className="text-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
            </svg>
            </span> <span>Tailwind CSS</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
            </svg>
            </span> <span>Framer</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
            </svg>
            </span> <span>Next.js</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
            </svg>
            </span> <span>Javascript</span>
          </div>
        </div>
        
        <p className="text-lg leading-relaxed">
          When I am not working I am most probably reading, playing my guitar or working on my (many work in progress) Science Fiction books!
        </p>
      </div>
    </section>
  );
};

export default AboutSection;

