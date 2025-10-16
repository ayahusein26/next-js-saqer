"use client";

import { useState } from "react";
import Image from "next/image";
// لا يوجد import للصورة

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#231C19] text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* اللوجو */}
          <div className="flex items-center space-x-2">
            <div className="w-32 h-20 flex items-center justify-center overflow-hidden">
              <Image src="/logo1.png" alt="Logo1" width={128} height={80} priority />
            </div>
          </div>

          {/* القائمة للمكتب */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-[#2CA49B] transition duration-300 font-medium">HOME</a>
            <a href="#about" className="hover:text-[#2CA49B] transition duration-300 font-medium">ABOUT</a>
            <a href="#services" className="hover:text-[#2CA49B] transition duration-300 font-medium">SERVICES</a>
            <a href="#contact" className="hover:text-[#2CA49B] transition duration-300 font-medium">CONTACT US</a>
          </nav>

          {/* الأزرار */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-white text-[#2CA49B] px-6 py-2.5 rounded-xl font-semibold hover:bg-[#2CA49B] hover:text-white transition-all duration-300 shadow-lg hover:shadow-2xl border-2 border-white hover:border-[#2CA49B]">
              SIGN IN
            </button>
            <button className="bg-transparent text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-black hover:text-[#2CA49B] transition-all duration-300 border-2 border-white/80 hover:border-white shadow-lg hover:shadow-2xl backdrop-blur-sm">
              SIGN UP
            </button>
          </div>

          {/* زر القائمة للموبايل */}
          <button
            className="md:hidden text-2xl hover:text-[#2CA49B] transition duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* القائمة للموبايل */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#2CA49B] pt-4">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="hover:text-[#2CA49B] transition duration-300 py-2">HOME</a>
              <a href="#about" className="hover:text-[#2CA49B] transition duration-300 py-2">ABOUT US</a>
              <a href="#services" className="hover:text-[#2CA49B] transition duration-300 py-2">SERVICES</a>
              <a href="#contact" className="hover:text-[#2CA49B] transition duration-300 py-2">CONTACT US</a>
              <div className="flex flex-col space-y-2 pt-2">
                <button className="bg-white text-[#2CA49B] px-4 py-2 rounded-lg font-medium hover:bg-[#2CA49B] hover:text-white transition duration-300">LOGIN</button>
                <button className="bg-transparent border-2 border-white px-4 py-2 rounded-lg font-medium hover:bg-white hover:text-[#2CA49B] transition duration-300">SIGN UP</button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
