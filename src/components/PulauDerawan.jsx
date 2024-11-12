import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BlogRandom from './BlogRandom'; // Import BlogRandom

const PulauDerawan = () => {
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
                            <Link to="/pulau-derawan" className="hover:underline font-semibold">Pulau Derawan</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Pulau Derawan, Surga Tersembunyi di Kalimantan</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='img/berau/pulau derawan.jpg' 
                            alt="Pulau Derawan"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Pulau Derawan, yang terletak di lepas pantai Kalimantan Timur, adalah destinasi wisata yang menakjubkan dengan keindahan alam bawah laut dan pantai pasir putih yang eksotis. 
                            Pulau ini terkenal dengan spot diving dan snorkeling yang luar biasa, serta menjadi rumah bagi penyu hijau yang langka. Pulau Derawan menawarkan pengalaman liburan yang tak terlupakan, jauh dari keramaian kota.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Di Pulau Derawan, pengunjung dapat menikmati berbagai aktivitas air seperti diving, snorkeling, dan berenang dengan penyu. 
                            Selain itu, pengunjung juga dapat menjelajahi keindahan alam dengan berjalan-jalan di sepanjang pantai, atau menikmati pemandangan matahari terbenam yang menakjubkan. 
                            Fasilitas penginapan yang nyaman dan restoran dengan hidangan laut segar juga tersedia di pulau ini untuk menunjang kenyamanan para wisatawan.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Pulau Derawan dapat diakses melalui perjalanan laut dari Berau, Kalimantan Timur. Pengunjung dapat menggunakan kapal atau speedboat untuk mencapai pulau ini, yang memakan waktu sekitar 2-3 jam dari pelabuhan terdekat. 
                            Karena lokasinya yang agak terpencil, Pulau Derawan menawarkan suasana yang tenang dan alami, jauh dari keramaian, ideal untuk mereka yang mencari ketenangan dan keindahan alam.
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

export default PulauDerawan;
