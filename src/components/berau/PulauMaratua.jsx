import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../fitur/Header';
import Footer from '../fitur/Footer';
import BlogRandom from '../fitur/BlogRandom';

const PulauMaratua = () => {
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
                            <Link to="/pulau-maratua" className="hover:underline font-semibold">Pulau Maratua</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Pulau Maratua, Surga Tersembunyi di Berau</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='img/berau/pulau maratua.jpeg' 
                            alt="Pulau Maratua"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                        Pulau Maratua adalah salah satu pulau tropis yang memukau di Kabupaten Berau, Kalimantan Timur, dan menjadi bagian dari Kepulauan Derawan. 
                        Pulau ini menawarkan keindahan bawah laut yang luar biasa, menjadikannya surga bagi para penyelam dan pecinta snorkeling yang ingin menjelajahi terumbu karang yang masih alami serta kehidupan laut yang beragam, seperti penyu hijau, hiu karang, hingga ikan-ikan eksotis. 
                        Selain aktivitas bawah laut, Pulau Maratua juga memiliki pantai berpasir putih yang luas dan perairan biru yang jernih, ideal untuk bersantai atau sekadar menikmati suasana tropis yang tenang. Dengan beberapa pilihan penginapan seperti resort dan homestay yang menghadap langsung ke laut, Pulau Maratua memberikan pengalaman liburan yang tak terlupakan bagi wisatawan lokal maupun mancanegara.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                        Di Pulau Maratua, pengunjung dapat menikmati beragam aktivitas seru seperti diving dan snorkeling, yang memungkinkan untuk menjelajahi terumbu karang yang kaya akan kehidupan laut, termasuk penyu, ikan tropis, dan berbagai spesies laut lainnya. 
                        Selain itu, wisatawan bisa berkeliling dengan perahu untuk menikmati pemandangan pulau yang menakjubkan atau bersantai di pantai berpasir putih yang tenang. 
                        Pulau Maratua juga memiliki beberapa resort dan homestay dengan fasilitas yang nyaman, memberikan pengalaman menginap yang menyatu dengan alam. Dengan suasana yang damai, tempat ini sangat cocok untuk berjalan-jalan santai di sepanjang pantai, menikmati keindahan alam, atau hanya bersantai sambil menikmati angin laut yang segar.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                        Pulau Maratua dapat dijangkau melalui perjalanan laut dari Tanjung Redeb, ibu kota Kabupaten Berau, dengan menggunakan kapal atau perahu. 
                        Setelah tiba di pulau, pengunjung dapat melanjutkan perjalanan menuju berbagai spot wisata dengan perahu lokal, seperti spot diving, snorkeling, atau pantai-pantai eksotis yang tersembunyi. 
                        Meskipun perjalanan menuju pulau ini memerlukan waktu, baik dari daratan maupun laut, keindahan alam yang ditawarkan, termasuk perairan jernih, terumbu karang, dan kehidupan laut yang mempesona, akan membuat setiap perjalanan terasa sangat berharga dan memberikan pengalaman yang tak terlupakan bagi wisatawan.
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

export default PulauMaratua;
