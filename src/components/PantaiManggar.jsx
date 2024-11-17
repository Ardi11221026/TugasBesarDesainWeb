import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BlogRandom from './BlogRandom';

const PantaiManggar = () => {
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
                            <Link to="/pantai-manggar" className="hover:underline font-semibold">Pantai Manggar</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Pantai Manggar</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='img/bpp/pantai manggar.jpg' 
                            alt="Pantai Manggar"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Pantai Manggar Segara Sari adalah destinasi pantai yang populer di Balikpapan, Kalimantan Timur. Pantai ini terkenal dengan pasir putihnya yang lembut dan ombak yang tenang, cocok untuk rekreasi keluarga dan aktivitas pantai.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Fasilitas dan Aktivitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Pantai Manggar menawarkan fasilitas seperti area piknik, tempat bermain, dan warung makan yang menjual aneka hidangan laut. Pengunjung juga dapat menyewa perahu atau melakukan aktivitas seperti berenang, voli pantai, dan berjemur.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Pantai ini terletak sekitar 30 menit dari pusat kota Balikpapan. Anda dapat mencapainya dengan kendaraan pribadi atau transportasi umum. Pantai Manggar juga memiliki parkir yang luas sehingga sangat nyaman bagi wisatawan.
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

export default PantaiManggar;
