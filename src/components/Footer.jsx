import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-white py-10 shadow-inner">
            <div className="container mx-auto flex flex-wrap justify-between">
                {/* Logo and Info Section */}
                <div className="w-full md:w-1/4 mb-8 md:mb-0 ">
                    <img
                        src="/img/Kalimantan Timur.png"
                        alt="Discovery East Borneo"
                        className="h-12 mb-4"
                    />
                    <h4 className="text-2xl font-bold mb-4">
                        Ragam <br /> Kaltim
                    </h4>
                    <div className="text-gray-600">
                        <p>
                            Jl. Soekarno Hatta No.KM 15, Karang Joang, Kec. Balikpapan Utara, Kota
                            Balikpapan, Kalimantan Timur 76127, Indonesia.
                        </p>
                        <p className="mt-2">
                            <strong>Phone:</strong> +623614754416
                        </p>
                        <p className="mt-2">
                            <strong>Email:</strong> discoveryeastborneo.id@gmail.com <br />
                            info@discoveryeastborneo.com
                        </p>
                    </div>
                </div>

                {/* Top Destinations Section */}
                <div className="w-full md:w-1/4 mb-8 md:mb-0 pl-12">
                    <h4 className="text-xl font-semibold mb-4">Destinasi</h4>
                    <ul className="text-gray-600">
                        {[
                            'Balikpapan',
                            'Berau',
                            'Bontang',
                            'Kutai Barat',
                            'Kutai Kartanegara',
                            'Kutai Timur',
                            'Mahakam Ulu',
                            'Paser',
                            'Penajam Paser Utara',
                            'Samarinda',
                        ].map((dest, index) => (
                            <li key={index} className="mb-2">
                                <Link to={`/${dest.toLowerCase().replace(' ', '-')}`}>{dest}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* About Section */}
                <div className="w-full md:w-1/4 pl-12">
                    <h4 className="text-xl font-semibold mb-4">About</h4>
                    <ul className="text-gray-600">
                        {[
                            'Discovery East Borneo',
                            'Terms & Conditions',
                            'How to Order & Payment',
                            'Testimonial',
                            'Privacy Policy',
                            'Work For Us',
                            'Write For Us',
                            'Term of Site',
                            'Term of Rent',
                            'Sitemap',
                        ].map((aboutItem, index) => (
                            <li key={index} className="mb-2">
                                {aboutItem}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="text-center text-gray-500 mt-8">
                <p>&copy; 2024 Ragam Kaltim</p>
            </div>
        </footer>
    );
};

export default Footer;
