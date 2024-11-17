import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BlogRandom from './BlogRandom';

const BontangKuala = () => {
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
                            <Link to="/bontang-kuala" className="hover:underline font-semibold">Bontang Kuala</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Bontang Kuala, Keindahan Alam Bontang</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='img/bontang/bontang kuala.jpg' 
                            alt="Bontang Kuala"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Bontang Kuala adalah sebuah desa yang terletak di kawasan pesisir Bontang, Kalimantan Timur. Kawasan ini menawarkan pemandangan laut yang indah serta kekayaan alam yang memukau. Tempat ini sangat cocok bagi para wisatawan yang ingin menikmati suasana yang tenang sambil menikmati panorama alam yang luar biasa.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Di Bontang Kuala, pengunjung dapat menikmati aktivitas seperti berkeliling dengan perahu, memancing, atau hanya berjalan-jalan di sepanjang pantai. Terdapat juga beberapa warung makan yang menawarkan hidangan lokal yang lezat.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Lokasi Bontang Kuala dapat diakses melalui jalan raya dari pusat kota Bontang. Anda dapat menggunakan kendaraan pribadi atau kendaraan umum yang tersedia di kota untuk menuju ke tempat wisata ini.
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

export default BontangKuala;
