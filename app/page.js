"use client"
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <motion.div className="h-full"
    initial={{y:"-200vh" , opacity:0}}
    animate={{y:"0%" , opacity:1}}
    transition={{duration:0.7}}>

      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40">


        {/* img container */}
        <div className="h-1/2 lg:h-full  lg:w-1/2 flex flex-col justify-center gap-6">
        <h1 className="text-black font-bold text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl" >hi, I'm{" "}
          <span className=" text-violet-400 rounded-xl px-3 py-1">Manish</span></h1>
        <div className="font-bold text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl text-black w-fit">Kumawat</div>
        </div>


        {/* text-container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 justify-center items-center ">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl">Building Web Experiences That Matter</h1>

          <p className="md:text-2xl">I'm Manish, a MERN stack developer focused on creating fast, responsive,
            and user-friendly web applications.</p>

          <div className="flex lg:w-full gap-4">
            <Link href={"/portfolio"}><button className=" cursor-pointer p-4 bg-black text-white rounded-md ring-1 ring-black">view my work </button></Link>
            <Link className="" href={"/contact"}>
            <button className=" cursor-pointer rounded-md p-4 ring-1 ring-black" >Contact me</button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
