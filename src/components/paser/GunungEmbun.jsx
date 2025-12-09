import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../fitur/Header';
import Footer from '../fitur/Footer';
import BlogRandom from '../fitur/BlogRandom';

const GunungEmbun = () => {
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
                            <Link to="/paser" className="hover:underline">Paser</Link>
                            <span className="mx-2">{'>>'}</span>
                            <Link to="/gunung-embun" className="hover:underline font-semibold">Gunung Embun</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Gunung Embun, Pesona Alam di Paser</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='/img/paser/gunung embun.jpg' 
                            alt="Gunung Embun"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Gunung Embun terletak di Desa Luan, Kecamatan Muara Samu, Kabupaten Paser. Gunung ini menawarkan pemandangan alam yang indah dan udara yang sejuk. Cocok bagi para penggemar hiking dan mereka yang ingin menikmati ketenangan alam.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Pendakian ke Gunung Embun menjadi kegiatan utama bagi para pengunjung yang datang. Selama perjalanan, pengunjung akan disuguhi pemandangan hutan tropis yang lebat. Di puncak gunung, pengunjung dapat menikmati udara sejuk dan pemandangan yang luar biasa.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Gunung Embun dapat diakses dengan kendaraan pribadi menuju Desa Luan. Setelah itu, pengunjung dapat melanjutkan perjalanan dengan mendaki menuju puncak gunung. Akses jalan ke lokasi cukup baik dan cocok untuk para petualang.
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

export default GunungEmbun;
