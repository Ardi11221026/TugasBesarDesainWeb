import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Blog = () => {
    const blogs = [
        {
            name: 'Balikpapan',
            description: 'Pantai BSB, pantai dekat Mall BSB.',
            image: '/img/pantai bsb.jpg',
            link: '/balikpapan',
        },
        {
            name: 'Berau',
            description: 'Pulau Derawan, pulau yang indah di Berau.',
            image: '/img/pulau derawan.jpg',
            link: '/berau',
        },
        {
            name: 'Bontang',
            description: 'Pantai Marina, pantai yang indah.',
            image: '/img/pantai marina.jpg',
            link: '/bontang',
        },
        {
            name: 'Kutai Barat',
            description: 'Destinasi wisata dan budaya Dayak yang autentik.',
            image: '/img/logo kutai barat.png',
            link: '/kutai-barat',
        },
        {
            name: 'Kutai Kartanegara',
            description: 'Pusat warisan sejarah Kesultanan Kutai Kartanegara.',
            image: '/img/logo kutai kartanegara.png',
            link: '/kutai-kartanegara',
        },
        {
            name: 'Kutai Timur',
            description: 'Rumah bagi Taman Nasional Kutai dan wisata alam.',
            image: '/img/logo kutai timur.png',
            link: '/kutai-timur',
        },
        // Add 24 more entries here
    ];

    return (
        <section id="blogs" className="py-16 bg-gray-100">
            {/* Heading Section */}
            <div className="text-center">
                <h1 className="text-2xl font-bold text-red-600">JELAJAHI RAGAM KALTIM</h1>
                <h2 className="text-2xl font-semibold text-black mt-4">
                    <span className="text-black">Tempat Wisata, Tradisi, dan Sejarah Kalimantan Timur dalam Satu Laman</span>
                </h2>
            </div>

            {/* Blog Cards in Rows of 3 */}
            <div className="grid grid-cols-1 gap-7 mt-10">
                {[...Array(10)].map((_, rowIndex) => (
                    <div key={rowIndex} className="flex flex-wrap justify-center gap-7">
                        {blogs.slice(rowIndex * 3, rowIndex * 3 + 3).map((blog, index) => (
                            <div
                                key={index}
                                className="text-center bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 w-80"
                            >
                                <Link to={blog.link}>
                                <img
    src={blog.image}
    alt={blog.name}
    className="w-80 h-48 object-cover mx-auto mb-4"
/>
                                    <h3 className="text-sm text-left text-gray-500 mb-2">{blog.name}</h3>
                                    <p className="text-black text-left">{blog.description}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};

const Blog1 = () => {
    return (
        <div>
            <Header />
            <Blog />
            <Footer />
        </div>
    );
};

export default Blog1;
