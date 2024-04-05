"use client"
import React, {useEffect} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import Logo from '../components/images/logo.png';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const isAdmin = localStorage.getItem("role");
    if (isLoggedIn === "true") {
      router.push(`/home/${isAdmin}`);
    }
  }, [router]);

  const but = async() => {
    await fetch('/api/hello',{
      method:'POST',
      body: JSON.stringify({hello: "World"}),
    })
  }

  return (
    <div>
      <title>Welcome Page</title>
      <div className='bg-gray-900 w-screen h-screen'>
        <div className='flex flex-col items-center justify-center h-full gap-5'>
          <Image src={Logo} className='m-2 rounded-lg'/>
          <Link href="/login">
            <button className='bg-white p-4 rounded-lg text-xl font-semibold text-red-500 hover:bg-red-500 hover:text-white hover:scale-105 duration-500'>Login</button>
          </Link>
          <button onClick={but}> Click me</button>
        </div>
      </div>
    </div>
  )
}
