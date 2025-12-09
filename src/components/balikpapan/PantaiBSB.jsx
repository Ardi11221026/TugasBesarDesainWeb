import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../fitur/Header';
import Footer from '../fitur/Footer';
import BlogRandom from '../fitur/BlogRandom';

const PantaiBSB = () => {
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
                            <Link to="/pantai-bsb" className="hover:underline font-semibold">Pantai BSB</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Pantai BSB, Destinasi Wisata Balikpapan</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='/img/bpp/pantai bsb.jpg' 
                            alt="Pantai BSB"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                        Pantai BSB, yang terletak di Balikpapan, Kalimantan Timur, merupakan destinasi wisata populer yang menarik perhatian wisatawan lokal maupun mancanegara. Pantai ini menawarkan pemandangan laut yang memukau dengan suasana yang tenang, menjadikannya tempat yang ideal untuk bersantai, menikmati keindahan matahari terbenam, atau melakukan berbagai aktivitas seperti jogging dan bermain voli pantai. Selain itu, fasilitas pendukung seperti area parkir, warung makan, dan tempat duduk tepi pantai membuat kunjungan ke Pantai BSB semakin nyaman. Dengan akses yang mudah dari pusat kota, pantai ini menjadi pilihan favorit untuk menghabiskan waktu bersama keluarga atau teman.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Di Pantai BSB, pengunjung dapat menikmati berbagai fasilitas seperti area bermain anak-anak, gazebo, jogging track, dan tempat makan di sekitar pantai. Tidak jarang pantai ini juga menjadi tempat untuk acara atau perayaan khusus.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                        Pantai BSB mudah diakses menggunakan kendaraan pribadi maupun transportasi umum, menjadikannya salah satu destinasi wisata yang paling diminati di Balikpapan. Berlokasi strategis tidak jauh dari pusat kota, pantai ini dapat dicapai dalam waktu singkat dengan jalur yang sudah terhubung baik. Popularitasnya sebagai tujuan rekreasi tidak hanya menarik perhatian wisatawan dari luar daerah, tetapi juga menjadi tempat favorit warga lokal untuk bersantai atau berolahraga di akhir pekan. Dengan fasilitas yang memadai, seperti area parkir, warung makan, dan tempat istirahat, Pantai BSB menawarkan kenyamanan bagi semua kalangan pengunjung.
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

export default PantaiBSB;
