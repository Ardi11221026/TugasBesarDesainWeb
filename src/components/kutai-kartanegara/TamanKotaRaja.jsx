import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../fitur/Header';
import Footer from '../fitur/Footer';
import BlogRandom from '../fitur/BlogRandom';

const TamanKotaRaja = () => {
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
                            <Link to="/kutai-kartanegara" className="hover:underline">Kutai Kartanegara</Link>
                            <span className="mx-2">{'>>'}</span>
                            <Link to="/taman-kota-raja" className="hover:underline font-semibold">Taman Kota Raja</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Taman Kota Raja, Ruang Hijau di Tengah Kota Tenggarong</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='img/kukar/taman kota raja.jpg' 
                            alt="Taman Kota Raja"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Taman Kota Raja adalah ruang terbuka hijau di pusat kota Tenggarong, Kutai Kartanegara. Taman ini menjadi tempat favorit masyarakat untuk bersantai, berolahraga, dan menikmati suasana kota. Dengan pepohonan rindang dan area yang bersih, taman ini sangat cocok untuk bersantai bersama keluarga.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Di Taman Kota Raja, pengunjung dapat menikmati jogging track, area bermain anak, dan tempat duduk untuk bersantai. Pada akhir pekan, taman ini sering menjadi tempat berlangsungnya acara seni dan budaya lokal. Tersedia juga area parkir, toilet, dan warung kecil yang menjual makanan ringan.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Taman Kota Raja terletak di pusat kota Tenggarong, sehingga mudah diakses oleh kendaraan pribadi maupun transportasi umum. Lokasinya yang dekat dengan ikon-ikon wisata lainnya menjadikannya tempat yang strategis untuk dikunjungi.
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

export default TamanKotaRaja;
