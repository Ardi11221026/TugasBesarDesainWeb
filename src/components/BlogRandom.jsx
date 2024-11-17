// BlogRandom.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// Define a list of blog items from Blog1 component
const blogs = [
    { name: 'Balikpapan', description: 'Pantai BSB', image: '/img/bpp/pantai bsb.jpg', link: '/pantai-bsb' },
    { name: 'Berau', description: 'Pulau Derawan', image: '/img/berau/pulau derawan.jpg', link: '/pulau-derawan' },
    { name: 'Bontang', description: 'Pantai Marina', image: '/img/bontang/pantai marina.jpg', link: '/pantai-marina' },
    { name: 'Kutai Barat', description: 'Air Terjun Jantur Inar', image: '/img/kubar/air terjun jantur inar.jpg', link: '/air-terjun-jantur-inar' },
    { name: 'Kutai Kartanegara', description: 'Museum Mulawarman', image: '/img/kukar/museum mulawarman.jpg', link: '/museum-mulawarman' },
    { name: 'Kutai Timur', description: 'Taman Nasional Kutai', image: '/img/kutim/taman nasional kutai.jpg', link: '/taman-nasional-kutai' },
    { name: 'Mahakam Ulu', description: 'Batu Dinding', image: '/img/mahulu/batu dinding long melaham.jpg', link: '/batu-dinding-long-melaham' },
    { name: 'Paser', description: 'Pantai Pasir Mayang', image: '/img/paser/pantai pasir mayang.jpg', link: '/pantai-pasir-mayang' },
    { name: 'Penajam Paser Utara', description: 'Taman Alun-alun', image: '/img/ppu/taman alun-alun.jpg', link: '/taman-alun-laun' },
    { name: 'Samarinda', description: 'Masjid Islamic Center', image: '/img/smd/masjid islamic center.jpg', link: '/masjid-islamic-center' },
    // Add more items if needed
];

// Component to display 5 random blog items
const BlogRandom = () => {
    // Select 5 random items from the blogs array
    const randomBlogs = blogs.sort(() => 0.5 - Math.random()).slice(0, 5);

    return (
        <aside className="bg-white p-4 rounded-lg shadow-md w-full max-w-[350px]">
            <h2 className="text-xl font-semibold mb-4 text-center">Explore More</h2>
            <div className="space-y-4">
                {randomBlogs.map((blog, index) => (
                    <Link to={blog.link} key={index} className="block">
                        <div className="text-left">
                            <img
                                src={blog.image}
                                alt={blog.name}
                                className="w-full h-48 object-cover mb-2"
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
