import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BlogRandom from './BlogRandom';

const PantaiMarina = () => {
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
                            <Link to="/bontang" className="hover:underline">Bontang</Link>
                            <span className="mx-2">{'>>'}</span>
                            <Link to="/pantai-marina" className="hover:underline font-semibold">Pantai Marina</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Pantai Marina, Tempat Wisata Alam Bontang</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='img/bontang/pantai marina.jpg' 
                            alt="Pantai Marina"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Pantai Marina terletak di Bontang, Kalimantan Timur. Pantai ini merupakan salah satu destinasi wisata yang menarik dengan pasir putih yang bersih, air laut yang jernih, dan suasana yang tenang. Cocok untuk menikmati hari santai, berenang, atau menikmati pemandangan matahari terbenam.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Pengunjung Pantai Marina dapat menikmati berbagai aktivitas seperti berjemur, berenang, atau bermain voli pantai. Fasilitas seperti warung makan dan gazebo juga tersedia di sepanjang pantai.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Pantai Marina mudah diakses dari pusat kota Bontang. Anda dapat menggunakan kendaraan pribadi atau transportasi umum untuk mencapai lokasi ini. Pantai ini menjadi pilihan utama bagi wisatawan yang mencari ketenangan di alam terbuka.
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

export default PantaiMarina;
