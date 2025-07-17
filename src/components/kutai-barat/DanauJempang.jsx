import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../fitur/Header';
import Footer from '../fitur/Footer';
import BlogRandom from '../fitur/BlogRandom';

const DanauJempang = () => {
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
                            <Link to="/kutai-barat" className="hover:underline">Kutai Barat</Link>
                            <span className="mx-2">{'>>'}</span>
                            <Link to="/danau-jempang" className="hover:underline font-semibold">Danau Jempang</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Danau Jempang, Keindahan Alam Kutai Barat</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='img/kubar/danau jempang.jpg' 
                            alt="Danau Jempang"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Danau Jempang adalah salah satu danau yang terletak di Kutai Barat, Kalimantan Timur. Danau ini memiliki panorama yang sangat memukau, dengan air yang tenang dan pemandangan alam yang sangat asri.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Pengunjung bisa menikmati berbagai aktivitas seperti berperahu, memancing, atau sekadar menikmati suasana yang tenang di sekitar danau. Tersedia beberapa fasilitas wisata untuk menunjang kenyamanan pengunjung.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Akses menuju Danau Jempang cukup mudah, dengan menggunakan kendaraan pribadi. Jalan menuju danau sudah cukup baik dan bisa dijangkau dalam waktu relatif singkat dari kota utama di Kutai Barat.
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

export default DanauJempang;
