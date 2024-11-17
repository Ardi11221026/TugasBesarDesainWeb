import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BlogRandom from './BlogRandom';

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
                            Pantai Tanjung Laut terletak di Bontang Selatan, Kalimantan Timur. Pantai ini menawarkan pemandangan alam yang indah dengan pasir putih yang lembut dan ombak yang tenang. Pantai ini sangat cocok bagi wisatawan yang ingin bersantai atau menikmati keindahan matahari terbenam.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Pengunjung Pantai Tanjung Laut dapat menikmati berbagai aktivitas seperti berenang, berjemur, atau bermain voli pantai. Selain itu, terdapat beberapa warung makan yang menyajikan hidangan laut yang lezat.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Pantai Tanjung Laut dapat diakses dengan mudah menggunakan kendaraan pribadi dari pusat kota Bontang. Lokasinya yang dekat dengan kota menjadikannya pilihan utama bagi wisatawan yang ingin menikmati keindahan pantai tanpa harus pergi jauh.
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
