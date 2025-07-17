import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../fitur/Header';
import Footer from '../fitur/Footer';
import BlogRandom from '../fitur/BlogRandom';

const PulauKumala = () => {
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
                            <Link to="/pulau-kumala" className="hover:underline font-semibold">Pulau Kumala</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Pulau Kumala, Ikon Wisata Modern di Tenggarong</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='img/kukar/pulau kumala.jpeg' 
                            alt="Pulau Kumala"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Pulau Kumala adalah destinasi wisata yang unik dan populer di Tenggarong, Kabupaten Kutai Kartanegara. Pulau ini merupakan delta di Sungai Mahakam yang telah dikembangkan menjadi taman wisata modern dengan berbagai fasilitas rekreasi dan hiburan.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Pulau Kumala menawarkan berbagai wahana permainan, taman hiburan, dan fasilitas olahraga. Salah satu ikon utamanya adalah sky tower, yang memungkinkan pengunjung menikmati pemandangan kota Tenggarong dan Sungai Mahakam dari ketinggian. Ada juga kereta mini, area bermain anak, dan restoran untuk bersantai bersama keluarga.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Pulau Kumala dapat dicapai dengan menggunakan kapal atau jembatan penyeberangan dari pusat kota Tenggarong. Lokasinya yang strategis dan dekat dengan atraksi wisata lainnya menjadikan pulau ini pilihan favorit untuk berlibur.
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

export default PulauKumala;
