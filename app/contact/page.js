"use client"
import React, { useRef } from 'react'
import { useState ,  } from 'react'
import { animate, motion } from 'framer-motion'
import emailjs from '@emailjs/browser';
const page = () => {
  const [success, setsuccess] = useState(false)
  const [error, seterror] = useState(false)
  const text = "Say Hello";

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();
    seterror(false)
    setsuccess(false)

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      })
      .then(
        () => {
          setsuccess(true)
          form.current.reset()
        },
        (error) => {

          seterror(true)
        },
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.7 }}
    >

      <div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40'>
        <div className='text-container h-1/3 lg:h-full lg:w-1/2 flex justify-center items-center text-5xl'>
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.1 }}>
                {letter}
              </motion.span>
            ))}😊
          </div>
        </div>

        <form onSubmit={sendEmail} ref={form} className='form-container h-2/3 lg:h-full lg:w-1/2 bg-red-50 rounded text-xl flex flex-col justify-center p-15 md:p-20 gap-5 lg:gap-8'>
          <span className=''>Dear Manish,</span>
          <textarea required  name="user_msg" id="" className=' resize-none min-h-[80px] border-b-2 border-black outline-none' />
          <span>My mail address is:</span>
          <input required type="email" className='bg-transparent border-b-2 border-black outline-none' name='user_email' />
          <span>Regards</span>
          <button className=' cursor-pointer ring-1 ring-black bg-purple-50  text-black rounded p-4'>Send</button>
          {success && <span className=' text-green-500 font-semibold text-sm'>Your message has been sent successfully!</span>}
          {error && <span className='text-red-500 font-semibold text-sm'>Something went wrong!</span>}
        </form>
      </div>
    </motion.div>
  )
}

export default page