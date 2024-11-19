import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BlogRandom from './BlogRandom';

const PantaiBSB = () => {
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
                            <Link to="/balikpapan" className="hover:underline">Balikpapan</Link>
                            <span className="mx-2">{'>>'}</span>
                            <Link to="/pantai-bsb" className="hover:underline font-semibold">Pantai BSB</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Pantai BSB, Destinasi Wisata Balikpapan</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='img/bpp/pantai bsb.jpg' 
                            alt="Pantai BSB"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Pantai BSB terletak di Balikpapan, Kalimantan Timur. Pantai ini merupakan salah satu destinasi wisata yang populer di kalangan wisatawan lokal dan mancanegara. Pantai BSB menawarkan pemandangan laut yang indah, cocok untuk bersantai, menikmati sunset, atau berolahraga di tepi pantai.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Di Pantai BSB, pengunjung dapat menikmati berbagai fasilitas seperti area bermain anak-anak, gazebo, jogging track, dan tempat makan di sekitar pantai. Tidak jarang pantai ini juga menjadi tempat untuk acara atau perayaan khusus.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Pantai BSB dapat diakses dengan mudah menggunakan kendaraan pribadi atau transportasi umum. Lokasinya yang strategis di Balikpapan membuat pantai ini menjadi salah satu tujuan favorit bagi warga kota dan wisatawan.
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

export default PantaiBSB;
