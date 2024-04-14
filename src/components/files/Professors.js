"use client"
import React, { useState, useEffect } from 'react';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import iitImage from '../images/iit.png';
import sastraImage from '../images/sastra.png';
import nitImage from '../images/nit.png';
import iitbImage from '../images/iitb.jpg';
import iitKanpur from '../images/iitk.jpg';
import Link from 'next/link';
import Image from 'next/image';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        sastraImage, iitImage, iitbImage

    ]

    const cards = [
        // An array of card objects with different titles, details, and URLs
        {
            title: 'Alok Mittal',
            details: 'Co-founder, IAN & Co-founder and CEO of Indifi',
            college: 'SASTRA',
            location: 'Thanjavur',
            funding: '3 Million',
            domain: 'IoT',
        },
        {
            title: 'Saurabh Srivastava',
            details: 'Founder, IAN & Past Chairman, NASSCOM',
            college: 'IIT Madras',
            location: 'Chennai',
            funding: '3 Million',
            domain: 'AR/VR',
        }, {
            title: 'Ajai Chowdhry',
            details: 'Board Member, IAN & Co - founder, HCL',
            college: 'IIT Bombay',
            location: 'Mumbai',
            funding: '3 Million',
            domain: 'AI',
        }
    ];

    const transitionDuration = 500;

    const totalImages = images.length;
    const totalCards = cards.length;
    const cardsPerSlide = 3;

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalCards - cardsPerSlide : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === totalCards - cardsPerSlide ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === totalCards - cardsPerSlide ? 0 : prevIndex + 1));
        }, 6000);
        return () => clearInterval(interval);
    });

    return (
        <div className={'mb-10'}>
            <div className={'flex items-center justify-center'}>
                <div className={'w-2/12 flex items-center justify-center'}>
                    <div className={'w-full text-right'}>
                        <button className={'border-0 bg-gray-200 shadow-md hover:shadow-lg rounded-full p-2'} onClick={prevSlide}>
                            <BsChevronLeft size={30} />
                        </button>
                    </div>
                </div>
                <div className={'hidden md:flex w-full'}>
                    <ul className={`flex transition-container transform -translate-x-${currentIndex * 33.33}% transform-all duration-${transitionDuration / 1000}s`}>
                        {[currentIndex, currentIndex + 1, currentIndex + 2].map((index) => (
                            <li key={index} className={'m-3'}>
                                <div className={'rounded-lg h-full bg-gray-700 shadow-xl flex flex-col justify-center'}>
                                    <div className='flex items-center justify-between'>
                                        <Image src={images[index % totalImages]} alt="" height={500} className={'rounded-md'} />
                                    </div>
                                    <h2 className={'p-1 text-2xl flex flex-col items-center font-bold text-white'}>{cards[index % totalCards].title}</h2>
                                    <p className='absolute flex items-center gap-2 top-3 p-2 bg-cyan-700 text-white rounded-md'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                                        </svg>
                                        {cards[index % totalCards].domain}</p>
                                    <p className={'flex items-center p-1 text-md text-gray-300'}>
                                        <div className='mr-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                            </svg></div> {cards[index % totalCards].location}
                                    </p>
                                    <p className={'flex items-center p-1 text-md text-gray-300'}>
                                        <div className='mr-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>
                                        </div>
                                        {cards[index % totalCards].funding} status
                                    </p>
                                    <p className={'flex items-center p-1 text-md text-gray-300'}>
                                        <div className='mr-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                                            </svg>

                                        </div>
                                        {cards[index % totalCards].domain}
                                    </p>
                                    <button className={'rounded-lg bg-blue-600 border-blue-600 shadow-md hover:shadow-lg p-2 text-white m-2'}>Surf more</button></div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={'w-2/12 flex items-center'}>
                    <div className={'w-full text-left'}>
                        <button className={'border-0 bg-gray-200 shadow-md hover:shadow-lg rounded-full p-2'} onClick={nextSlide}>
                            <BsChevronRight size={30} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;