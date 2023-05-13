import React from 'react'
import { Link } from 'react-router-dom'
import {default as aboutImg } from '../../assets/images/aboutImg.jpg'
export const AboutRoute = () => {
  return (
    <section className=" h-[100vh] w-[100%] bg-[#f6f8fa]">
      <div className="flex justify-center items-center bg-slate-500 w-[100%] pt-14 h-[120px] md:h-[300px]">
        <div className="flex gap-3 justify-center md:pt-10 items-center ">
          <h1 className="text-xl text-black font-sans font-semibold md:text-6xl ">
            Home
          </h1>
          <i
            class="fa-solid fa-arrows-turn-right
          text-white text-center pt-2 text-2xl"
          ></i>
          <i class="fa-sharp fa-solid fa-slash-forward text-white text-center pt-2 text-2xl"></i>
          <h3 className="text-[#6663e9] text-lg md:text-5xl">About</h3>
        </div>
      </div>
      <section className="flex w-[100%] flex-col justify-center items-center md:flex-row  gap-4 md:gap-8 pt-3 pb-6 px-20 md:px-32">
        <div className="flex-1">
          <img
            src={aboutImg}
            alt="about us"
            className="md:max-w-[400px] lg:max-w-[600px] md:h-[350px]"
          />
        </div>
        <div className="flex-1 w-[100%] flex flex-col bg-black  text-white gap-3 md:gap-4 justify-center items-start">
          <h1 className="text-[25px] md:text-4xl font-sans font-semibold">
            About us
          </h1>

          <p className="md:hidden">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in est
            laborum
          </p>
          <p className="hidden md:flex  w-[100%] text-sm lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>

          <button className="bg-[#6663e9]  rounded-3xl py-2 md:py-3 px-6 hover:bg-white transition-all duration-500">
            <Link to="/contact"
            className='ab-link'>contact us</Link>
          </button>
        </div>
      </section>
    
    </section>
  )
}
