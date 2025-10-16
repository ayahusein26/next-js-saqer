// app/components/Banner.tsx  أو  src/app/components/Banner.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Banner() {
  // حالات الكتابة الحرفية
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0); // أي نص من المصفوفة
  const [charIndex, setCharIndex] = useState(0); // أي حرف من النص الحالي
  const [isDeleting, setIsDeleting] = useState(false);

  // يفضَّل تعريف المصفوفة خارج useEffect حتى لا تعيد التشغيل بلا داعٍ
  const texts = [
    "AI Solutions",
    "Machine Learning",
    "Neural Networks",
    "Deep Learning",
    "Computer Vision",
  ];

  useEffect(() => {
    const typingSpeed = 150;   // سرعة الكتابة
    const deletingSpeed = 50;  // سرعة الحذف
    const pauseTime = 2000;    // انتظار بنهاية النص

    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex < texts[textIndex].length) {
      // كتابة حرف
      timer = setTimeout(() => {
        setDisplayedText((prev) => prev + texts[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      // حذف حرف
      timer = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, deletingSpeed);
    } else if (!isDeleting && charIndex === texts[textIndex].length) {
      // انتهت الكتابة -> انتظر ثم احذف
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && charIndex === 0) {
      // انتهى الحذف -> النص التالي
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]); // لا تضيفي texts في الديبندنسي

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-[#231C19] to-[#2CA49B] overflow-hidden">
      {/* الخلفية المتحركة */}
      <div className="absolute inset-0">
        {/* شبكة متحركة */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(44,164,155,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(44,164,155,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>

        {/* دوائر متحركة */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#2CA49B] rounded-full blur-3xl opacity-20 animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#231C19] rounded-full blur-3xl opacity-20 animate-float-slower"></div>

        {/* خط ليزر */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#2CA49B] to-transparent animate-laser-slow"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* النص */}
          <div className="text-white space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-[#2CA49B]/20 border border-[#2CA49B] rounded-full backdrop-blur-sm">
              <span className="w-2 h-2 bg-[#2CA49B] rounded-full ml-2 animate-pulse"></span>
              <span className="text-sm font-medium">AI-Powered Future</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Transforming
              <span className="block bg-gradient-to-r from-white to-[#2CA49B] bg-clip-text text-transparent">
                Business With
              </span>
              <span className="block bg-gradient-to-r from-[#2CA49B] to-white bg-clip-text text-transparent">
                {displayedText}
                <span className="inline-block w-1 h-12 bg-[#2CA49B] animate-blink-slow align-bottom"></span>
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              We build intelligent solutions that learn, adapt, and evolve. From
              machine learning models to complete AI ecosystems, we're shaping
              the future of technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <button className="bg-[#2CA49B] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#26857D] transition-all duration-300 hover:scale-105 shadow-lg">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#231C19] transition-all duration-300 backdrop-blur-sm">
                View Case Studies
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-gray-400 text-sm">AI Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-gray-400 text-sm">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-gray-400 text-sm">AI Support</div>
              </div>
            </div>
          </div>

          {/* الجانب الرسومي */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* دائرة متحركة */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-[#2CA49B] rounded-full animate-spin-very-slow"></div>

              {/* نقاط */}
              <div className="absolute top-1/3 left-1/3 w-4 h-4 bg-[#2CA49B] rounded-full animate-bounce-slow"></div>
              <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-white rounded-full animate-bounce-slow [animation-delay:300ms]"></div>
              <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-[#2CA49B] rounded-full animate-bounce-slow [animation-delay:600ms]"></div>

              {/* الشكل المركزي */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-white/10 to-white/0 rounded-2xl flex items-center justify-center shadow-2xl">
                <Image
                  src="/saqer1.png"
                  alt="Saqer AI"
                  width={80}
                  height={80}
                  className="object-contain mx-auto mb-2 drop-shadow-lg transition-transform duration-300 hover:scale-110"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* الشريط السفلي */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/50 to-transparent"></div>
    </section>
  );
}
