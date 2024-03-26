import React from 'react'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between w-screen max-h-[100px] bg-gray-800 text-white p-4 shadow-lg'>
            <div>
                <div className='p-2 select-none bg-gray-200 text-blue-900 shadow-lg border-0 rounded-lg font-semibold'>Logo</div>
            </div>
            <div className='flex items-center justify-center gap-4'>
                <button className='bg-gray-200 text-blue-900 shadow-lg shadow-gray-600 border-0 rounded-lg font-semibold'>Contact us</button>
                <button className='bg-gray-200 text-blue-900 shadow-lg shadow-gray-600 border-0 rounded-lg font-semibold'>Login</button>
            </div>
        </div>
    )
}

export default Navbar