"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../images/logo.png'

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const signOut = () => {
        Cookies.remove('isloggedIn');
        Cookies.remove('token');
        window.location.href = '/login';
    };
    return (
        <div>
            {nav ? <div className='relative z-40'>
                <div className='flex fixed right-0 top-[105px] duration-500  text-white bg-gray-600 min-h-[200px] rounded-l-lg w-[178px] items-center justify-center'>
                    <div className='flex flex-col items-center justify-center  p-4 gap-4'>
                        <Link href="">
                            <h1 className='font-semibold' onClick={() => { setNav(!nav) }}>Sponsors</h1></Link>
                        <Link href="/">
                            <h1 className='font-semibold' onClick={() => { setNav(!nav) }}>Colleges</h1></Link>
                        <Link href="/">
                            <h1 className='font-semibold' onClick={() => { setNav(!nav) }}>Administrations</h1></Link>
                        <Link href="/">
                            <h1 className='font-semibold' onClick={() => { setNav(!nav) }}>Top Startups</h1></Link>
                        <Link href="/">
                            <h1 className='font-semibold' onClick={() => { setNav(!nav) }}>Domains</h1></Link>
                        <Link href="/">
                            <h1 className='font-semibold' onClick={() => { setNav(!nav) }}>Top Investor</h1></Link>
                        <Link href="/">
                            <h1 className='font-semibold' onClick={() => { setNav(!nav) }}>Courses</h1></Link>
                        <Link href="/">
                            <h1 className='font-semibold' onClick={() => { setNav(!nav) }}>Startup Funds</h1></Link>
                        <Link href="/">
                            <h1 className='font-semibold' onClick={() => { setNav(!nav) }}>Counsellors</h1></Link>
                        <Link href="/">
                            <h1 className='font-semibold' onClick={() => { setNav(!nav) }}>Coming Soon</h1></Link>
                        <Link href="/">
                            <h1 className='font-semibold' onClick={() => { setNav(!nav) }}>Contact</h1></Link>
                        <button onClick={signOut} className='border-0 bg-blue-500 text-white rounded-lg shadow-lg'>Signout</button>

                    </div>
                </div>

            </div> : <div className='relative'>
                <div className='flex fixed right-[-500px] top-[100px] duration-500 text-white bg-gray-700 min-h-[200px] rounded-lg w-[150px] items-center justify-center'>
                    <div className='flex flex-col items-center justify-center p-4 gap-4'>
                        <Link href="">
                            <h1 className='font-semibold' onClick={() => { setNav(!nav) }}>Sponsors</h1></Link>
                        <Link href="/">
                            <h1 className='font-semibold' onClick={() => { setNav(!nav) }}>Colleges</h1></Link>
                        <Link href="/">
                            <h1 className='font-semibold' onClick={() => { setNav(!nav) }}>Administrations</h1></Link>
                        <Link href="/">
                            <h1 className='font-semibold' onClick={() => { setNav(!nav) }}>Top Startups</h1></Link>
                        <Link href="/">
                            <h1 className='font-semibold' onClick={() => { setNav(!nav) }}>Domains</h1></Link>
                        <Link href="/">
                            <h1 className='font-semibold' onClick={() => { setNav(!nav) }}>Top Investor</h1></Link>
                        <Link href="/">
                            <h1 className='font-semibold' onClick={() => { setNav(!nav) }}>Courses</h1></Link>
                        <Link href="/">
                            <h1 className='font-semibold' onClick={() => { setNav(!nav) }}>Startup Funds</h1></Link>
                        <Link href="/">
                            <h1 className='font-semibold' onClick={() => { setNav(!nav) }}>Counsellors</h1></Link>
                        <Link href="/">
                            <h1 className='font-semibold' onClick={() => { setNav(!nav) }}>Coming Soon</h1></Link>
                        <Link href="/">
                            <h1 className='font-semibold' onClick={() => { setNav(!nav) }}>Contact</h1></Link>
                        <button onClick={signOut} className='border-0 bg-blue-500 text-white rounded-lg shadow-lg'>Signout</button>

                    </div>
                </div>
            </div>}
            <div className='flex items-center justify-between w-screen max-h-[100px] bg-gray-800 text-white p-4 shadow-lg'>
                <Link href="/home/student"><Image src={Logo} width={300} className='flex rounded-lg' /></Link>
                <div className='flex items-center justify-center gap-4'>
                    <button className='bg-gray-200 text-blue-900 hover:shadow-lg shadow-md shadow-gray-800 hover:shadow-gray-600 border-0 rounded-lg font-semibold'>Shop Now</button>
                    <button className='bg-gray-200 text-blue-900 hover:shadow-lg shadow-md shadow-gray-800 hover:shadow-gray-600 border-0 rounded-lg font-semibold'>Contact us</button>
                    <button className=' border-0 p-4 rounded-full' onClick={() => { setNav(!nav) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" class="w-10 h-10">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Navbar
