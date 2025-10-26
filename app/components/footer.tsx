"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#002A26] py-6 shadow-inner">
      <div className="container mx-auto flex items-center justify-end px-6">
        {/* اللوغو */}
        <div className="w-16 h-12 relative ml-3">
          <Image
            src="/logo1.png"
            alt="Prime Tech Logo"
            width={50}
            height={30}
            className="object-contain transition-transform duration-300 hover:scale-110"
            priority
          />
        </div>

        {/* النص بجانب اللوغو */}
        <p className="text-[#B19766] text-xs tracking-wide font-medium text-right">
          Powered by <span className="text-white">Prime Tech Solution</span>
        </p>
      </div>
    </footer>
  );
}
