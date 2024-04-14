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
        // An array of image URLs
        iitbImage, sastraImage, iitKanpur, iitImage, iitbImage

    ]

    const cards = [
        {
            title: 'Product Engineer',
            details: 'IIT Bombay',
            salary: ' 18,000/Month',
            duration: '6 Months',
        },
        {
            title: 'Web Engineer',
            details: 'SASTRA',
            salary: ' 18,000/Month',
            duration: '6 Months'
        }, {
            title: 'App Developer',
            details: 'IIT Kanpur',
            salary: ' 18,000/Month',
            duration: '6 Months',
        }, {
            title: 'Python Developer',
            details: 'IIT Madras',
            salary: ' 18,000/Month',
            duration: '6 Months',
        },
        {
            title: 'Backend Developer',
            details: 'IIT Bombay',
            salary: ' 18,000/Month',
            duration: '6 Months',
        }
    ];

    const transitionDuration = 500;

    const totalImages = images.length;
    const totalCards = cards.length;
    const cardsPerSlide = 4;

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
                        {[currentIndex, currentIndex + 1, currentIndex + 2, currentIndex + 3].map((index) => (
                            <li key={index} className={'m-3'}>
                                <div className={'rounded-lg p-2 h-full bg-gray-700 shadow-xl flex flex-col justify-center'}>
                                    <div className='flex items-center justify-between'>
                                        <h2 className={'p-1 text-2xl flex flex-col items-center font-bold text-white'}>{cards[index % totalCards].title}</h2>
                                        <Image src={images[index % totalImages]} alt="" width={60} className={'rounded-md'} />
                                    </div>
                                    <p className={'flex items-center p-1 text-md text-gray-300'}>
                                        <p className='mr-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                            </svg></p> {cards[index % totalCards].details}
                                    </p>
                                    <p className={'flex items-center p-1 text-md text-gray-300'}>
                                        <div className='mr-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>
                                        </div>
                                        {cards[index % totalCards].salary}
                                    </p>
                                    <p className={'flex items-center p-1 text-md text-gray-300'}>
                                        <div className='mr-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                            </svg>
                                        </div>
                                         {cards[index % totalCards].duration}
                                    </p>
                                    <button className={'rounded-lg bg-blue-600 border-blue-600 shadow-md hover:shadow-lg p-2 text-white m-2'}>See more</button></div>
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