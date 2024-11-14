import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Blog = () => {
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
            description: 'Batu Dinding',
            image: '/img/mahulu/batu dinding.jpg',
            link: '/batu-dinding',
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
        // Add 24 more entries here
    ];

    return (
        <section id="blogs" className="py-16 bg-gray-100">
            {/* Heading Section */}
            <div className="text-center">
                <h1 className="text-2xl font-bold text-red-600">RAGAM KALTIM'S BLOG</h1>
                <h2 className="text-2xl font-semibold text-black mt-4">
                    <span className="text-black">Tempat Wisata yang terkenal di setiap Kota dan Kabupaten di Kalimantan Timur</span>
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
