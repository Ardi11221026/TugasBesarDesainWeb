import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../fitur/Header';
import Footer from '../fitur/Footer';
import BlogRandom from '../fitur/BlogRandom';

const PantaiAmbalat = () => {
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
                            <Link to="/kutai-kartanegara" className="hover:underline">Kutai Kartanegara</Link>
                            <span className="mx-2">{'>>'}</span>
                            <Link to="/pantai-ambalat" className="hover:underline font-semibold">Pantai Ambalat</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Pantai Ambalat, Surga Tersembunyi di Kutai Kartanegara</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='/img/kukar/pantai ambalat.jpeg' 
                            alt="Pantai Ambalat"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Pantai Ambalat adalah salah satu pantai tersembunyi di Kutai Kartanegara yang menawarkan keindahan alam luar biasa. Terletak di Kelurahan Amborawang Laut, Kecamatan Samboja, pantai ini memiliki pasir putih bersih, ombak yang tenang, serta pemandangan matahari terbenam yang memukau.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Pantai Ambalat cocok untuk berbagai aktivitas seperti berenang, snorkeling, memancing, atau sekadar bersantai menikmati keindahan alam. Tersedia beberapa warung kecil yang menjual makanan ringan dan minuman. Area parkir cukup luas, meski fasilitas lainnya masih dalam pengembangan.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Pantai Ambalat berjarak sekitar 40 kilometer dari kota Balikpapan. Perjalanan ke pantai ini memerlukan waktu sekitar satu jam dengan kendaraan pribadi. Meskipun jalannya sebagian belum beraspal, keindahan pantai ini sebanding dengan usaha yang diperlukan untuk mencapainya.
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

export default PantaiAmbalat;
