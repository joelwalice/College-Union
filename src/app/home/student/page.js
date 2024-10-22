"use client"
import Image from 'next/image';
import Boat from '@/components/sponsors/boat.jpeg'
import Cat from '@/components/sponsors/cat.jpeg'
import Time from '@/components/sponsors/time.jpeg'
import Magoose from '@/components/sponsors/magoose.jpeg'
import Agency from '@/components/images/agency.png';
import Carousel from "@/components/files/Carousel";
import CarouselM from '@/components/files/CarouselM';
import Internship from '@/components/files/Internships';
import Startup from '@/components/files/Startups';
import StartupM from '@/components/files/StartupM';
import Invest from '@/components/files/Invest';
import Navbar from '@/components/files/Navbar';
import AI from '@/components/upskills/ai.jpeg';
import Data from '@/components/upskills/data.jpeg';
import DSA from '@/components/upskills/DSA.jpeg';
import tensor from '@/components/upskills/tensor.jpeg';
import aif from '@/components/mutual/aif.jpeg';
import IIT from '@/components/mutual/iit.jpeg';
import mf from '@/components/mutual/mf.jpeg';
import st from '@/components/mutual/st.jpeg';
import AIs from '@/components/domains/ai.jpg';
import AR from '@/components/domains/arvr.jpg';
import Drone from '@/components/domains/drone.jpg';
import Iot from '@/components/domains/iot.jpg';
import space from '@/components/domains/space.jpg';
import Jobs from '@/components/files/Job';
import { useEffect, useState } from 'react';
import Professors from '../../../components/files/Professors';

export default function Home() {
  const [nav, setNav] = useState(new Array(11).fill(false));

  return (
    <div className="flex flex-col p-4 items-center min-w-screen">
      <Navbar />
      <div className="flex flex-col items-center items-center sm:gap-1 md:gap-2">
        {/* Sponsors */}
        <div className="p-4 flex flex-col items-center w-screen">
          <h1 className="text-3xl md:text-4xl font-semibold text-white">Sponsors</h1>
          <div className="grid flex grid-cols-2 sm:grid-cols-4 items-center justify-center gap-5 m-4">
            <div className="p-4 shadow-lg flex flex-col justify-center items-center bg-gray-800 rounded-lg">
              <Image src={Boat} width={400} />
              <h1 className="text-xl md:text-3xl p-4 font-semibold text-white">Boat</h1>
            </div><div className="p-4 shadow-lg flex flex-col justify-center items-center bg-gray-800 rounded-lg">
              <Image src={Magoose} />
              <h1 className="text-xl md:text-3xl p-4 font-semibold text-white">Magoosh</h1>
            </div><div className="p-4 shadow-lg flex flex-col justify-center items-center bg-gray-800 rounded-lg">
              <Image src={Time} />
              <h1 className="text-xl md:text-3xl p-4 font-semibold text-white">TIME Institute</h1>
            </div>
            <div className="p-4 shadow-lg flex flex-col justify-center items-center bg-gray-800 rounded-lg">
              <Image src={Cat} />
              <h1 className="text-xl md:text-3xl p-4 font-semibold text-white">2IIMS </h1>
            </div>
          </div>
        </div>
        {/* AI Agency */}
        <div className="p-4 flex flex-col items-center w-screen ">
          <h1 className="text-3xl md:text-4xl font-semibold text-white">AI Franchise</h1>
          <Image src={Agency} width={1000} height={1000} className=" m-4 rounded-lg" />
        </div>

        {/* College*/}
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-white">Colleges</h1>
          <div className='hidden md:flex'><Carousel /></div>
          <div className='flex md:hidden'><CarouselM /></div>
        </div>

        {/* Startups */}
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-white">Top Startups</h1>
          <div className='hidden md:flex'><Startup /></div>
          <div className='flex md:hidden'><StartupM /></div>
        </div>
        {/* Domains*/}
        <div className="p-4 flex flex-col items-center w-screen">
          <h1 className="m-4 text-3xl md:text-4xl font-semibold text-white">Innovative Domains</h1>
          <div className="flex items-center justify-between gap-5">
            <div className="p-4 shadow-lg flex grid-cols-2 sm:grid-cols-4 flex-col justify-center items-center bg-gray-800 rounded-lg">
              <Image src={Iot} width="100" height="100" className="m-2 rounded-full" />
              <h1 className="text-2xl md:text-3xl font-semibold text-white">IoT</h1>
            </div>
            <div className="p-4 shadow-lg flex flex-col justify-center items-center bg-gray-800 rounded-lg">
              <Image src={AIs} width="100" height="100" className="rounded-full m-2" />
              <h1 className="text-2xl md:text-3xl font-semibold text-white">AI</h1>
            </div>
            <div className="p-4 shadow-lg flex flex-col justify-center items-center bg-gray-800 rounded-lg">
              <Image src={AR} width="100" height="100" className="rounded-full m-2" />
              <h1 className="text-2xl md:text-3xl font-semibold text-white">AR/VR</h1>
            </div>
            <div className="p-4 shadow-lg flex flex-col justify-center items-center bg-gray-800 rounded-lg">
              <Image src={space} width="100" height="100" className="rounded-full m-2" />
              <h1 className="text-2xl md:text-3xl font-semibold text-white">Space Tech</h1>
            </div>
            <div className="p-4 shadow-lg flex flex-col justify-center items-center bg-gray-800 rounded-lg">
              <Image src={Drone} width="100" height="100" className="rounded-full m-2" />
              <h1 className="text-2xl md:text-3xl font-semibold text-white">Drones</h1>
            </div>
          </div>
        </div>
        {/* Internships */}
        <div className="flex flex-col items-center justify-center m-4">
          <h1 className="text-3xl md:text-4xl font-semibold text-white p-4 ">Top Internships</h1>
          <div><Jobs /></div>
        </div>
        {/* Professor Startup */}
        <div className="flex flex-col items-center justify-center m-4">
          <h1 className="text-3xl md:text-4xl font-semibold text-white p-4 ">Professor's Startup</h1>
          <div><Professors /></div>
        </div>
        {/* Alumni Startup */}
        <div className="flex flex-col items-center justify-center m-4">
          <h1 className="text-3xl md:text-4xl font-semibold text-white p-4 ">Alumni's Startup</h1>
          <div><Professors /></div>
        </div>
        {/* Top Investors */}
        <div className="flex flex-col items-center justify-center p-4 m-4">
          <h1 className="text-3xl md:text-4xl font-semibold text-white">Top Investors</h1>
          <div><Internship /></div>
        </div>
        {/* Upskilling courses */}
        <div className="flex flex-col items-center w-screen">
          <h1 className="m-4 text-3xl md:text-4xl font-semibold text-white">Upskilling Courses</h1>
          <div className="flex items-center justify-between gap-5">
            <div className="m-4 shadow-lg flex flex-col grid-cols-2 sm:grid-cols-4 justify-center items-center bg-gray-800 rounded-lg">
              <Image src={AI} width={500} className="m-2" />
              <h1 className="text-2xl md:text-2xl font-semibold text-white">AI</h1>
            </div>
            <div className="p-4 shadow-lg flex flex-col justify-center items-center bg-gray-800 rounded-lg">
              <Image src={Data} width={500} className="m-2" />
              <h1 className="text-2xl md:text-2xl font-semibold text-white">Data Analytics</h1>
            </div>
            <div className="p-4 shadow-lg flex flex-col justify-center items-center bg-gray-800 rounded-lg">
              <Image src={DSA} width={500} className="m-2" />
              <h1 className="text-2xl md:text-2xl font-semibold text-white">DSA</h1>
            </div>
            <div className="p-4 shadow-lg flex flex-col justify-center items-center bg-gray-800 rounded-lg">
              <Image src={tensor} width={400} className="m-2" />
              <h1 className="text-2xl md:text-2xl font-semibold text-white">Machine Learning</h1>
            </div>
          </div>
        </div>
        {/* StartupMutual Fund */}
        <div className="flex flex-col items-center justify-center p-4 m-4">
          <h1 className="text-3xl md:text-4xl font-semibold text-white">Startup Mutual Fund</h1>
          <div><Invest /></div>
        </div>
        {/* College Counsellor
        <div className="flex flex-col items-center w-screen">
          <h1 className="m-4 text-3xl md:text-4xl font-semibold text-white">College Counsellors</h1>
          <div className="flex items-center justify-between gap-5">
            <div className="p-4 shadow-lg flex flex-col grid-cols-2 sm:grid-cols-4 justify-center items-center bg-gray-800 rounded-lg">
              <Image src={aif} width="500" className="m-2" />
              <h1 className="text-2xl font-semibold text-white">AI Funds</h1>
            </div>
            <div className="p-4 shadow-lg flex flex-col justify-center items-center bg-gray-800 rounded-lg">
              <Image src={st} width="500" className="m-2" />
              <h1 className="text-2xl md:text-2xl font-semibold text-white">Space Tech</h1>
            </div>
            <div className="p-4 shadow-lg flex flex-col justify-center items-center bg-gray-800 rounded-lg">
              <Image src={IIT} width="800" className="m-2" />
              <h1 className="text-2xl md:text-2xl font-semibold text-white">IIT Funds</h1>
            </div>
            <div className="p-4 shadow-lg flex flex-col justify-center items-center bg-gray-800 rounded-lg">
              <Image src={mf} width="500" className="m-2" />
              <h1 className="text-2xl font-semibold text-white">Mutual Funds</h1>
            </div>

          </div>
        */}
        {/* Coming Soon */}
        <div className='flex flex-col items-center justify-center p-4'>
          <h1 className="m-4 text-3xl md:text-4xl font-semibold text-white">Coming Soon</h1>
          <div className='flex items-center p-4 rounded-lg bg-gray-700 w-screen grid grid-cols-2 sm:grid-cols-3 md:m-4 gap-4'>
            {["TBI Network", "Tech Community", "Consulting Clubs", "Cultural Community", "Corporate Scouting Network", "Hiring portal", "Interviews prep Community", "Competitive Exam Prep", "Common Interest community", "Dating network", "Student Counselling", "Legal Network"].map((item, index) => (
              <div key={index} className='flex flex-col items-center justify-center rounded-lg bg-gray-600 p-4'>
                <h2 className="m-2 text-2xl md:text-2xl font-semibold text-white">{item}</h2>
                <div className='flex items-center justify-center gap-4'>
                  <button className='bg-blue-500 text-white p-2 border-0 rounded-lg'>Early Regs</button>
                  {nav[index] ? (
                    <button className='border-0 bg-gray-300 rounded-lg' onClick={() => setNav(prevNav => prevNav.map((val, i) => i === index ? !val : val))}>
                      <img width="32" height="32" src="https://img.icons8.com/emoji/48/red-heart.png" alt="red-heart" />
                    </button>
                  ) : (
                    <button className='border-0 rounded-lg bg-gray-500' onClick={() => setNav(prevNav => prevNav.map((val, i) => i === index ? !val : val))}>
                      <img width="32" height="32" src="https://img.icons8.com/emoji/48/red-heart.png" alt="red-heart" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Contact Us */}
        <div className='w-screen p-4'>
          <h1 className="text-3xl md:text-4xl font-semibold text-white flex items-center justify-center">Contact Us</h1>
          <div className='bg-gray-600 p-4 rounded-lg items-center justify-center'>
            <form className="flex flex-col justify-center min-w-screen gap-5" method="POST" action={'https://formspree.io/f/mleqpwzr'}>
              <div className='flex items-center justify-center gap-2'>
                <h2 className="m-4 text-2xl md:text-2xl font-semibold text-white">Name : </h2>
                <input className="border rounded-lg shadow-lg p-4 w-1/2" type="text" name="name" placeholder="Full Name" required />
              </div>
              <div className='flex items-center justify-center gap-2'>
                <h2 className="m-4 text-2xl md:text-2xl font-semibold text-white">Email : </h2>
                <input className="border rounded-lg shadow-lg p-4 w-1/2" type="email" name="email" placeholder="Email" required />
              </div>
              <div className='flex items-center justify-center gap-2'>
                <h2 className="m-4 text-2xl md:text-2xl font-semibold text-white">Phone : </h2>
                <input className="border rounded-lg shadow-lg w-1/2 p-4" type="text" name="phone" placeholder="Phone" required />
              </div>
              <div className='flex items-center justify-center gap-2'>
                <h2 className="m-4 text-2xl md:text-2xl font-semibold text-white">Details: </h2>
                <textarea className="border rounded-lg shadow-lg p-4 w-1/2" type="text" placeholder="Budget" required></textarea>
              </div>
              <div className="flex items-center justify-center">
                <input className="border cursor-pointer border-indigo-600 rounded-lg shadow-lg p-5 bg-indigo-600 text-white" type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
