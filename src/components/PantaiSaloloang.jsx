import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BlogRandom from './BlogRandom';

const PantaiSaloloang = () => {
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
                            <Link to="/penajam-paser-utara" className="hover:underline">Penajam Paser Utara</Link>
                            <span className="mx-2">{'>>'}</span>
                            <Link to="/pantai-saloloang" className="hover:underline font-semibold">Pantai Saloloang</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Pantai Saloloang, Destinasi Alam yang Memikat</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='img/ppu/pantai saloloang.jpg' 
                            alt="Pantai Saloloang"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Pantai Saloloang terletak di kawasan Penajam Paser Utara, Kalimantan Timur. Pantai ini dikenal dengan keindahan alamnya yang asri, serta suasana yang tenang dan damai. Pengunjung dapat menikmati pemandangan laut yang luas, serta berfoto dengan latar belakang pantai yang menakjubkan.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Pengunjung di Pantai Saloloang dapat menikmati berbagai aktivitas seperti bermain air, berjemur di bawah matahari, atau sekadar menikmati angin laut yang segar. Terdapat beberapa kios yang menjual makanan dan minuman, sehingga pengunjung dapat menikmati camilan sambil menikmati pemandangan.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Pantai Saloloang mudah diakses dari kota Penajam. Pengunjung dapat mencapai lokasi ini dengan kendaraan pribadi maupun transportasi umum. Pantai ini cocok untuk dikunjungi saat mencari ketenangan atau liburan keluarga.
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

export default PantaiSaloloang;
