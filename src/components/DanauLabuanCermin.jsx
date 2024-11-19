import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BlogRandom from './BlogRandom';

const DanauLabuanCermin = () => {
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
                            <Link to="/berau" className="hover:underline">Berau</Link>
                            <span className="mx-2">{'>>'}</span>
                            <Link to="/danau-labuan-cermin" className="hover:underline font-semibold">Danau Labuan Cermin</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Danau Labuan Cermin, Keindahan Air Jernih di Berau</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='img/berau/danau labuan cermin.jpg' 
                            alt="Danau Labuan Cermin"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Danau Labuan Cermin adalah sebuah danau alami yang terletak di Kabupaten Berau, Kalimantan Timur. Danau ini dikenal dengan airnya yang sangat jernih, yang memantulkan pemandangan sekitarnya dengan sempurna. Dengan kedalaman air yang cukup, pengunjung bisa menikmati kegiatan seperti berenang, snorkeling, atau sekadar bersantai menikmati pemandangan.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Di Danau Labuan Cermin, pengunjung dapat menikmati kegiatan berenang atau snorkeling di air yang jernih. Anda juga dapat menjelajahi sekitar danau untuk menikmati keindahan alam yang asri. Meskipun fasilitas di sekitar danau belum banyak, namun keindahan alam yang ditawarkan cukup memuaskan.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Untuk menuju Danau Labuan Cermin, pengunjung dapat memulai perjalanan dari Tanjung Redeb dan melanjutkan perjalanan dengan kendaraan menuju desa terdekat. Dari sana, pengunjung bisa melanjutkan perjalanan dengan menggunakan perahu untuk mencapai danau yang terletak di tengah hutan tropis ini.
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

export default DanauLabuanCermin;
