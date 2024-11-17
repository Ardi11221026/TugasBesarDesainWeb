import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BlogRandom from './BlogRandom';

const AirTerjunDoyamSeriam = () => {
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
                            <Link to="/paser" className="hover:underline">Paser</Link>
                            <span className="mx-2">{'>>'}</span>
                            <Link to="/air-terjun-doyam-seriam" className="hover:underline font-semibold">Air Terjun Doyam Seriam</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Air Terjun Doyam Seriam, Keindahan Alam Paser</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='img/paser/air terjun doyam seriam.jpg' 
                            alt="Air Terjun Doyam Seriam"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Air Terjun Doyam Seriam terletak di Desa Modang, Kecamatan Kuaro, Kabupaten Paser. Air terjun ini memiliki pemandangan yang menakjubkan dengan air yang jatuh dari ketinggian, dikelilingi oleh pepohonan hijau yang rimbun. Tempat ini sangat cocok untuk para penggemar alam dan petualangan.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Pengunjung dapat menikmati keindahan alam, berfoto di sekitar air terjun, dan trekking menuju lokasi air terjun. Fasilitas di sekitar air terjun masih sederhana, namun cukup untuk mendukung kegiatan wisatawan.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Air Terjun Doyam Seriam dapat dicapai dengan kendaraan pribadi dari pusat kota Paser. Anda perlu melanjutkan perjalanan dengan berjalan kaki sejauh beberapa meter untuk mencapai lokasi air terjun. Aksesnya cukup menantang, tetapi sangat sepadan dengan pemandangan yang ditawarkan.
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

export default AirTerjunDoyamSeriam;
