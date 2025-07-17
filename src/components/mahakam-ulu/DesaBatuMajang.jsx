import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../fitur/Header';
import Footer from '../fitur/Footer';
import BlogRandom from '../fitur/BlogRandom';

const DesaBatuMajang = () => {
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
                            <Link to="/desa-batu-majang" className="hover:underline font-semibold">Desa Batu Majang</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Desa Batu Majang, Keindahan Tradisi Mahakam Ulu</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='img/mahulu/desa batu majang.jpg' 
                            alt="Desa Batu Majang"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Desa Batu Majang adalah salah satu desa yang terletak di Mahakam Ulu, Kalimantan Timur. Desa ini menawarkan keindahan alam yang memukau serta kehidupan masyarakat yang sangat kental dengan tradisi Dayak. Pengunjung dapat menikmati keindahan hutan tropis serta mengenal lebih dalam kehidupan masyarakat lokal yang masih mempertahankan adat istiadat mereka.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Di Desa Batu Majang, wisatawan dapat menikmati berbagai kegiatan seperti berinteraksi dengan penduduk setempat, belajar tentang budaya Dayak, serta menikmati keindahan alam sekitar. Desa ini juga memiliki fasilitas yang cukup sederhana namun nyaman bagi para pengunjung.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Akses menuju Desa Batu Majang dapat dilakukan dengan menggunakan kendaraan dari Samarinda atau Balikpapan, menuju kawasan Mahakam Ulu. Perjalanan menuju desa ini dapat ditempuh melalui jalan darat yang cukup menantang, namun menawarkan pemandangan yang sangat indah sepanjang perjalanan.
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

export default DesaBatuMajang;
