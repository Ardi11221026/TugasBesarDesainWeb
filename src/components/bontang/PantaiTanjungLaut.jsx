import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../fitur/Header';
import Footer from '../fitur/Footer';
import BlogRandom from '../fitur/BlogRandom';

const PantaiTanjungLaut = () => {
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
                            <Link to="/bontang" className="hover:underline">Bontang</Link>
                            <span className="mx-2">{'>>'}</span>
                            <Link to="/pantai-tanjung-laut" className="hover:underline font-semibold">Pantai Tanjung Laut</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Pantai Tanjung Laut, Wisata Alam di Bontang Selatan</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='img/bontang/pantai tanjung laut.jpg' 
                            alt="Pantai Tanjung Laut"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                        Pantai Tanjung Laut, yang terletak di Bontang Selatan, Kalimantan Timur, merupakan destinasi wisata yang menawarkan keindahan alam yang memukau. 
                        Dengan pasir putih yang lembut, air laut yang jernih, dan ombak yang tenang, pantai ini menjadi tempat yang ideal untuk bersantai dan melepas penat. Wisatawan juga dapat menikmati pemandangan matahari terbenam yang memukau di sore hari, menciptakan suasana romantis dan menenangkan. 
                        Selain itu, kawasan sekitar pantai dilengkapi dengan warung makan yang menyajikan hidangan lokal, sehingga pengunjung dapat menikmati kuliner sambil mengagumi panorama laut.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                        Pengunjung Pantai Tanjung Laut dapat menikmati berbagai aktivitas seru seperti berenang, berjemur, atau bermain voli pantai di pasir putih yang lembut. Pantai ini juga cocok untuk menikmati kegiatan santai seperti piknik bersama keluarga atau teman-teman. 
                        Selain itu, beberapa warung makan yang berada di sekitar pantai menawarkan hidangan laut segar dan lezat, memberi kesempatan bagi wisatawan untuk menikmati kuliner khas pesisir. 
                        Dengan pemandangan yang indah dan suasana yang tenang, pantai ini menjadi tempat yang sempurna untuk menikmati waktu bersantai sambil mencicipi kelezatan hidangan lokal.   
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                        Pantai Tanjung Laut dapat diakses dengan mudah menggunakan kendaraan pribadi dari pusat kota Bontang, hanya membutuhkan waktu sekitar 30 menit perjalanan. 
                        Lokasinya yang dekat dengan kota membuat pantai ini menjadi pilihan utama bagi wisatawan yang ingin menikmati keindahan alam pantai tanpa harus menempuh perjalanan jauh. 
                        Akses jalan yang baik dan fasilitas yang tersedia di sekitar pantai menjadikan Tanjung Laut tempat yang ideal untuk wisata singkat atau liburan akhir pekan. Dengan suasana yang tenang dan pemandangan yang memukau, pantai ini cocok untuk berbagai aktivitas santai.
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

export default PantaiTanjungLaut;
