import React from 'react';
import { Link } from 'react-router-dom';

// Define a list of blog items for BlogRandom component
const blogs = [
    { name: 'Balikpapan', description: 'Pantai BSB, pantai dekat Mall BSB.', image: '/img/bpp/pantai bsb.jpg', link: '/pantai-bsb' },
    { name: 'Berau', description: 'Pulau Derawan, pulau yang indah di Berau.', image: '/img/berau/pulau derawan.jpg', link: '/' },
    { name: 'Bontang', description: 'Pantai Marina, pantai yang indah.', image: '/img/bontang/pantai marina.jpg', link: '/' },
    { name: 'Kutai Barat', description: 'Air terjun yang deras.', image: '/img/kubar/air terjun jantur inar.jpg', link: '/' },
    { name: 'Kutai Kartanegara', description: 'Pusat warisan sejarah Kesultanan Kutai Kartanegara.', image: '/img/kukar/museum mulawarman.jpg', link: '/' },
    { name: 'Kutai Timur', description: 'Rumah bagi Taman Nasional Kutai dan wisata alam.', image: '/img/kutim/taman nasional kutai.jpg', link: '/' },
    { name: 'Mahakam Ulu', description: 'Batu yang sangat besar dan tinggi.', image: '/img/mahulu/batu dinding.jpg', link: '/' },
    { name: 'Paser', description: 'Pantai Pasir yang putih.', image: '/img/paser/pantai pasir mayang.jpg', link: '/' },
    { name: 'Penajam Paser Utara', description: 'Alun-alun yang ramai ketika malam minggu.', image: '/img/ppu/taman alun-alun.jpg', link: '/' },
    { name: 'Samarinda', description: 'Masjid yang megah.', image: '/img/smd/islamic center.jpg', link: '/' },
    // Add more items as needed
];

// Component to display 5 random blog items in a vertical layout
const BlogRandom = () => {
    // Get 5 random blog items
    const randomBlogs = blogs.sort(() => 0.5 - Math.random()).slice(0, 5);

    return (
        <aside className="bg-white p-4 rounded-lg shadow-md w-[350px]">
            <h2 className="text-xl font-semibold mb-4 text-center">Explore More</h2>
            <div className="space-y-4">
                {randomBlogs.map((blog, index) => (
                    <Link to={blog.link} key={index} className="block">
                        <div className="text-center">
                            <img
                                src={blog.image}
                                alt={blog.name}
                                className="w-full h-48 object-cover rounded-lg mb-2"
                            />
                            <h3 className="text-lg font-bold text-gray-700">{blog.name}</h3>
                            <p className="text-gray-600">{blog.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </aside>
    );
};

export default BlogRandom;
