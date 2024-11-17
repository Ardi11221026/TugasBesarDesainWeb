import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BlogRandom from './BlogRandom';

const PulauKakaban = () => {
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
                            <Link to="/berau" className="hover:underline">Berau</Link>
                            <span className="mx-2">{'>>'}</span>
                            <Link to="/pulau-kakaban" className="hover:underline font-semibold">Pulau Kakaban</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Pulau Kakaban, Keindahan Alam yang Memukau di Berau</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='img/berau/pulau kakaban.jpg' 
                            alt="Pulau Kakaban"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Pulau Kakaban adalah sebuah pulau tropis yang terletak di Kabupaten Berau, Kalimantan Timur. Pulau ini terkenal dengan danau ubur-uburnya yang unik, di mana pengunjung bisa berenang bersama ribuan ubur-ubur yang tidak berbahaya. Selain itu, pulau ini juga memiliki pantai yang indah dan terumbu karang yang memikat.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Di Pulau Kakaban, wisatawan dapat menikmati berbagai aktivitas seperti snorkeling, diving, dan berenang bersama ubur-ubur di danau. Selain itu, para pengunjung dapat menikmati keindahan alam pulau dengan berjalan-jalan santai di sepanjang pantai yang masih alami. Fasilitas penginapan terbatas di sekitar pulau, jadi pastikan merencanakan perjalanan dengan baik.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Pulau Kakaban dapat diakses melalui perjalanan menggunakan kapal dari Tanjung Redeb, ibu kota Kabupaten Berau. Setelah tiba di pulau, pengunjung dapat melanjutkan perjalanan dengan perahu menuju danau ubur-ubur yang terkenal. Akses menuju pulau ini memerlukan perjalanan cukup jauh, namun keindahan alam yang menanti sangat layak untuk dijelajahi.
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

export default PulauKakaban;
