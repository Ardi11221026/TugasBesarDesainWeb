import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BlogRandom from './BlogRandom';

const TelagaUngu = () => {
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
                            <Link to="/telaga-ungu" className="hover:underline font-semibold">Telaga Ungu</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Telaga Ungu, Keindahan Alam Paser</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='img/paser/telaga ungu.jpg' 
                            alt="Telaga Ungu"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Telaga Ungu adalah sebuah danau alami yang terletak di Desa Tepian Batang, Kecamatan Tanah Grogot, Kabupaten Paser. Danau ini terkenal dengan airnya yang jernih dan memiliki warna ungu yang memukau. Tempat ini menjadi destinasi wisata yang populer bagi mereka yang ingin menikmati ketenangan alam dan keindahan pemandangan sekitar.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Di Telaga Ungu, pengunjung dapat menikmati pemandangan indah, berfoto, atau sekadar bersantai di sekitar danau. Fasilitas yang tersedia meliputi area parkir, tempat duduk, dan warung makanan yang menawarkan hidangan lokal.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Telaga Ungu dapat dicapai dengan kendaraan pribadi dari pusat kota Tanah Grogot. Perjalanan menuju lokasi cukup mudah, dan akses jalan ke tempat ini sangat baik. Bagi para pecinta alam, Telaga Ungu adalah tempat yang wajib dikunjungi saat berlibur di Paser.
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

export default TelagaUngu;
