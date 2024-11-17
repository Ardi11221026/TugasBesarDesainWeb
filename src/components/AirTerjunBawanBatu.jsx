import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BlogRandom from './BlogRandom';

const AirTerjunBawanBatu = () => {
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
                            <Link to="/air-terjun-bawan-batu" className="hover:underline font-semibold">Air Terjun Bawan Batu</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Air Terjun Bawan Batu, Keajaiban Alam Berau</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='img/berau/air terjun bawan batu.jpeg' 
                            alt="Air Terjun Bawan Batu"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Air Terjun Bawan Batu adalah salah satu tempat wisata alam yang terletak di Kabupaten Berau, Kalimantan Timur. Dengan air terjun yang menakjubkan, keindahan alamnya sangat memukau para pengunjung. Di sini, Anda bisa menikmati suasana alam yang tenang dan menyegarkan, serta menikmati pemandangan hutan tropis yang hijau.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Di Air Terjun Bawan Batu, wisatawan bisa melakukan aktivitas trekking ringan menuju lokasi air terjun. Setelah mencapai tempat tersebut, Anda dapat menikmati keindahan air terjun sambil berfoto atau sekadar bersantai menikmati udara segar. Fasilitas di sekitar air terjun terbatas, jadi pastikan membawa perlengkapan yang diperlukan.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Untuk menuju Air Terjun Bawan Batu, pengunjung dapat memulai perjalanan dari Tanjung Redeb, ibu kota Kabupaten Berau, dan melanjutkan perjalanan darat menuju desa terdekat. Dari sana, pengunjung harus melakukan trekking menuju lokasi air terjun. Akses jalan menuju air terjun ini sedikit menantang, namun pemandangan yang indah setibanya di sana sangat layak untuk dinikmati.
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

export default AirTerjunBawanBatu;
