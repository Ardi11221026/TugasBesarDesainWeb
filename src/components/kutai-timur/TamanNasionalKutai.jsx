import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../fitur/Header';
import Footer from '../fitur/Footer';
import BlogRandom from '../fitur/BlogRandom';

const TamanNasionalKutai = () => {
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
                            <Link to="/kutai-timur" className="hover:underline">Kutai Timur</Link>
                            <span className="mx-2">{'>>'}</span>
                            <Link to="/taman-nasional-kutai" className="hover:underline font-semibold">Taman Nasional Kutai</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Taman Nasional Kutai, Keindahan Alam Kutai Timur</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='img/kutim/taman nasional kutai.jpg' 
                            alt="Taman Nasional Kutai"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Taman Nasional Kutai yang terletak di Kutai Timur, Kalimantan Timur, merupakan kawasan konservasi yang kaya akan keanekaragaman hayati. Taman nasional ini meliputi berbagai habitat, termasuk hutan tropis, sungai, dan lahan basah yang menjadi rumah bagi flora dan fauna langka seperti orangutan, bekantan, dan beragam jenis burung. Ini adalah destinasi ideal bagi para pecinta alam dan ekowisata.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Di Taman Nasional Kutai, pengunjung dapat menjelajahi jalur trekking, mengamati satwa liar, serta menikmati keindahan alam yang asri. Taman ini juga menyediakan fasilitas seperti pos pengamatan, pemandu wisata, dan area berkemah yang aman. Pengunjung dapat belajar tentang konservasi dan pentingnya pelestarian alam di area ini.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Taman Nasional Kutai terletak di Kutai Timur dan dapat dicapai dari kota Sangatta atau Bontang dengan menggunakan kendaraan pribadi atau transportasi umum. Akses menuju taman nasional ini cukup mudah, menjadikannya pilihan tepat bagi para pelancong yang ingin merasakan suasana alam liar Kalimantan Timur.
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

export default TamanNasionalKutai;
