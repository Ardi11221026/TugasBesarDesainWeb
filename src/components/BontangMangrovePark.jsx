import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BlogRandom from './BlogRandom';

const BontangMangrovePark = () => {
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
                            <Link to="/bontang-mangrove-park" className="hover:underline font-semibold">Bontang Mangrove Park</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Bontang Mangrove Park, Ekowisata Alam Bontang</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='img/bontang/bontang mangrove park.jpeg' 
                            alt="Bontang Mangrove Park"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Bontang Mangrove Park adalah kawasan ekowisata yang menawarkan keindahan hutan mangrove di Bontang, Kalimantan Timur. Tempat ini sangat cocok bagi pengunjung yang tertarik untuk menikmati keanekaragaman hayati dan belajar lebih banyak tentang ekosistem mangrove.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Pengunjung dapat melakukan berbagai aktivitas seperti berjalan-jalan di atas jembatan bambu yang dibangun di tengah hutan mangrove, atau mengamati satwa liar seperti burung dan ikan yang hidup di sekitar kawasan tersebut.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Lokasi Bontang Mangrove Park dapat dijangkau dengan kendaraan pribadi atau kendaraan umum dari pusat kota Bontang. Setelah mencapai lokasi, pengunjung dapat menjelajahi taman mangrove melalui jalur yang telah disediakan.
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

export default BontangMangrovePark;
