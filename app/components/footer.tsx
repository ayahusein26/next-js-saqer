"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#002A26] py-8 shadow-inner">
      <div className="container mx-auto flex flex-col items-start text-left space-y-2 px-6">
        {/* النص فوق اللوغو */}
        <p className="text-[#B19766] text-xs tracking-wider uppercase font-medium">
          Powered by <span className="text-white">Prime Tech Solution</span>
        </p>

        {/* اللوغو */}
        <div className="w-28 h-20 relative">
          <Image
            src="/logo1.png"
            alt="Prime Tech Logo"
            width={50}
            height={30}
            className="object-contain transition-transform duration-300 hover:scale-110"
            priority
          />
        </div>
      </div>
    </footer>
  );
}
