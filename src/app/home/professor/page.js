"use client"
import React from 'react'

const page = () => {
  
  const signOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedIn');
    window.location.href = '/login';
  };
  
  return (
    <div className='text-white'>
      page
      <button onClick={signOut} className='border-0 bg-blue-500 text-white'>Signout</button>
    </div>
  )
}

export default page