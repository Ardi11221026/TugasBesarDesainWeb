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
            image: '/img/paser/logo paser.jpeg',
            link: '/paser',
        },
        {
            name: 'Penajam Paser Utara',
            description: 'Calon Ibu Kota Nusantara dengan pesona pantainya.',
            image: '/img/ppu/logo ppu.jpeg',
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
        <section id="destinations" className="py-16 bg-gray-100">
            {/* Heading Section */}
            <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600">JELAJAHI RAGAM KALTIM</h1>
            <h2 className="text-2xl font-semibold text-black mt-4">
           <span className="text-black">Tempat Wisata, Tradisi, dan Sejarah Kalimantan Timur dalam Satu Laman</span>
             </h2>
            </div>
  
            {/* First 5 Destinations */}
            <div className="flex flex-wrap justify-center gap-7 mt-10">
                {firstFive.map((destination, index) => (
                    <div
                        key={index}
                        className="text-center bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 w-60"
                    >
                        <Link to={destination.link}>
                            <img
                                src={destination.image}
                                alt={destination.name}
                                className="w-full h-36 object-contain rounded-lg mb-4"
                            />
                            <h3 className="text-lg font-semibold text-black mb-2">{destination.name}</h3>
                            <p className="text-gray-600">{destination.description}</p>
                        </Link>
                    </div>
                ))}
            </div>
  
            {/* Second 5 Destinations */}
            <div className="flex flex-wrap justify-center gap-7 mt-7">
                {nextFive.map((destination, index) => (
                    <div
                        key={index}
                        className="text-center bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 w-60"
                    >
                        <Link to={destination.link}>
                            <img
                                src={destination.image}
                                alt={destination.name}
                                className="w-full h-36 object-contain rounded-lg mb-4"
                            />
                            <h3 className="text-lg font-semibold text-black mb-2">{destination.name}</h3>
                            <p className="text-gray-600">{destination.description}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
  };

export default Destination;
