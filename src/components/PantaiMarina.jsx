import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BlogRandom from './BlogRandom';

const PantaiMarina = () => {
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
                            <Link to="/pantai-marina" className="hover:underline font-semibold">Pantai Marina</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Pantai Marina, Tempat Wisata Alam Bontang</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='img/bontang/pantai marina.jpg' 
                            alt="Pantai Marina"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                        Pantai Marina, yang terletak di Bontang, Kalimantan Timur, adalah destinasi wisata yang menawarkan keindahan alami khas pesisir. Dengan pasir putih yang lembut, air laut yang jernih, dan suasana yang damai, pantai ini menjadi tempat ideal untuk bersantai bersama keluarga atau teman. 
                        Selain berenang, pengunjung dapat menikmati berbagai aktivitas seperti bermain di tepi pantai, piknik, atau sekadar berjalan-jalan sambil menghirup udara segar. 
                        Pemandangan matahari terbenam di Pantai Marina menjadi daya tarik utama, memberikan pengalaman yang memukau bagi siapa saja yang berkunjung. Lokasinya yang mudah diakses menjadikan pantai ini pilihan populer bagi wisatawan lokal maupun luar daerah.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                        Di Pantai Marina, pengunjung dapat menikmati berbagai aktivitas menarik seperti berjemur di bawah sinar matahari tropis, berenang di air laut yang jernih, atau bermain voli pantai bersama keluarga dan teman. 
                        Tersedia juga fasilitas pendukung seperti warung makan yang menyajikan hidangan lokal, gazebo untuk bersantai, dan area piknik yang nyaman. 
                        Suasana pantai yang tenang dan bersih menjadikannya tempat yang sempurna untuk melepas penat. Selain itu, pengunjung juga dapat menikmati angin sepoi-sepoi sambil menikmati pemandangan laut yang memukau, terutama saat matahari mulai terbenam.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                        Pantai Marina berlokasi tidak jauh dari pusat kota Bontang, sehingga mudah diakses baik dengan kendaraan pribadi maupun transportasi umum. 
                        Perjalanan menuju pantai ini menyuguhkan pemandangan indah khas pesisir yang menenangkan. 
                        Pantai Marina menjadi salah satu destinasi favorit wisatawan karena menawarkan suasana yang tenang dan alami, cocok untuk bersantai atau sekadar menikmati udara segar. Dengan aksesibilitas yang baik dan fasilitas yang memadai, pantai ini menjadi pilihan tepat bagi siapa saja yang ingin melepaskan diri dari kesibukan kota dan menikmati keindahan alam.
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

export default PantaiMarina;
