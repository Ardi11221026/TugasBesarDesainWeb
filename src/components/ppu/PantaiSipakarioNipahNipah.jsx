import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../fitur/Header';
import Footer from '../fitur/Footer';
import BlogRandom from '../fitur/BlogRandom';

const PantaiSipakarioNipahNipah = () => {
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
                            <Link to="/penajam-paser-utara" className="hover:underline">Penajam Paser Utara</Link>
                            <span className="mx-2">{'>>'}</span>
                            <Link to="/pantai-sipakario-nipah-nipah" className="hover:underline font-semibold">Pantai Sipakario Nipah-Nipah</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Pantai Sipakario Nipah-Nipah, Keindahan Alam Penajam</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='/img/ppu/pantai nipah-nipah.jpg' 
                            alt="Pantai Sipakario Nipah-Nipah"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Pantai Sipakario Nipah-Nipah terletak di Penajam Paser Utara, Kalimantan Timur. Pantai ini menawarkan pemandangan alam yang indah dengan pasir putih dan laut biru yang tenang. Tempat ini menjadi pilihan populer untuk berlibur, bersantai, serta menikmati suasana alam yang menenangkan.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Di Pantai Sipakario Nipah-Nipah, pengunjung dapat melakukan berbagai aktivitas seperti berenang, bermain pasir, atau sekadar menikmati pemandangan. Terdapat beberapa fasilitas seperti gazebo, area parkir, serta warung makan yang menyajikan makanan laut segar.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Pantai Sipakario Nipah-Nipah dapat dijangkau dengan kendaraan pribadi atau transportasi umum. Lokasinya yang tidak jauh dari pusat kota membuatnya mudah diakses oleh pengunjung yang ingin menikmati keindahan alamnya.
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

export default PantaiSipakarioNipahNipah;
