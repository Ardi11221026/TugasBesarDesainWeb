import React from 'react';
import { Link } from 'react-router-dom';

const Destination = () => {
    const destinations = [
        {
            name: 'Balikpapan',
            description: 'Kota industri dengan pesona wisata pantai dan hutan lindung.',
            image: 'img/bpp/logo balikpapan.png',
            link: '/balikpapan',
        },
        {
            name: 'Berau',
            description: 'Surga wisata bahari dengan keindahan Kepulauan Derawan.',
            image: 'img/berau/logo berau.png',
            link: '/berau',
        },
        {
            name: 'Bontang',
            description: 'Kota industri dengan pesona Taman Nasional dan wisata pantai.',
            image: 'img/bontang/logo bontang.png',
            link: '/bontang',
        },
        {
            name: 'Kutai Barat',
            description: 'Destinasi wisata dan budaya Dayak yang autentik.',
            image: 'img/kubar/logo kutai barat.png',
            link: '/kutai-barat',
        },
        {
            name: 'Kutai Kartanegara',
            description: 'Pusat warisan sejarah Kesultanan Kutai Kartanegara.',
            image: 'img/kukar/logo kutai kartanegara.png',
            link: '/kutai-kartanegara',
        },
        {
            name: 'Kutai Timur',
            description: 'Rumah bagi Taman Nasional Kutai dan wisata alam.',
            image: 'img/kutim/logo kutai timur.png',
            link: '/kutai-timur',
        },
        {
            name: 'Mahakam Ulu',
            description: 'Pesona alam pedalaman dan budaya Dayak yang asli.',
            image: 'img/mahulu/logo mahakam ulu.png',
            link: '/mahakam-ulu',
        },
        {
            name: 'Paser',
            description: 'Warisan sejarah Kerajaan Paser dan wisata alamnya.',
            image: 'img/paser/logo paser.png',
            link: '/paser',
        },
        {
            name: 'Penajam Paser Utara',
            description: 'Calon Ibu Kota Nusantara dengan pesona pantainya.',
            image: 'img/ppu/logo ppu.png',
            link: '/penajam-paser-utara',
        },
        {
            name: 'Samarinda',
            description: 'Ibu Kota Kalimantan Timur dengan wisata sungai dan budaya.',
            image: 'img/smd/logo samarinda.png',
            link: '/samarinda',
        },
    ];
  
    const firstFive = destinations.slice(0, 5);
    const nextFive = destinations.slice(5);
  
    return (
        <section id="destinations" className="py-[30px] bg-[#2c5845] mt-[-20px]">
            {/* Heading Section */}
            <div className="text-center">
            <h1 className="text-4xl font-bold text-orange-400 mt-[40px] mb-[20px] tracking-tight">JELAJAHI RAGAM KALTIM</h1>
            <h2 className="text-xl font-semibold text-white mb-[20px] max-w-2xl mx-auto">
           <span className="text-white">Tempat Wisata, Tradisi, dan Sejarah Kalimantan Timur dalam Satu Laman</span>
             </h2>
            </div>
  
            {/* First 5 Destinations */}
            <div className="flex flex-wrap justify-between gap-5 mt-7 px-5">
                {firstFive.map((destination, index) => (
                    <Link to={destination.link} key={index} className="block flex-1 min-w-[280px] max-w-sm">
                        <div
                            className="bg-[#102c1e] p-6 shadow-md rounded-xl hover:shadow-xl transform hover:-translate-y-3 transition-all duration-300 border border-gray-700 overflow-hidden h-full cursor-pointer"
                        >
                            <div className="w-full h-48 bg-[#1a3a2a] rounded-lg mb-4 overflow-hidden flex items-center justify-center pointer-events-none">
                                <img
                                    src={destination.image}
                                    alt={destination.name}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2 pointer-events-none">{destination.name}</h3>
                            <p className="text-white text-sm leading-relaxed pointer-events-none">{destination.description}</p>
                            <div className="mt-4 text-orange-400 font-semibold text-sm pointer-events-none">Pelajari Lebih →</div>
                        </div>
                    </Link>
                ))}
            </div>
  
            {/* Second 5 Destinations */}
            <div className="flex flex-wrap justify-between gap-5 mt-8 px-5 pb-3">
                {nextFive.map((destination, index) => (
                    <Link to={destination.link} key={index} className="block flex-1 min-w-[280px] max-w-sm">
                        <div
                            className="bg-[#102c1e] p-6 shadow-md rounded-xl hover:shadow-xl transform hover:-translate-y-3 transition-all duration-300 border border-gray-700 overflow-hidden h-full cursor-pointer"
                        >
                            <div className="w-full h-48 bg-[#1a3a2a] rounded-lg mb-4 overflow-hidden flex items-center justify-center pointer-events-none">
                                <img
                                    src={destination.image}
                                    alt={destination.name}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2 pointer-events-none">{destination.name}</h3>
                            <p className="text-white text-sm leading-relaxed pointer-events-none">{destination.description}</p>
                            <div className="mt-4 text-orange-400 font-semibold text-sm pointer-events-none">Pelajari Lebih →</div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
  };

export default Destination;
