"use client"
import React, { useRef } from 'react'
import { motion, px, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {

  const workList = [
    {
      id: 1,
      color: "from-blue-200 to-red-200",
      title: "MCP-partner management system",
      des: "Micro Collection Partner (MCP) System is a full-stack order and partner management platform where I managed pickup partners, customer orders, and wallet-based transactions with features like real-time tracking, fund transfers, transaction history, and notifications using React.js, Node.js, Express.js, MongoDB, and JWT.",
      img: "/mcp.png",
      githubLink: "https://github.com/Manish-kumawat31/MCP-Micro-Collection-Partner-",
      liveLink: "https://mcp-ruby.vercel.app/"
    },
    {
      id: 2,
      color: "from-red-200 to-purple-200",
      title: "DIGIVOTE-online college voting system",
      des: "Digital Voting System for College is a secure online election platform with role-based login for voters, candidates, and admins, allowing admins to manage elections and results while ensuring one-time voting using React, Node.js, Express.js, and MongoDB.",
      img: "/digi.png",
      githubLink: "https://github.com/Manish-kumawat31/DigiVote",
      liveLink: "https://digivote-17q2.onrender.com/index"
    },
    {
      id: 3,
      color: "from-purple-200 to-blue-200",
      title: "WONDERLUST-hotel management",
      des: "Wonderlust is an Airbnb-inspired hotel listing platform where users can explore stays, search listings, add new properties with image upload, view detailed pages with maps, and give ratings/reviews, built using Node.js, Express.js, MongoDB, EJS, and Mapbox.",
      img: "/wonderlust.png",
      githubLink: "https://github.com/Manish-kumawat31/Wonderlust-Project",
      liveLink: "https://wonderlust-project-gid0.onrender.com/listings"
    },
  ]

  const ref = useRef()
  const { scrollYProgress } = useScroll({ target: ref })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-71%"])
  
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.7 }}
    >

      <div className='h-[600vh]' ref={ref}>
        <div className='w-screen h-[calc(100vh-6rem)] flex justify-center items-center text-7xl text-center'>
          My Works
        </div>
        <div className='h-screen sticky top-0 flex gap-4 items-center overflow-hidden'>
          <motion.div style={{ x }} className='flex'>
          {/* <div className='h-screen w-screen flex items-center justify-center bg-gradient-to-r from-red-300 to-violet-300' />
          <div className='h-screen w-screen flex items-center justify-center bg-gradient-to-r from-violet-300 to-purple-300' />
          <div className='h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300' /> */}
          <div className='h-screen w-[51vw] flex items-center justify-center bg-gradient-to-r from-red-200 to-blue-200' />
            {workList.map((item) => (
              <div className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`} key={item.id}>
                <div className='flex flex-col gap-8 text-white items-center'>
                  <h1 className='text-xl md:text-2xl text-black lg:text-4xl xl:text-5xl font-bold' >{item.title}</h1>
                  <div className=' relative w-80 h-56 md:w-95 md:h-65 lg:w-[450px] lg:h-[280px] xl:w-[550px] xl:h-[330px]'>
                    <Image src={item.img} alt='' fill />
                  </div>
                  <p className='text-gray-500 text-[16px] font-semibold w-80 md:95 lg:w-[450px] xl:w-[550px]'>{item.des}</p>
                  <div className='links flex gap-3 justify-center w-full'>
                    <Link target="_blank" href={item.liveLink}><button className=' ring-black ring-1 text-black rounded  md:p-2 lg:p-2.5 xl:p-3 cursor-pointer font-semibold p-1.5'>Live Demo</button></Link>
                    <Link target='_blank' href={item.githubLink}><button className=' text-black rounded ring-1 ring-black  md:p-2 lg:p-2.5 xl:p-3 cursor-pointer font-semibold p-1.5'>GitHub Repo</button></Link>
                  </div>
                </div>
              </div>
            ))}
        </motion.div>
      </div>
    </div>
    </motion.div >
  )
}

export default page