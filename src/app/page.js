import Cards from "../components/cards";
import Image from 'next/image';
import iit from '../components/iit.png';
import nit from '../components/nit.png';
import sastra from '../components/sastra.jpg';
import iitb from '../components/iitb.jpg';

export default function Home() {
  return (
    <div className="flex flex-col p-4 items-center min-w-screen">
      <div className="flex flex-col items-center items-center sm:gap-1 md:gap-2">
        {/* Sponsors */}
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-white">Sponsors</h1>
          <Cards />
        </div>
        {/* Colleges */}
        <div className="p-4 flex flex-col items-center w-screen">
          <h1 className="text-3xl md:text-4xl font-semibold text-white">Colleges</h1>
          <div className="grid flex grid-cols-1 sm:grid-cols-4 items-center justify-center gap-5 m-4">
            <div className="p-4 shadow-lg flex flex-col justify-center items-center bg-gray-800 rounded-lg">
              <Image src={iit} width="100" height="100" />
              <h1 className="text-2xl md:text-3xl p-4 font-semibold text-white">IIT Madras</h1>
            </div>
            <div className="p-4 shadow-lg flex flex-col justify-center items-center bg-gray-800 rounded-lg">
              <Image src={sastra} width="100" height="100" className="rounded-full" />
              <h1 className="text-2xl md:text-3xl p-4 font-semibold text-white">SASTRA</h1>
            </div>
            <div className="p-4 shadow-lg flex flex-col justify-center items-center bg-gray-800 rounded-lg">
              <Image src={nit} width="100" height="100" className="rounded-full" />
              <h1 className="text-2xl md:text-3xl p-4 font-semibold text-white">NIT Trichy</h1>
            </div>
            <div className="p-4 shadow-lg flex flex-col justify-center items-center bg-gray-800 rounded-lg">
              <Image src={iitb} width="100" height="100" className="rounded-full" />
              <h1 className="text-2xl md:text-3xl p-4 font-semibold text-white">IIT Bombay</h1>
            </div>
          </div>
        </div>
        {/* Sponsors */}
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-white">Adverstiments</h1>
          <Cards />
        </div>
        {/* Startups */}
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-white">Top Startups</h1>
          <Cards />
        </div>
        {/* Domains*/}
        <div className="p-4 flex flex-col items-center w-screen">
          <h1 className="m-4 text-3xl md:text-4xl font-semibold text-white">Innovative Domains</h1>
          <div className="flex items-center justify-between gap-5">
            <div className="p-4 shadow-lg flex flex-col justify-center items-center bg-gray-800 rounded-lg">
              <Image src={iit} width="100" height="100" className="m-2"/>
              <h1 className="text-2xl md:text-3xl font-semibold text-white">IoT</h1>
            </div>
            <div className="p-4 shadow-lg flex flex-col justify-center items-center bg-gray-800 rounded-lg">
              <Image src={sastra} width="100" height="100" className="rounded-full m-2" />
              <h1 className="text-2xl md:text-3xl font-semibold text-white">AI</h1>
            </div>
            <div className="p-4 shadow-lg flex flex-col justify-center items-center bg-gray-800 rounded-lg">
              <Image src={nit} width="100" height="100" className="rounded-full m-2" />
              <h1 className="text-2xl md:text-3xl font-semibold text-white">AR/VR</h1>
            </div>
            <div className="p-4 shadow-lg flex flex-col justify-center items-center bg-gray-800 rounded-lg">
              <Image src={iitb} width="100" height="100" className="rounded-full m-2" />
              <h1 className="text-2xl md:text-3xl font-semibold text-white">Space Tech</h1>
            </div>
            <div className="p-4 shadow-lg flex flex-col justify-center items-center bg-gray-800 rounded-lg">
              <Image src={iitb} width="100" height="100" className="rounded-full m-2" />
              <h1 className="text-2xl md:text-3xl font-semibold text-white">Space Tech</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
