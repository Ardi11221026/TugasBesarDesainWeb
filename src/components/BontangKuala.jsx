import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BlogRandom from './BlogRandom';

const BontangKuala = () => {
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
                            <Link to="/bontang-kuala" className="hover:underline font-semibold">Bontang Kuala</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Bontang Kuala, Keindahan Alam Bontang</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='img/bontang/bontang kuala.jpg' 
                            alt="Bontang Kuala"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                        Bontang Kuala adalah sebuah desa wisata yang terletak di pesisir Bontang, Kalimantan Timur, dikenal sebagai salah satu destinasi yang memadukan keindahan alam dan kehidupan masyarakat lokal yang khas. Desa ini menawarkan pemandangan laut yang memukau dengan jembatan kayu yang membentang di atas air, menghubungkan rumah-rumah tradisional yang berdiri di atas tiang. 
                        Selain menikmati panorama laut yang tenang, wisatawan juga dapat mencicipi beragam hidangan seafood segar di restoran lokal sambil menikmati angin laut yang sejuk. 
                        Bontang Kuala juga menjadi tempat yang ideal untuk bersantai dan menyaksikan matahari terbenam, menjadikannya destinasi yang cocok untuk melepas penat.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                        Di Bontang Kuala, pengunjung dapat menikmati berbagai aktivitas menarik yang memanfaatkan keindahan alam dan budaya lokal. Anda bisa berkeliling dengan perahu tradisional untuk menjelajahi area pesisir yang memukau atau mencoba pengalaman memancing bersama penduduk setempat. 
                        Selain itu, berjalan-jalan di jembatan kayu yang menghubungkan rumah-rumah panggung di atas laut memberikan pengalaman unik yang jarang ditemukan di tempat lain. 
                        Pengunjung juga dapat menikmati hidangan khas lokal di warung makan setempat, terutama aneka olahan seafood segar yang menjadi daya tarik kuliner kawasan ini. Suasana yang tenang dan pemandangan matahari terbenam menjadikan Bontang Kuala tempat yang sempurna untuk bersantai.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                        Bontang Kuala terletak tidak jauh dari pusat Kota Bontang dan dapat diakses dengan mudah melalui jalan raya yang baik. Pengunjung dapat menggunakan kendaraan pribadi untuk perjalanan yang lebih fleksibel atau memanfaatkan transportasi umum seperti angkutan kota atau ojek online yang tersedia di area perkotaan. 
                        Perjalanan menuju kawasan ini menawarkan pemandangan pesisir yang menenangkan, menjadikannya bagian dari pengalaman wisata itu sendiri. 
                        Setibanya di sana, pengunjung akan disambut dengan suasana desa yang khas, lengkap dengan rumah-rumah panggung yang unik dan pemandangan laut yang memukau.
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

export default BontangKuala;
