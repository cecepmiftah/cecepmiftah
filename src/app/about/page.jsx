"use client";
import { Brain } from "@/components/brain/Brain";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, { once: true });
  const isSkillRefInView = useInView(skillRef, { margin: "200px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BOIGRAPHI CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">BIOGRAPHI</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              illum asperiores assumenda id quo explicabo tenetur quia nisi sit
              sunt?Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Animi soluta sunt, maiores harum ipsum atque quisquam omnis
              corrupti eius suscipit.
            </p>
            <span className="italic">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              iure.
            </span>
            {/* SIGN SVG */}
            <div className="self-end">
              <svg
                width="100"
                height="220"
                viewBox="0 0 250 324"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 97C7.76832 100.031 11.0307 101.651 13.9444 103.444C25.0581 110.284 36.648 116.648 48.7778 121.5C66.721 128.677 83.3106 132.575 93.8333 113.333C102.487 97.5087 105.099 78.2537 106.833 60.6111C108.581 42.8322 110.434 22.2206 101.333 5.94445C96.4041 -2.87137 95.4481 6.52073 93.9444 11.6667C88.9973 28.5968 83.1147 45.1768 77.5 61.8889C60.8005 111.595 55.709 165.004 52.4444 217.111C51.1067 238.464 51 302.672 51 281.278C51 258.238 52.0338 234.954 50.8333 211.944C50.5901 207.282 50.5311 199.467 47.1111 195.667C45.2781 193.63 42.607 201.391 42.5556 201.5C36.3546 214.677 30.5251 231.904 19.6667 242.111C17.1386 244.487 13.6708 241.832 11.7778 240C6.87629 235.257 5.47336 228.392 4.44445 221.889C3.09288 213.347 -0.469981 197.662 7.33333 190.889C19.9701 179.921 35.4701 185.791 43.3333 198C48.0453 205.316 50.6198 213.588 52.5556 222C53.8809 227.759 54.1266 234.717 56.7778 240.111C58.4413 243.495 62.6677 236.76 63.2222 236.111C72.297 225.493 80.8762 214.45 90.8889 204.667C92.0139 203.567 102.796 191.857 106.222 193.444C109.073 194.765 110.927 203.437 112 205.889C112.668 207.416 119.593 222.206 121.222 220.111C123.797 216.8 126.01 211.459 130.389 210.111C133.978 209.007 133.811 214.313 134.556 216.333C135.839 219.817 136.834 217.773 137.056 215.444C137.554 210.213 139.474 211.58 141.611 215.111C147.578 224.969 156.904 218.908 164.722 213.333C179.701 202.653 192.772 185.432 200.167 168.556C204.734 158.133 207 145.491 207 134.111C207 132.962 207.064 129.531 206.889 130.667C205.999 136.454 204.899 142.204 204.056 148C199.434 179.774 193.929 211.381 189 243.111C185.211 267.504 182.115 292.046 177.667 316.333C176.176 324.474 175.257 323.579 174.222 316.333C172.41 303.646 173.535 287.227 165.667 276.444C163.127 272.964 166.416 280.416 167.556 281.556C172.506 286.506 186.862 279.894 191.556 278.556C200.164 276.1 208.697 273.497 217.111 270.444C218.517 269.934 220.608 268.79 222 270C225.083 272.681 226.728 278.489 230 280.556C232.486 282.125 232.012 275.028 232.889 272.222C236.292 261.332 242.392 252.762 248 243"
                  stroke="black"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            {/* SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SCSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                REST API
              </div>
            </motion.div>
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          {/* <Experience/> */}
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 xl:w-1/2 sticky top-0 z-30">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
