import React from 'react';
import { Link } from 'react-router-dom';

const Destination = () => {
    const destinations = [
        {
            name: 'Balikpapan',
            description: 'Kota industri dengan pesona wisata pantai dan hutan lindung.',
            image: '/img/bpp/logo balikpapan.png',
            link: '/balikpapan',
        },
        {
            name: 'Berau',
            description: 'Surga wisata bahari dengan keindahan Kepulauan Derawan.',
            image: '/img/berau/logo berau.png',
            link: '/berau',
        },
        {
            name: 'Bontang',
            description: 'Kota industri dengan pesona Taman Nasional dan wisata pantai.',
            image: '/img/bontang/logo bontang.png',
            link: '/bontang',
        },
        {
            name: 'Kutai Barat',
            description: 'Destinasi wisata dan budaya Dayak yang autentik.',
            image: '/img/kubar/logo kutai barat.png',
            link: '/kutai-barat',
        },
        {
            name: 'Kutai Kartanegara',
            description: 'Pusat warisan sejarah Kesultanan Kutai Kartanegara.',
            image: '/img/kukar/logo kutai kartanegara.png',
            link: '/kutai-kartanegara',
        },
        {
            name: 'Kutai Timur',
            description: 'Rumah bagi Taman Nasional Kutai dan wisata alam.',
            image: '/img/kutim/logo kutai timur.png',
            link: '/kutai-timur',
        },
        {
            name: 'Mahakam Ulu',
            description: 'Pesona alam pedalaman dan budaya Dayak yang asli.',
            image: '/img/mahulu/logo mahakam ulu.png',
            link: '/mahakam-ulu',
        },
        {
            name: 'Paser',
            description: 'Warisan sejarah Kerajaan Paser dan wisata alamnya.',
            image: '/img/paser/logo paser.png',
            link: '/paser',
        },
        {
            name: 'Penajam Paser Utara',
            description: 'Calon Ibu Kota Nusantara dengan pesona pantainya.',
            image: '/img/ppu/logo ppu.png',
            link: '/penajam-paser-utara',
        },
        {
            name: 'Samarinda',
            description: 'Ibu Kota Kalimantan Timur dengan wisata sungai dan budaya.',
            image: '/img/smd/logo samarinda.png',
            link: '/samarinda',
        },
    ];
  
    const firstFive = destinations.slice(0, 5);
    const nextFive = destinations.slice(5);
  
    return (
        <section id="destinations" className="py-[30px] bg-gradient-to-b from-gray-50 to-gray-100 mt-[-20px]">
            {/* Heading Section */}
            <div className="text-center">
            <h1 className="text-4xl font-bold text-red-600  mt-[40px] mb-[20px] tracking-tight">JELAJAHI RAGAM KALTIM</h1>
            <h2 className="text-xl font-semibold text-gray-800 mb-[20px] max-w-2xl mx-auto">
           <span className="text-gray-700">Tempat Wisata, Tradisi, dan Sejarah Kalimantan Timur dalam Satu Laman</span>
             </h2>
            </div>
  
            {/* First 5 Destinations */}
            <div className="flex flex-wrap justify-center gap-7 mt-7 px-4">
                {firstFive.map((destination, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 shadow-md rounded-xl hover:shadow-xl transform hover:-translate-y-3 transition-all duration-300 w-64 border border-gray-100 overflow-hidden"
                    >
                        <Link to={destination.link} className="block">
                            <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                                <img
                                    src={destination.image}
                                    alt={destination.name}
                                    className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{destination.name}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{destination.description}</p>
                            <div className="mt-4 text-red-600 font-semibold text-sm hover:text-red-700">Pelajari Lebih →</div>
                        </Link>
                    </div>
                ))}
            </div>
  
            {/* Second 5 Destinations */}
            <div className="flex flex-wrap justify-center gap-7 mt-10 px-4 pb-8">
                {nextFive.map((destination, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 shadow-md rounded-xl hover:shadow-xl transform hover:-translate-y-3 transition-all duration-300 w-64 border border-gray-100 overflow-hidden"
                    >
                        <Link to={destination.link} className="block">
                            <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                                <img
                                    src={destination.image}
                                    alt={destination.name}
                                    className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{destination.name}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{destination.description}</p>
                            <div className="mt-4 text-red-600 font-semibold text-sm hover:text-red-700">Pelajari Lebih →</div>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
  };

export default Destination;
