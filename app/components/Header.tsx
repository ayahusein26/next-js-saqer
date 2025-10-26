"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="relative bg-gradient-to-r from-[#001E1B] via-[#002A26] to-[#001E1B] py-4 px-6 shadow-[0_4px_25px_rgba(0,42,38,0.6)] overflow-hidden">
      {/* خلفية متحركة خفيفة */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#002A26]/30 via-transparent to-[#002A26]/30 blur-2xl"
        animate={{ x: ["-20%", "20%", "-20%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* اللوجو */}
      <div className="container mx-auto flex justify-center items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -15, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05, rotate: 1 }}
          className="cursor-pointer select-none"
        >
          <div className="relative w-36 h-16 md:w-40 md:h-20">
            <Image
              src="/logo1.png"
              alt="Prime Tech Logo"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 200px"
              className="object-contain drop-shadow-[0_0_20px_rgba(0,42,38,0.8)]"
            />
          </div>
        </motion.div>
      </div>

      {/* شريط ظل سفلي أنيق */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00A896]/60 to-transparent"></div>
    </header>
  );
}
