"use client";
import Image from "next/image";
import logo from "../public/logo.jpeg";

export default function Header() {
  return (
    <header className="flex flex-col items-center gap-6 pt-10 text-center">
      <div className="w-[180px] h-[180px] rounded-full overflow-hidden border-4 border-white/20 shadow-lg">
        <Image
          src={logo}
          alt="Profile Picture"
          className="object-cover w-full h-full"
        />
      </div>

      <div>
        <h1 className="text-3xl font-bold text-white tracking-wide">
          Siddharth Mishra
        </h1>
        <p className="text-gray-400 text-sm mt-1">engineer</p>
      </div>
    </header>
  );
}
