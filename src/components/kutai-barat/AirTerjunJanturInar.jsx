import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../fitur/Header';
import Footer from '../fitur/Footer';
import BlogRandom from '../fitur/BlogRandom';

const AirTerjunJanturInar = () => {
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
                            <Link to="/kutai-barat" className="hover:underline">Kutai Barat</Link>
                            <span className="mx-2">{'>>'}</span>
                            <Link to="/air-terjun-jantur-inar" className="hover:underline font-semibold">Air Terjun Jantur Inar</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Air Terjun Jantur Inar, Keindahan Alam Kutai Barat</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='/img/kubar/air terjun jantur inar.jpg' 
                            alt="Air Terjun Jantur Inar"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Air Terjun Jantur Inar terletak di Kutai Barat, Kalimantan Timur. Air terjun ini menawarkan pemandangan yang menakjubkan dengan air yang jatuh dari ketinggian, dikelilingi oleh hutan tropis yang hijau. Tempat ini adalah pilihan sempurna bagi pengunjung yang ingin menikmati keindahan alam yang masih alami.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Pengunjung dapat menikmati trekking menuju air terjun, berfoto dengan latar belakang alam yang indah, atau sekadar bersantai di sekitar area air terjun. Fasilitas di sekitar air terjun masih cukup sederhana, namun tetap memberikan pengalaman alam yang luar biasa.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Untuk mencapai Air Terjun Jantur Inar, Anda perlu melakukan perjalanan melalui jalur darat yang cukup menantang, tetapi pemandangan yang ditawarkan membuat perjalanan tersebut sangat berharga. Disarankan untuk menggunakan kendaraan yang kuat atau menyewa jasa tour untuk mencapai lokasi ini.
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

export default AirTerjunJanturInar;
