import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../fitur/Header';
import Footer from '../fitur/Footer';
import BlogRandom from '../fitur/BlogRandom';

const WisataSawahGunungMulia = () => {
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
                            <Link to="/wisata-sawah-gunung-mulia" className="hover:underline font-semibold">Wisata Sawah Gunung Mulia</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Wisata Sawah Gunung Mulia, Pesona Alam Penajam</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='/img/ppu/wisata sawah gunung mulia.jpg' 
                            alt="Wisata Sawah Gunung Mulia"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Wisata Sawah Gunung Mulia terletak di Desa Gunung Mulia, Kecamatan Babulu, Kabupaten Penajam Paser Utara. Tempat ini menawarkan pemandangan alam yang memukau, dengan sawah-sawah hijau yang luas dan latar belakang pegunungan yang menakjubkan. Wisata ini sangat cocok bagi mereka yang ingin menikmati keindahan alam pedesaan.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Di Wisata Sawah Gunung Mulia, pengunjung dapat menikmati aktivitas seperti berjalan-jalan di sekitar sawah, berfoto dengan latar belakang alam yang asri, atau belajar tentang kehidupan petani lokal. Fasilitas yang ada di sini termasuk tempat istirahat dan area parkir.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Wisata Sawah Gunung Mulia dapat dijangkau dengan kendaraan pribadi dari Penajam. Dengan akses yang mudah dan lokasi yang berada di pedesaan, tempat ini memberikan kesempatan untuk menikmati suasana alam yang tenang dan segar.
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

export default WisataSawahGunungMulia;
