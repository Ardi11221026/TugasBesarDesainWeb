import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BlogRandom from './BlogRandom';

const PantaiTelukLombok = () => {
    return (
        <div>
            <Header />
            <div className="bg-gray-100">
                <div className="content-container flex justify-between py-8 max-w-[1300px] mx-auto gap-7">
                    {/* Main Content */}
                    <div className="main-content flex-[3] bg-white p-5 rounded-lg shadow-lg">
                        {/* Breadcrumb Navigation */}
                        <nav className="text-sm mb-5 text-gray-600">
                            <Link to="/" className="hover:underline">Home</Link> 
                            <span className="mx-2">{'>>'}</span>
                            <Link to="/kutai-timur" className="hover:underline">Kutai Timur</Link>
                            <span className="mx-2">{'>>'}</span>
                            <Link to="/pantai-teluk-lombok" className="hover:underline font-semibold">Pantai Teluk Lombok</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Pantai Teluk Lombok, Surga Tersembunyi di Kutai Timur</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='img/kutim/pantai teluk lombok.jpg' 
                            alt="Pantai Teluk Lombok"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Pantai Teluk Lombok adalah salah satu destinasi wisata bahari terbaik di Kutai Timur. Dengan pasir putih yang lembut dan air laut yang jernih, pantai ini menawarkan pengalaman liburan yang santai sekaligus menyenangkan.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Di Pantai Teluk Lombok, pengunjung dapat berenang, snorkeling, atau hanya bersantai di tepi pantai. Area ini juga memiliki fasilitas seperti warung makan, tempat duduk, dan toilet umum untuk kenyamanan wisatawan.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Terletak di Desa Sekerat, Kecamatan Bengalon, pantai ini dapat dijangkau dengan perjalanan darat selama beberapa jam dari kota Sangatta.
                        </p>
                    </div>

                    {/* BlogRandom Section */}
                    <BlogRandom />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PantaiTelukLombok;
