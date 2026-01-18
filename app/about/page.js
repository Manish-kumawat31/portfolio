"use client"
import React, { useRef } from 'react'
import { motion, useInView, useScroll } from 'framer-motion'
import Brain from '@/components/Brain'

const page = () => {

  const containerRef = useRef()
  const { scrollYProgress } = useScroll({ container: containerRef })

  const skillRef = useRef()
  const isSkillinView = useInView(skillRef, { once: true }, { margin: "-100px" })

  const experienceRef = useRef()
  const isexperienceinView = useInView(experienceRef, { once: true })
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.7 }}
    >

      {/* container */}
      <div className='lg:flex h-full overflow-auto' ref={containerRef}>
        {/* text-container */}
        <div className='p-4 sm:p-8 md:p-12 lg:p-18 xl:p-23 flex flex-col gap-20 md:gap-30 lg:gap-45 xl:gap-60 lg:w-2/3 lg:pr-0 xl:w-1/2'>
          {/* BIOGRAPHY */}
          <div className='flex flex-col gap-12 justify-center'>
            <h1 className='font-bold text-2xl'>
              BIOGRAPHY
            </h1>
            <p className=' text-lg'>I’m Manish Kumawat, a Computer Engineering third year student and a MERN Stack developer. I enjoy building modern, responsive web applications and full-stack projects that solve real problems. I’m focused on improving my skills in React, Node.js, MongoDB, and backend development while working on impactful projects.</p>
            <span className=' italic'>“Code with purpose, build with passion.”</span>
            <div className=' self-end'>
              <svg xmlns="http://www.w3.org/2000/svg" width="150" height="50" viewBox="0 0 301 122" fill="none">
                <rect width="301" height="122" fill="none" />

                <path
                  d="M299.843 1C298.259 1 296.675 1 249.263 1C201.851 1 108.659 1 61.5746 1.264C14.4906 1.52799 16.3386 2.05598 18.2146 2.45998C24.8131 3.88098 37.6026 6.03999 47.8146 10.052C57.8313 13.9872 64.6106 16.984 70.8866 19.524C76.4821 21.7886 81.6826 24.184 87.0226 26.46C91.9565 28.5629 97.9386 30.856 105.423 34.452C106.552 34.9945 105.459 36.184 104.127 36.724C96.0957 39.9798 86.0026 40.456 79.8706 41.664C68.3493 43.9337 58.0026 43.4 49.7506 45.124C35.878 48.0222 30.5306 49 24.1346 50.46C18.4793 51.7509 11.6186 53.528 4.13461 54.86C2.46336 55.1574 1.20262 56.184 1.05061 56.856C0.22478 60.5068 9.68257 59.128 14.3586 60.86C19.0741 62.6067 24.6106 62.328 45.7786 63.128C63.7678 63.8079 96.5146 63.4 117.207 64.06C145.609 64.9659 155.027 68.192 158.879 69.656C168.627 71.928 174.483 73 196.467 73.664C212.867 73.8 243.491 73.8 275.043 73.8"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                <path
                  d="M53.4426 46.6C53.4426 47.128 53.4426 52.416 54.1026 60.016C54.3333 62.6729 56.0826 62.6 57.1586 61.676C62.0742 57.4548 62.7706 53.544 64.0986 51.812C65.3645 50.161 68.0986 50.864 70.2266 51.66C71.3475 52.0793 72.3546 52.984 72.8986 54.316C73.4426 55.648 73.4426 57.496 73.4426 57.92C73.4426 58.552 74.2346 55.144 75.9626 53.28C79.1298 49.8636 84.6186 50.6 88.6146 50.996C91.0266 52.184 92.6346 54.32 93.9666 56.98C94.5066 58.32 94.7706 59.64 95.0426 62.6"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                <path
                  d="M117.443 52.2C114.787 51.136 110.531 49.544 105.727 49.924C102.394 50.1876 102.251 55.656 101.051 57.784C100.487 58.7831 100.643 59.912 101.435 60.852C103.329 63.1005 106.235 64.192 107.963 65.26C109.657 66.3073 112.363 64.736 114.495 63.808C116.355 62.9983 115.843 57.832 115.843 53.692C115.843 52.72 115.843 54.04 116.107 55.248C116.371 56.456 116.899 57.512 117.443 59.4"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                <path
                  d="M125.443 49C125.707 50.856 126.243 56.168 127.571 59.536C127.917 60.4142 127.843 55.464 128.371 53.7C128.899 51.936 129.955 51.672 131.555 51.536C133.155 51.4 135.267 51.4 136.619 51.928C138.499 53.512 139.307 55.656 139.707 57.916C139.843 59.12 139.843 60.44 139.843 61.8"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                <path
                  d="M151.843 51.4C151.579 51.4 151.315 51.4 150.915 51.928C150.515 52.456 149.987 53.512 149.715 55.772C149.443 58.032 149.443 61.464 149.443 65"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                <path
                  d="M155.843 39.4C155.579 39.4 155.315 39.4 154.651 39.4C153.987 39.4 152.931 39.4 154.243 41"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                <path
                  d="M171.843 46.6C171.315 46.6 168.403 46.6 164.139 47.128C162.444 47.3378 161.987 48.712 161.847 49.916C161.707 51.12 161.971 52.44 162.767 53.648C165.957 58.4893 170.763 58.064 172.763 58.992C173.625 59.392 173.443 60.712 172.783 61.52C172.123 62.328 170.803 62.856 169.463 63.524C168.123 64.192 166.803 64.984 163.043 65.8"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                <path
                  d="M183.843 47.4C184.899 47.4 185.443 54 185.443 63.208C185.443 65.816 185.443 64.232 185.839 63.02C186.235 61.808 187.027 61.016 186.907 60.74C186.787 60.464 185.731 60.728 185.187 62.448C184.643 64.168 184.643 67.336 184.643 67.78C184.643 68.224 184.643 65.848 185.435 64.492C186.227 63.136 187.811 62.872 189.947 62.736C192.083 62.6 194.723 62.6 196.083 64.976C202.734 76.596 196.115 83.64 195.711 89.112C195.279 94.9633 190.275 100.168 186.919 104.852C184.171 108.687 178.275 111.912 173.327 113.796C168.709 115.554 164.931 117.528 159.731 118.464C154.064 119.484 149.203 120.456 144.527 120.736C139.092 121.061 134.003 115.96 129.855 111.416C126.469 107.707 127.315 100.76 127.571 92.364C127.94 80.2456 161.139 90.056 166.227 90.732C170.772 91.3358 176.611 92.456 185.411 93.132C190.878 93.552 196.083 96.456 202.619 97.132C217.268 98.6471 241.955 97.272 252.335 96.868C259.555 96.2 264.899 95.936 267.159 95.536C268.363 95.4 269.683 95.4 271.043 95.4"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                <path
                  d="M225.443 52.2C225.707 52.2 225.971 52.2 226.635 52.2C227.299 52.2 228.355 52.2 228.643 53"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                <path d="M243.843 51.4H243.043" stroke="black" strokeWidth="2" strokeLinecap="round" />

                <path
                  d="M216.643 57C219.291 57.792 224.627 60.984 230.219 62.464C235.916 63.9719 248.275 63.4 255.699 60.216C256.371 59.144 256.899 58.088 257.171 56.884C257.443 55.68 257.443 54.36 257.443 53"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>

            </div>

            {/* Scroll down SVG */}
            <motion.svg initial={{ opacity: 0.5, y: 0 }} animate={{ opacity: 1, y: "10px" }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192 192"
              width="60"
              height="60"
              fill="none"
            >
              <defs>
                <style>{`.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:7.5px;}`}</style>
              </defs>

              <rect className="cls-1" x="43.33" y="14.07" width="105.33" height="163.85" rx="35" />
              <polyline className="cls-1" points="118.11 120.29 95.94 148.77 73.89 120.2" />
            </motion.svg>


          </div>

          {/* SKILLS */}
          <div className='flex flex-col gap-12 justify-center py-10' ref={skillRef}>
            <motion.h1 initial={{ x: "-300px" }} animate={isSkillinView ? { x: 0 } : {}} transition={{ delay: 0.1 }} className='font-bold text-2xl'>
              SKILLS
            </motion.h1>
            {/* skill list */}
            <motion.div initial={{ x: "-300px" }} animate={isSkillinView ? { x: 0 } : {}} transition={{ delay: 0.2 }} className='flex flex-wrap gap-4'>
              <div className=' rounded p-2 text-sm cursor-pointer text-white hover:bg-white hover:text-black bg-black' >Javascript</div>
              <div className=' rounded p-2 text-sm cursor-pointer text-white hover:bg-white hover:text-black bg-black' >Node.js</div>
              <div className=' rounded p-2 text-sm cursor-pointer text-white hover:bg-white hover:text-black bg-black' >CSS</div>
              <div className=' rounded p-2 text-sm cursor-pointer text-white hover:bg-white hover:text-black bg-black' >Java</div>
              <div className=' rounded p-2 text-sm cursor-pointer text-white hover:bg-white hover:text-black bg-black' >Express.js</div>
              <div className=' rounded p-2 text-sm cursor-pointer text-white hover:bg-white hover:text-black bg-black' >MongoDB</div>
              <div className=' rounded p-2 text-sm cursor-pointer text-white hover:bg-white hover:text-black bg-black' >GitHub</div>
              <div className=' rounded p-2 text-sm cursor-pointer text-white hover:bg-white hover:text-black bg-black' >Responsive Design</div>
              <div className=' rounded p-2 text-sm cursor-pointer text-white hover:bg-white hover:text-black bg-black' >React</div>
              <div className=' rounded p-2 text-sm cursor-pointer text-white hover:bg-white hover:text-black bg-black' >HTML</div>
              <div className=' rounded p-2 text-sm cursor-pointer text-white hover:bg-white hover:text-black bg-black' >Python</div>
              <div className=' rounded p-2 text-sm cursor-pointer text-white hover:bg-white hover:text-black bg-black' >MySQL</div>
              <div className=' rounded p-2 text-sm cursor-pointer text-white hover:bg-white hover:text-black bg-black' >Git</div>
              <div className=' rounded p-2 text-sm cursor-pointer text-white hover:bg-white hover:text-black bg-black' >REST API</div>
              <div className=' rounded p-2 text-sm cursor-pointer text-white hover:bg-white hover:text-black bg-black' >Tailwind CSS</div>
              <div className=' rounded p-2 text-sm cursor-pointer text-white hover:bg-white hover:text-black bg-black' >Next.js</div>
              <div className=' rounded p-2 text-sm cursor-pointer text-white hover:bg-white hover:text-black bg-black' >JWT</div>
            </motion.div>
            {/* Scroll down SVG */}
            {/* <motion.svg initial={{ opacity: 0.5, y: 0 }} animate={{ opacity: 1, y: "10px" }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192 192"
              width="60"
              height="60"
              fill="none"
            >
              <defs>
                <style>{`.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:7.5px;}`}</style>
              </defs>

              <rect className="cls-1" x="43.33" y="14.07" width="105.33" height="163.85" rx="35" />
              <polyline className="cls-1" points="118.11 120.29 95.94 148.77 73.89 120.2" />
            </motion.svg> */}
          </div>

          {/* Experience */}
          {/* <div className='flex flex-col gap-12 justify-center pb-48' ref={experienceRef}>
            <motion.h1 initial={{ x: "-300px" }} animate={isexperienceinView ? { x: 0 } : {}} transition={{ delay: 0.1 }} className='font-bold text-2xl'>
              EXPERIENCE
            </motion.h1> */}
            {/* Experience-container */}
            {/* <div> */}


              {/* Experience-list */}
              {/* <div className='flex justify-between h-48'> */}
                {/* left */}
                {/* <div className='w-1/3'>
                  <div className='job-title p-3 bg-white font-semibold rounded-b-lg rounded-s-lg'>
                    Junior web developer
                  </div>
                  <div className='job-Des text-sm p-3 italic'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing.
                  </div>
                  <div className='job-date text-red-400 p-3 font-semibold text-sm'>
                    1 Jan 2026
                  </div>
                  <div className='job-company text-md font-semibold bg-white rounded p-1 w-fit'>
                    Apple
                  </div>
                </div> */}
                {/* centre */}
                {/* <div className='w-1/6'>
                  <div className='line w-1 h-full bg-gray-600 rounded relative'>
                    <div className='circle absolute w-5 h-5 rounded-full ring-red-400 ring-4 -left-2 bg-white'></div>
                  </div>
                </div> */}
                {/* right */}
                {/* <div className='w-1/3'></div>
              </div> */}



              {/* Experience-list */}
              {/* <div className='flex justify-center gap-5 h-48'> */}
                {/* left */}
                {/* <div className='w-1/3'> */}

                {/* </div> */}
                {/* centre */}
                {/* <div className='w-1/6'>
                  <div className='line w-1 h-full bg-gray-600 rounded relative'>
                    <div className='circle absolute w-5 h-5 rounded-full ring-red-400 ring-4 -left-2 bg-white'></div>
                  </div>
                </div> */}
                {/* right */}
                {/* <div className='w-1/3'>
                  <div className='job-title p-3 bg-white font-semibold rounded-b-lg rounded-s-lg'>
                    Junior web developer
                  </div>
                  <div className='job-Des text-sm p-3 italic'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing.
                  </div>
                  <div className='job-date text-red-400 p-3 font-semibold text-sm'>
                    1 Jan 2026
                  </div>
                  <div className='job-company text-md font-semibold bg-white rounded p-1 w-fit'>
                    Apple
                  </div></div>
              </div> */}




              {/* Experience-list */}
              {/* <div className='flex justify-center gap-5 h-48'> */}
                {/* left */}
                {/* <div className='w-1/3'>
                  <div className='job-title p-3 bg-white font-semibold rounded-b-lg rounded-s-lg'>
                    Junior web developer
                  </div>
                  <div className='job-Des text-sm p-3 italic'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing.
                  </div>
                  <div className='job-date text-red-400 p-3 font-semibold text-sm'>
                    1 Jan 2026
                  </div>
                  <div className='job-company text-md font-semibold bg-white rounded p-1 w-fit'>
                    Apple
                  </div>
                </div> */}
                {/* centre */}
                {/* <div className='w-1/6'>
                  <div className='line w-1 h-full bg-gray-600 rounded relative'>
                    <div className='circle absolute w-5 h-5 rounded-full ring-red-400 ring-4 -left-2 bg-white'></div>
                  </div>
                </div> */}
                {/* right */}
                {/* <div className='w-1/3'></div> */}
              {/* </div>

            </div>
          </div> */}
        </div>


        {/* svg-container */}
        <div className='hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2'>
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  )
}

export default page