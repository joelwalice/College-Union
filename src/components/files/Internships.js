"use client"
import React, { useState, useEffect } from 'react';
import One from '@/components/investors/1.jpeg';
import Two from '@/components/investors/2.jpeg';
import Three from '@/components/investors/3.jpeg';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    // An array of image URLs
    One, Two, Three

  ]

  const cards = [
    // An array of card objects with different titles, details, and URLs
    {
      title: 'Alok Mittal',
      details: 'Co-founder, IAN & Co-founder and CEO of Indifi',
    },
    {
      title: 'Saurabh Srivastava',
      details: 'Founder, IAN & Past Chairman, NASSCOM',
    }, {
      title: 'Ajai Chowdhry',
      details: 'Board Member, IAN & Co - founder, HCL',
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
            <li key={index} className={'p-5'}>
              <div className={'rounded-lg p-2 h-full bg-gray-700 shadow-xl flex flex-col items-center justify-center'}>
                <Image src={images[index % totalImages]} alt="" height={500} className={'rounded-md'} />
                <h2 className={'mt-2 text-2xl flex flex-col items-center justify-center font-bold text-white'}>{cards[index % totalCards].title}</h2>
                <p className={'mt-2 text-md text-gray-300 p-2'}>
                  {cards[index % totalCards].details}
                </p>
                <button className={'rounded-lg bg-blue-600 border-blue-600 shadow-md hover:shadow-lg p-2 text-white mt-2'}>See more</button></div>
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