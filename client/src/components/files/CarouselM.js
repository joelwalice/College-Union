import React, { useState, useEffect } from 'react';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Link from 'next/link';
import iitImage from '../images/iit.png';
import iitKanpur from '../images/iitk.jpg';
import sastraImage from '../images/sastra.png';
import nitImage from '../images/nit.png';
import iitbImage from '../images/iitb.jpg';
import { useRouter } from 'next/navigation';
import Image from 'next/image';


const Carousel = () => {
  
  const cards = [
    {
      title: 'IIT Madras',
      images : iitImage,
    },
    {
      title: 'SASTRA',
      images : sastraImage,
    }, 
    {
      title: 'NIT Trichy',
      images : nitImage,
    }, 
    {
      title: 'IIT Bombay',
      images : iitbImage,
    },
    {
      title : 'IIT Kanpur',
      images: iitKanpur,
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();
  const totalCards = cards.length;

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + cards.length) % cards.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % cards.length;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-scroll every 5 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div>
      <div className="min-w-screen m-auto py-16 px-4 relative group">
        {/* Carousel content */}
        <Image src={cards[currentIndex%totalCards].images} width="100" height="100"/>
          {/* Overlay */}
          <div className='overlay absolute w-full h-full top-0 left-0 rounded-xl'></div>
          {/* Details */}
          <div className="details absolute bottom-0 w-full h-full grid place-items-center flex items-center justify-center">
            <div className="p-5 border-0 rounded-lg">
              <h1 className="text-[22px] absolute bottom-5 left-5 right-6 font-bold text-white">{cards[currentIndex].title}</h1>
            </div>
          </div>
          {/* Navigation arrows */}
          <div className={`hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer`}>
            <BsChevronLeft onClick={prevSlide} size={20} />
          </div>
          <div className={`hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer`}>
            <BsChevronRight onClick={nextSlide} size={20} />
          </div>
        </div>
        {/* Dot indicators */}
        <div className="flex justify-center items-center mt-4">
          {cards.map((card, cardIndex) => (
            <div
              key={cardIndex}
              onMouseEnter={() => {
                goToSlide(cardIndex);
              }}
              className={`text-2xl cursor-pointer ${
                currentIndex === cardIndex ? 'text-blue-500' : 'text-gray-500'
              }`}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
  );
};

export default Carousel;
