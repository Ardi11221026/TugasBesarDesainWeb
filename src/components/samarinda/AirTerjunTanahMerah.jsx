import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../fitur/Header';
import Footer from '../fitur/Footer';
import BlogRandom from '../fitur/BlogRandom';

const AirTerjunTanahMerah = () => {
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
                            <Link to="/samarinda" className="hover:underline">Samarinda</Link>
                            <span className="mx-2">{'>>'}</span>
                            <Link to="/air-terjun-tanah-merah" className="hover:underline font-semibold">Air Terjun Tanah Merah</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Air Terjun Tanah Merah, Keindahan Alam Samarinda</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='img/smd/air terjun tanah merah.jpg' 
                            alt="Air Terjun Tanah Merah"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Air Terjun Tanah Merah adalah salah satu destinasi alam yang memukau di Samarinda, terletak di kawasan Muara Badak, Kalimantan Timur. Air terjun ini memiliki pemandangan yang sangat indah, dengan air yang jernih dan udara yang sejuk. Tempat ini sangat cocok untuk para pecinta alam dan petualangan.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Pengunjung bisa menikmati keindahan alam sambil trekking menuju lokasi air terjun, berfoto dengan latar belakang alam yang hijau, serta merasakan kesegaran air terjun. Tersedia fasilitas seperti area parkir, namun pengunjung disarankan untuk membawa peralatan yang sesuai karena medan yang agak menantang.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Air Terjun Tanah Merah berlokasi di Jalan Muara Badak, Kelurahan Tanah Merah, Kota Samarinda. Akses menuju lokasi cukup mudah, namun beberapa bagian jalan menuju air terjun mungkin memerlukan kendaraan dengan kemampuan off-road, terutama saat musim hujan.
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

export default AirTerjunTanahMerah;
