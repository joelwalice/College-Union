import React, { useState, useEffect } from 'react';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import SpaceX from '@/components/images/spacex.png';
import Meta from '@/components/images/meta.png';
import Netflix from '@/components/images/netflix.png';
import Amazon from '@/components/images/amazon.jpg';
import Google from '@/components/images/google.jpg';
import Apple from '@/components/images/apple.jpg';
import Image from 'next/image';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    {
      title: 'CRED',
      images: SpaceX,
    },
    {
      title: 'Meesho',
      images: Meta,
    }, 
    {
      title: 'PharmEasy',
      images: Apple,
    }, 
    {
      title: 'Razorpay',
      images: Amazon,
    },
    {
      title: 'Shopsy',
      images: Netflix,
    }
    ,{
        title: 'Digit Insurance',
        images: Google,
      }
  ];
  const transitionDuration = 500;

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
        <div className={'hidden md:flex w-screen items-center justify-center gap-4'}>
          <ul className={`flex transition-container transform -translate-x-${currentIndex * 25}% transition-all duration-${transitionDuration / 1000}s`}>
            {[currentIndex, currentIndex + 1, currentIndex + 2, currentIndex + 3].map((index) => (
              <li key={index} className={'p-5'}>
                <div className={'rounded-lg h-full bg-gray-700 shadow-xl p-5'}>
                <Image src={cards[index % totalCards].images} alt="" height={500} className={'rounded-md'} />
                  <h1 className={'mt-2 flex items-center justify-center text-xl font-bold text-white'}>{cards[index % totalCards].title}</h1>
                </div>
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
