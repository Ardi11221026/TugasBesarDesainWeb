import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BlogRandom from './BlogRandom';

const PantaiManggar = () => {
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
                            <Link to="/pantai-manggar" className="hover:underline font-semibold">Pantai Manggar</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Pantai Manggar</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='img/bpp/pantai manggar.jpg' 
                            alt="Pantai Manggar"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                        Pantai Manggar Segara Sari, yang terletak di Balikpapan, Kalimantan Timur, adalah salah satu destinasi wisata pantai yang paling populer di kawasan ini. Dikenal dengan pasir putihnya yang lembut dan ombak yang tenang, pantai ini menjadi tempat ideal untuk rekreasi keluarga, bersantai, atau menikmati berbagai aktivitas pantai seperti berenang, bermain pasir, hingga voli pantai. Fasilitas pendukung seperti area parkir luas, warung makan, dan tempat istirahat membuat pengalaman berkunjung semakin nyaman. Dengan lokasinya yang mudah diakses dari pusat kota dan suasananya yang ramah untuk semua usia, Pantai Manggar Segara Sari menjadi pilihan favorit untuk menikmati keindahan pesisir Balikpapan.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Fasilitas dan Aktivitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Pantai Manggar menawarkan fasilitas seperti area piknik, tempat bermain, dan warung makan yang menjual aneka hidangan laut. Pengunjung juga dapat menyewa perahu atau melakukan aktivitas seperti berenang, voli pantai, dan berjemur.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                        Pantai Manggar Segara Sari terletak sekitar 30 menit perjalanan dari pusat kota Balikpapan, mudah dijangkau baik dengan kendaraan pribadi maupun transportasi umum. Akses yang baik menuju pantai ini, ditambah dengan area parkir yang luas, menjadikannya sangat nyaman bagi pengunjung. Pantai ini tidak hanya cocok untuk bersantai menikmati pemandangan laut, tetapi juga ideal untuk berbagai aktivitas pantai, seperti berenang, bermain pasir, atau berolahraga. Dengan suasana yang tenang dan fasilitas yang memadai, Pantai Manggar Segara Sari menjadi destinasi favorit bagi wisatawan yang ingin menikmati keindahan alam Balikpapan tanpa harus pergi jauh dari kota.
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

export default PantaiManggar;
