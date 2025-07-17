import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../fitur/Header';
import Footer from '../fitur/Footer';
import BlogRandom from '../fitur/BlogRandom';

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

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Pulau Derawan, Surga Tropis di Berau</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='img/berau/pulau derawan.jpg' 
                            alt="Pulau Derawan"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Pulau Derawan terletak di Kabupaten Berau, Kalimantan Timur. Pulau ini dikenal dengan keindahan alam bawah lautnya yang luar biasa, menjadi tujuan wisata populer bagi penyelam dan pecinta alam. Di Pulau Derawan, pengunjung dapat menikmati pantai pasir putih, air laut yang jernih, dan kehidupan laut yang kaya, termasuk penyu hijau dan manta ray.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                        Pulau Derawan, yang terletak di Kabupaten Berau, Kalimantan Timur, adalah surga bagi para pecinta wisata bahari. Wisatawan dapat menikmati berbagai aktivitas seperti snorkeling dan diving untuk menjelajahi keindahan terumbu karang serta kehidupan bawah laut yang kaya, termasuk berenang bersama penyu hijau dan penyu sisik yang sering terlihat di perairan sekitar pulau. Selain itu, fasilitas penginapan di pulau ini beragam, mulai dari homestay sederhana hingga resort yang menawarkan kenyamanan lebih. 
                        Pulau ini juga menjadi tempat favorit bagi para fotografer untuk mengabadikan pemandangan laut yang jernih, pasir putih, dan langit yang indah, menjadikannya destinasi ideal untuk bersantai dan menikmati keindahan alam tropis.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                        Pulau Derawan dapat diakses melalui perjalanan dari Kota Tanjung Redeb, ibu kota Kabupaten Berau. Wisatawan biasanya menggunakan kendaraan darat menuju Pelabuhan Tanjung Batu, dilanjutkan dengan perjalanan laut menggunakan speedboat atau kapal tradisional menuju pulau. 
                        Meskipun perjalanan ini membutuhkan waktu dan persiapan ekstra, pengalaman menuju Pulau Derawan menawarkan pemandangan laut yang menakjubkan. 
                        Setibanya di sana, pengunjung akan disambut dengan keindahan pasir putih, air laut yang jernih, dan suasana tropis yang memikat, menjadikan perjalanan tersebut sebanding dengan keindahan yang ditawarkan.
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
