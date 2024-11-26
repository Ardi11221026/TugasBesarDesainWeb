import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BlogRandom from './BlogRandom';

const KebunRayaBalikpapan = () => {
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
                            <Link to="/balikpapan" className="hover:underline">Balikpapan</Link>
                            <span className="mx-2">{'>>'}</span>
                            <Link to="/kebun-raya-balikpapan" className="hover:underline font-semibold">Kebun Raya Balikpapan</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Kebun Raya Balikpapan</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='img/bpp/krb.jpg' 
                            alt="Kebun Raya Balikpapan"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                        Kebun Raya Balikpapan adalah destinasi wisata alam di Balikpapan, Kalimantan Timur, yang menawarkan keindahan flora lokal sekaligus berfungsi sebagai pusat edukasi, konservasi, dan penelitian keanekaragaman hayati. Dikelilingi hutan tropis, tempat ini menyediakan suasana asri yang cocok untuk rekreasi sekaligus belajar tentang tanaman endemik. Dengan fasilitas seperti jalur trekking dan area piknik, Kebun Raya Balikpapan menjadi pilihan ideal bagi keluarga, pelajar, dan pecinta alam yang ingin menikmati keindahan sekaligus memahami pentingnya pelestarian lingkungan.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Fasilitas dan Aktivitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Di kebun raya ini, pengunjung dapat menikmati trekking, bersantai di taman, atau mempelajari berbagai jenis tanaman endemik. Tersedia juga fasilitas seperti area parkir, toilet, dan jalur yang ramah untuk semua usia.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                        Kebun Raya Balikpapan mudah diakses dengan kendaraan pribadi maupun transportasi umum, berlokasi sekitar 15-20 kilometer dari pusat kota dengan waktu tempuh kurang dari satu jam. Jalur menuju lokasi memiliki akses yang baik dan petunjuk arah yang jelas, menjadikannya destinasi favorit bagi wisatawan dan penduduk lokal. Tempat ini menawarkan suasana tenang dikelilingi hutan tropis, cocok untuk rekreasi keluarga atau sekadar melepas penat, didukung fasilitas seperti area parkir, tempat istirahat, dan papan informasi yang memudahkan pengunjung.
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

export default KebunRayaBalikpapan;
