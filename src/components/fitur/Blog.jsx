import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const BlogSection = () => {
    const blogs = [
        {
            name: 'Balikpapan',
            description: 'Pantai BSB',
            image: '/img/bpp/pantai bsb.jpg',
            link: '/pantai-bsb',
        },
        {
            name: 'Berau',
            description: 'Pulau Derawan',
            image: '/img/berau/pulau derawan.jpg',
            link: '/pulau-derawan',
        },
        {
            name: 'Bontang',
            description: 'Pantai Marina',
            image: '/img/bontang/pantai marina.jpg',
            link: '/pantai-marina',
        },
        {
            name: 'Kutai Barat',
            description: 'Air Terjun Jantur Inar',
            image: '/img/kubar/air terjun jantur inar.jpg',
            link: '/air-terjun-jantur-inar',
        },
        {
            name: 'Kutai Kartanegara',
            description: 'Museum Mulawarman',
            image: '/img/kukar/museum mulawarman.jpg',
            link: '/museum-mulawarman',
        },
        {
            name: 'Kutai Timur',
            description: 'Taman Nasional Kutai',
            image: '/img/kutim/taman nasional kutai.jpg',
            link: '/taman-nasional-kutai',
        },
        {
            name: 'Mahakam Ulu',
            description: 'Batu Dinding Long Melaham',
            image: '/img/mahulu/batu dinding long melaham.jpg',
            link: '/batu-dinding-long-melaham',
        },
        {
            name: 'Paser',
            description: 'Pantai Pasir Mayang',
            image: '/img/paser/pantai pasir mayang.jpg',
            link: '/pantai-pasir-mayang',
        },
        {
            name: 'Penajam Paser Utara',
            description: 'Taman Alun-alun',
            image: '/img/ppu/taman alun-alun.jpg',
            link: '/taman-alun-alun',
        },
        {
            name: 'Samarinda',
            description: 'Masjid Islamic Center',
            image: '/img/smd/masjid islamic center.jpg',
            link: '/masjid-islamic-center',
        },
    ];

    return (
        <section id="blogs" className="py-16 bg-gradient-to-b from-gray-50 to-gray-100 mb-[-200px]">
            {/* Heading Section */}
            <div className="text-center">
                <h1 className="text-4xl font-bold text-red-600 mb-[20px] tracking-tight">RAGAM KALTIM'S BLOG</h1>
                <h2 className="text-xl font-semibold text-gray-800 mb-[20px] max-w-3xl mx-auto">
                    <span className="text-gray-700">Tempat Wisata yang terkenal di setiap Kota dan Kabupaten di Kalimantan Timur</span>
                </h2>
            </div>

            {/* Blog Cards in Rows of 3 */}
            <div className="grid grid-cols-1 gap-7 mt-10 px-4">
                {[...Array(10)].map((_, rowIndex) => (
                    <div key={rowIndex} className="flex flex-wrap justify-center gap-7">
                        {blogs.slice(rowIndex * 3, rowIndex * 3 + 3).map((blog, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 shadow-md rounded-xl hover:shadow-xl transform hover:-translate-y-3 transition-all duration-300 w-80 border border-gray-100 overflow-hidden"
                            >
                                <Link to={blog.link} className="block">
                                    <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                                        <img
                                            src={blog.image}
                                            alt={blog.name}
                                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <h3 className="text-sm text-gray-600 mb-2 font-medium">{blog.name}</h3>
                                    <p className="text-gray-900 font-semibold text-base">{blog.description}</p>
                                    <div className="mt-4 text-red-600 font-semibold text-sm hover:text-red-700">Baca Selengkapnya →</div>
                                </Link>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};

const Blog = () => {
    return (
        <div>
            <Header />
            <BlogSection />
            <Footer />
        </div>
    );
};

export default Blog;
