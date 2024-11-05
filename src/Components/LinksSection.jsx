import React from 'react';

{/*This is the footer section */}
const LinksSection = () => {
  return (
    <footer className="bg-black text-white py-4 border-t-2 border-t-gray-400 border-opacity-25">
      <div className="max-w-7xl mx-auto flex flex-col items-center px-4 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>
        <p className="text-xs mt-2">
          Designed and Developed by Harsitha Anubhukta
        </p>
      </div>
    </footer>
  );
};

export default LinksSection;
