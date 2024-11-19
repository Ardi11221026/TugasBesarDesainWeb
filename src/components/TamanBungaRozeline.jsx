import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BlogRandom from './BlogRandom';

const TamanBungaRozeline = () => {
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
                            <Link to="/taman-bunga-rozeline" className="hover:underline font-semibold">Taman Bunga Rozeline</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Taman Bunga Rozeline, Keindahan Alam Penajam</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='img/ppu/taman bunga rozeline.jpg' 
                            alt="Taman Bunga Rozeline"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Taman Bunga Rozeline terletak di Penajam Paser Utara, Kalimantan Timur. Taman ini menawarkan pemandangan yang indah dengan berbagai jenis bunga yang mekar sepanjang tahun. Ini adalah tempat yang sempurna bagi mereka yang mencari ketenangan dan keindahan alam.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Di Taman Bunga Rozeline, pengunjung dapat menikmati berbagai aktivitas seperti berkeliling melihat bunga-bunga yang indah, berfoto dengan latar belakang taman yang asri, atau sekedar bersantai di bawah pohon-pohon rindang. Taman ini juga dilengkapi dengan fasilitas seperti area parkir dan kios makanan.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Taman Bunga Rozeline mudah dijangkau dari pusat kota Penajam. Pengunjung dapat menggunakan kendaraan pribadi untuk menuju taman ini, yang terletak di sepanjang jalan utama menuju kawasan wisata lainnya.
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

export default TamanBungaRozeline;
