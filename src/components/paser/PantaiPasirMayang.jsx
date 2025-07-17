import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../fitur/Header';
import Footer from '../fitur/Footer';
import BlogRandom from '../fitur/BlogRandom';

const PantaiPasirMayang = () => {
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
                            <Link to="/paser" className="hover:underline">Paser</Link>
                            <span className="mx-2">{'>>'}</span>
                            <Link to="/pantai-pasir-mayang" className="hover:underline font-semibold">Pantai Pasir Mayang</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Pantai Pasir Mayang, Keindahan Pantai di Paser</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='img/paser/pantai pasir mayang.jpg' 
                            alt="Pantai Pasir Mayang"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Pantai Pasir Mayang terletak di Kabupaten Paser, Kalimantan Timur. Pantai ini menawarkan hamparan pasir putih yang bersih dan pemandangan laut biru yang memukau. Tempat ini sangat cocok untuk bersantai, menikmati keindahan alam, serta berlibur bersama keluarga atau teman.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Di Pantai Pasir Mayang, pengunjung dapat menikmati aktivitas seperti berenang, bermain pasir, atau hanya berjalan-jalan di sepanjang pantai. Fasilitas yang tersedia meliputi area parkir, warung makanan, dan tempat berteduh untuk pengunjung.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Pantai Pasir Mayang dapat dicapai dengan kendaraan pribadi dari pusat kota Paser. Akses jalan menuju pantai cukup mudah, menjadikannya pilihan populer bagi wisatawan lokal yang ingin menikmati keindahan pantai di Kalimantan Timur.
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

export default PantaiPasirMayang;
