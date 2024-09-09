import React from 'react'
import { AuroraBackground } from './aurora-background'
import { motion } from 'framer-motion'


const Home = () => {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-start justify-center px-2 w-full"
      >
        <div className="text-3xl mx-40 md:text-7xl font-bold text-white mr-[400px] text-center" style={{ fontFamily: "Berkshire Swash", fontSize: "90px"}}>
          Welcome to Judicio!
        </div>
        <div className="font-extralight mx-40 text-base md:text-4xl text-neutral-200 py-4" style={{ fontFamily: "Poppins"}}>
        Justice delayed is Justice denied. <br />With that thought in mind, we have come up with a Bail reckoning system called Judicio. <br />
        Uniting technology and the Constitution of India, <br /> to deliver swift and just outcomes for undertrial individuals—<br /> whether it's enduring justice or timely mercy through Bail. 
        </div>
        <button className="mx-40 h-16 py-3 px-4 inline-flex items-center gap-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 focus:outline-none focus:border-blue-600 focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:text-blue-500 dark:focus:border-blue-600" style={{ fontFamily: "Outfit", fontSize: "25px", borderRadius: "20px"}}>
         <a href="/prisoner">Try Judicio Today</a> 
        </button>
      </motion.div>
    </AuroraBackground>
  )
}

export default Home