"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col px-4 lg:flex-row sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src={"/hero.png"} alt="hero" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 flex flex-col lg:h-full lg:w-1/2 items-center justify-center gap-8">
          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Build Beutiful and Engaging User Interface
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            Merancang dan mengembangkan antarmuka web yang menarik, estetis, dan
            fokus pada pengalaman pengguna yang optimal.
          </p>
          <div className="w-full flex gap-4">
            <Link href={"/portfolio"}>
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                View My Work
              </button>
            </Link>
            <Link href={"/contact"}>
              <button className="p-4 rounded-lg ring-1 ring-black">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
