import React from 'react'
import Link from "next/link";

const Cards = () => {
    return (
        <div name='services'>
            <div className='grid sm:grid-cols-1 m-5 md:grid-cols-3 ml-4 mt-6 pr-4 gap-5 h-[250px] scroll-hide'>
                <div className='shadow-lg m-4 p-4 shadow-gray-800 text-white bg-gray-700 hover:scale-105 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div>
                        Posters
                    </div>
                </div>
            <div className='shadow-lg m-2 p-5 shadow-gray-800 text-white bg-gray-700 hover:scale-105 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
                <div>
                    <div>
                        Common Announcements Carousel
                    </div>
                </div>
            </div>
           <div className='shadow-lg m-5 p-4 shadow-gray-800 text-white bg-gray-700 hover:scale-105 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
                <div>
                    <div>
                        Posters
                    </div>
                </div>
           </div>
      </div>
        </div>
    )
}
export default Cards
