"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#002A26] py-6 shadow-inner">
      <div className="container mx-auto flex justify-center items-center">
        <div className="w-28 h-20 relative">
          <Image
            src="/logo1.png" // ← غيّري الاسم إذا الصورة مختلفة
            alt="Prime Tech Logo"
            width={120}
            height={80}
            className="object-contain transition-transform duration-300 hover:scale-110"
            priority
          />
        </div>
      </div>
    </footer>
  );
}
