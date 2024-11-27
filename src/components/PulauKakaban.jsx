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
                        Pulau Kakaban, yang terletak di Kepulauan Derawan, menawarkan pengalaman unik bagi wisatawan dengan aktivitas seperti snorkeling, diving, dan berenang di Danau Kakaban bersama ubur-ubur tak menyengat, sebuah fenomena langka yang hanya ditemukan di beberapa tempat di dunia. 
                        Selain itu, pengunjung dapat menikmati keindahan alam pulau dengan berjalan-jalan di pantai berpasir putih yang masih alami, dikelilingi oleh hutan tropis yang rimbun. Fasilitas penginapan di sekitar pulau terbatas, sehingga penting untuk merencanakan perjalanan dengan matang, termasuk membawa perlengkapan yang dibutuhkan untuk kenyamanan selama berada di pulau ini.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                        Pulau Kakaban dapat diakses melalui perjalanan laut menggunakan kapal dari Tanjung Redeb, ibu kota Kabupaten Berau, dengan durasi perjalanan yang bergantung pada kondisi cuaca dan jenis transportasi yang digunakan. 
                        Setelah tiba di pulau, pengunjung biasanya melanjutkan perjalanan melalui jalur darat atau menggunakan perahu untuk mencapai Danau Kakaban, rumah bagi ubur-ubur tak menyengat yang menjadi daya tarik utama. 
                        Perjalanan menuju pulau ini mungkin cukup panjang dan menantang, namun pesona keindahan alamnya, mulai dari air laut yang jernih hingga hutan tropis yang rimbun, menjadikan setiap langkah perjalanan terasa sepadan. Pastikan untuk membawa bekal yang cukup karena fasilitas di pulau masih terbatas.
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
