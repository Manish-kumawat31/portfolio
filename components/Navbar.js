"use client"
import React from 'react'
import Link from 'next/link'
import { useState } from 'react';
import Image from 'next/image';
import Navlinks from './Navlinks';
import { motion, stagger, vw } from 'framer-motion';


const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setopen] = useState(false)

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)"
    }
  }
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    }
  }
  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)"
    }
  }

  const listVariant = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      }
    }
  }
  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0
    },
    opened: {
      x: 0,
      opacity: 1
    }
  }

  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40'>

      {/* links */}
      <div className='hidden md:flex gap-4 w-1/3 text-lg'>
        {links.map((link) => (
          <Navlinks link={link} key={link.title} />
        ))}
      </div>



      {/* logo */}
      <div className='md:hidden lg:flex lg:w-1/3 lg:justify-center'>
        <Link href={"/"} className='bg-black text-sm p-1 rounded-md font-semibold flex items-center justify-center'>
          <span className='text-white mr-1'>manish</span>
          <span className='bg-white rounded h-7 w-10 text-black flex items-center justify-center'>.dev</span>
        </Link>
      </div>

      {/* social */}
      <div className='social-links hidden md:flex gap-4 h-full items-center justify-center w-1/3'>
        <Link target='_blank' href={"https://github.com/Manish-kumawat31"}>
          <Image className='rounded' src={"/github.png"} alt='githubImg' width={35} height={35}></Image>
        </Link>
        <Link target='_blank' href={"https://www.linkedin.com/in/manishkumawat31/"}>
          <Image className='rounded' src={"/linkedin.png"} alt='linkedinImg' width={35} height={35}></Image>
        </Link>

      </div>


      {/* responsive menu */}
      <div className='md:hidden'>
        <button className='w-10 h-8 flex flex-col justify-between z-50 relative' onClick={() => (setopen((prev) => !prev))}>
          <motion.div variants={topVariants} animate={open ? "opened" : "closed"} className='h-1 w-10 rounded bg-black origin-left'></motion.div>
          <motion.div variants={centerVariants} animate={open ? "opened" : "closed"} className='h-1 w-10 rounded bg-black'></motion.div>
          <motion.div variants={bottomVariants} animate={open ? "opened" : "closed"} className='h-1 w-10 rounded bg-black origin-left'></motion.div>

        </button>
        {/* Menu list */}

        {open && (<motion.div variants={listVariant} initial="closed" animate="opened" className='absolute top-0 left-0 h-screen w-screen bg-black text-white flex flex-col justify-center items-center gap-10 text-3xl z-40'>
          {links.map((link) => (
            <motion.div variants={listItemVariants} className='' key={link.title}>
              <Link href={link.url} >{link.title}</Link>
            </motion.div>
          ))}
        </motion.div>)}
      </div>

    </div>
  )
}

export default Navbar