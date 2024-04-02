"use client"
import React, { useEffect, useState } from 'react'
import Navbar from '@/components/files/Navbar';

const page = () => {
  const [log, setLog] = useState('');
  const [news, setNews] = useState('');

  useEffect(() => {
    if(localStorage.getItem('new')){
      setNews(localStorage.getItem('new'));
    }
    if(localStorage.getItem('token') && localStorage.getItem('role') === 'startup') setLog(localStorage.getItem('token'));
    else window.location.href = '/login'
  })
  
  
  return (
    <div className="flex flex-col p-4 items-center min-w-screen">
      <Navbar />
      {
        news ? <div>Form</div> : <div>No Form</div>
      }
    </div>
  )
}

export default page