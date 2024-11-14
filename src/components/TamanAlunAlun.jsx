import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BlogRandom from './BlogRandom';

const TamanAlunAlun = () => {
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
                            <Link to="/penajam-paser-utara" className="hover:underline">Penajam Paser Utara</Link>
                            <span className="mx-2">{'>>'}</span>
                            <Link to="/taman-alun-alun" className="hover:underline font-semibold">Taman Alun-Alun</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Taman Alun-Alun, Ruang Publik Penajam Paser Utara</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='img/ppu/taman alun-alun.jpg' 
                            alt="Taman Alun-Alun"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Taman Alun-Alun terletak di Penajam Paser Utara, Kalimantan Timur. Alun-alun ini adalah ruang publik yang populer di kalangan masyarakat lokal untuk bersantai, berolahraga, dan menghabiskan waktu bersama keluarga. Alun-alun ini juga sering menjadi lokasi berbagai acara dan perayaan lokal.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Di Taman Alun-Alun, pengunjung dapat menikmati fasilitas seperti area bermain anak-anak, jogging track, dan tempat duduk di bawah pepohonan rindang. Di sekitarnya juga tersedia kios makanan dan minuman, menjadikannya tempat yang sempurna untuk bersantai.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Taman Alun-Alun ini berada di pusat Penajam Paser Utara, membuatnya mudah diakses dengan kendaraan pribadi atau transportasi umum. Dengan akses yang mudah dan fasilitas lengkap, tempat ini menjadi favorit bagi warga setempat.
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

export default TamanAlunAlun;
