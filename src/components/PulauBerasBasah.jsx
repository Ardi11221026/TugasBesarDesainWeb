import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BlogRandom from './BlogRandom';

const PulauBerasBasah = () => {
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
                            <Link to="/pulau-beras-basah" className="hover:underline font-semibold">Pulau Beras Basah</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Pulau Beras Basah, Wisata Tropis di Bontang</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='img/bontang/pulau beras basah.jpg' 
                            alt="Pulau Beras Basah"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Pulau Beras Basah adalah sebuah pulau kecil yang terletak di sekitar Bontang, Kalimantan Timur. Pulau ini terkenal dengan pasir putihnya yang lembut, air laut yang jernih, dan pemandangan alam yang menakjubkan. Tempat ini cocok bagi pengunjung yang ingin menikmati suasana tropis yang eksotis.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Di Pulau Beras Basah, pengunjung dapat menikmati berbagai aktivitas seperti snorkeling, berenang, atau hanya bersantai di pantai. Pulau ini juga memiliki keanekaragaman hayati bawah laut yang memukau, membuatnya ideal bagi para penyelam dan penggemar alam.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Untuk menuju ke Pulau Beras Basah, pengunjung dapat menyewa perahu dari pelabuhan di Bontang. Perjalanan ke pulau ini memakan waktu sekitar 30 hingga 45 menit, dan begitu sampai, pengunjung akan disambut oleh keindahan alam pulau yang menawan.
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

export default PulauBerasBasah;
