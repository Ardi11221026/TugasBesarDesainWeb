import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BlogRandom from './BlogRandom';

const BatuDinding = () => {
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
                            <Link to="/mahakam-ulu" className="hover:underline">Mahakam Ulu</Link>
                            <span className="mx-2">{'>>'}</span>
                            <Link to="/batu-dinding" className="hover:underline font-semibold">Batu Dinding</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Batu Dinding, Wisata Alam Mahakam Ulu</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='img/mahulu/batu dinding.jpg' 
                            alt="Batu Dinding"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Batu Dinding yang terletak di Mahakam Ulu, Kalimantan Timur, adalah formasi batuan spektakuler yang menyerupai dinding besar alami. Tempat ini menawarkan pemandangan alam yang menakjubkan dan merupakan destinasi populer bagi pecinta petualangan dan pendakian. Batu Dinding juga memiliki nilai sejarah dan budaya bagi masyarakat setempat.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Pengunjung Batu Dinding dapat menikmati kegiatan seperti trekking, fotografi alam, dan menikmati pemandangan sungai Mahakam dari ketinggian. Selain itu, tersedia fasilitas dasar seperti tempat parkir dan area istirahat. Pengunjung disarankan untuk membawa perlengkapan yang memadai jika ingin menjelajahi kawasan ini.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Batu Dinding dapat diakses dari wilayah terdekat di Mahakam Ulu dengan menggunakan kendaraan roda dua atau empat. Rute perjalanan melewati jalan berliku dan medan yang menantang, menjadikan lokasi ini menarik bagi petualang yang menyukai tantangan alam.
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

export default BatuDinding;
