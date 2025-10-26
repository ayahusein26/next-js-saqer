"use client";

import { useState, useEffect } from "react";

export default function Banner() {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    "Innovative Software Solutions",
    "Innovative Software Solutions",
    "Innovative Software Solutions",
   
  ];

  useEffect(() => {
    const typingSpeed = 150;
    const deletingSpeed = 50;
    const pauseTime = 2000;

    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex < texts[textIndex].length) {
      timer = setTimeout(() => {
        setDisplayedText((prev) => prev + texts[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      timer = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, deletingSpeed);
    } else if (!isDeleting && charIndex === texts[textIndex].length) {
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <section className="relative min-h-screen bg-[#002A26] overflow-hidden flex items-center justify-center text-center">
      {/* الخلفية المتحركة */}
      <div className="absolute inset-0">
        {/* شبكة ذهبية */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(177,151,102,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(177,151,102,0.15)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>

        {/* دائرة ضبابية يسارية */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#B19766] rounded-full blur-3xl opacity-10 animate-float-slow"></div>

        {/* خط ليزر */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#B19766] to-transparent animate-laser-slow"></div>
      </div>

      {/* المحتوى */}
      <div className="relative z-10 text-white space-y-8 px-4 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
        codevation
          <span className="block bg-gradient-to-r from-white to-[#B19766] bg-clip-text text-transparent">
         
          </span>
          <span className="block bg-gradient-to-r from-[#B19766] to-white bg-clip-text text-transparent">
            {displayedText}
            <span className="inline-block w-1 h-12 bg-[#B19766] animate-blink-slow align-bottom"></span>
          </span>
        </h1>

        <p className="text-xl text-gray-300 leading-relaxed">
          A leading Syrian company in providing integrated technology solutions, specializing in developing smart systems and digital transformation for businesses.
        </p>

        <div className="grid grid-cols-3 gap-8 pt-12">
          <div className="text-center">
         
          
         
          
        
            
          </div>
        </div>
      </div>

      {/* الشريط السفلي */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-t from-[#B19766]/50 to-transparent"></div>
    </section>
  );
}
