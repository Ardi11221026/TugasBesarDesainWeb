import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../fitur/Header';
import Footer from '../fitur/Footer';
import BlogRandom from '../fitur/BlogRandom';

const DanauAco = () => {
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
                            <Link to="/danau-aco" className="hover:underline font-semibold">Danau Aco</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Danau Aco, Keindahan Alam Kutai Barat</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='img/kubar/danau aco.jpg' 
                            alt="Danau Aco"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Danau Aco terletak di Kutai Barat, Kalimantan Timur. Danau ini terkenal dengan keindahan alamnya yang menakjubkan dan airnya yang jernih. Tempat ini adalah pilihan yang tepat untuk wisatawan yang mencari kedamaian dan keindahan alam.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Pengunjung dapat menikmati kegiatan seperti memancing, berperahu di danau, atau sekadar menikmati suasana damai dan sejuk di sekitar danau. Fasilitas yang ada di sekitar danau cukup memadai untuk kegiatan wisata alam.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Untuk menuju Danau Aco, perjalanan darat yang cukup mudah dapat ditempuh menggunakan kendaraan pribadi. Jalan menuju lokasi sudah cukup baik, membuat perjalanan menuju danau ini menjadi pengalaman yang menyenangkan.
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

export default DanauAco;
