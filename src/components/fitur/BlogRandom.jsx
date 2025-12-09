import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BlogRandom = () => {
    const [randomDestinations, setRandomDestinations] = useState([]);

    useEffect(() => {
        // Simple random featured destinations
        const destinations = [
            { name: 'Danau Labuan Cermin', slug: '/danau-labuan-cermin', city: 'Berau' },
            { name: 'Bukit Bangkirai', slug: '/bukit-bangkirai', city: 'Kutai Kartanegara' },
            { name: 'Pulau Derawan', slug: '/pulau-derawan', city: 'Berau' },
            { name: 'Taman Nasional Kutai', slug: '/taman-nasional-kutai', city: 'Kutai Timur' },
            { name: 'Pantai Ambalat', slug: '/pantai-ambalat', city: 'Kutai Kartanegara' },
            { name: 'Bontang Manggrove Park', slug: '/bontang-manggrove-park', city: 'Bontang' },
        ];

        // Get 3 random destinations
        const shuffled = [...destinations].sort(() => 0.5 - Math.random());
        setRandomDestinations(shuffled.slice(0, 3));
    }, []);

    return (
        <aside className="sidebar flex-1 sticky top-24 h-fit">
            <div className="bg-white p-5 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Destinasi Populer</h3>
                <div className="space-y-4">
                    {randomDestinations.map((dest, idx) => (
                        <div key={idx} className="border-b pb-3 last:border-b-0">
                            <Link 
                                to={dest.slug}
                                className="text-blue-600 hover:text-blue-800 font-semibold text-sm block hover:underline"
                            >
                                {dest.name}
                            </Link>
                            <p className="text-xs text-gray-500">{dest.city}</p>
                        </div>
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default BlogRandom;
