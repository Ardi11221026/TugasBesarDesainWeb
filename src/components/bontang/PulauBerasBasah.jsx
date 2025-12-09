import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../fitur/Header';
import Footer from '../fitur/Footer';
import BlogRandom from '../fitur/BlogRandom';

const PulauBerasBasah = () => {
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
                            <Link to="/pulau-beras-basah" className="hover:underline font-semibold">Pulau Beras Basah</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Pulau Beras Basah, Wisata Tropis di Bontang</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='/img/bontang/pulau beras basah.jpg' 
                            alt="Pulau Beras Basah"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                        Pulau Beras Basah adalah sebuah pulau kecil yang terletak sekitar 30 menit perjalanan dengan kapal dari Bontang, Kalimantan Timur. Pulau ini terkenal dengan pasir putihnya yang lembut, air laut yang jernih, serta pemandangan alam tropis yang memukau. 
                        Selain keindahan alamnya, pulau ini juga menawarkan suasana yang tenang dan eksotis, menjadikannya destinasi yang sempurna bagi pengunjung yang ingin bersantai atau menikmati kegiatan seperti berenang dan snorkeling. 
                        Dengan keanekaragaman hayati bawah laut yang menarik, Pulau Beras Basah menjadi tempat ideal untuk wisata alam dan rekreasi.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                        Di Pulau Beras Basah, pengunjung dapat menikmati berbagai aktivitas seperti snorkeling, berenang, atau sekadar bersantai di pantai yang tenang. Keindahan bawah lautnya yang kaya akan terumbu karang dan berbagai spesies ikan menjadikannya lokasi yang sangat menarik bagi para penyelam dan penggemar alam. 
                        Selain itu, suasana yang tenang dan jauh dari keramaian membuat pulau ini menjadi tempat yang sempurna untuk melepas penat dan menikmati keindahan alam tropis. 
                        Pulau ini juga cocok untuk berjalan-jalan santai sepanjang pantai sambil menikmati pemandangan laut yang memukau.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                        Untuk menuju ke Pulau Beras Basah, pengunjung dapat menyewa perahu dari pelabuhan di Bontang, yang berjarak sekitar 30 hingga 45 menit perjalanan laut. Sepanjang perjalanan, wisatawan akan disuguhi pemandangan laut yang indah dan suasana tenang. 
                        Setibanya di pulau, pengunjung akan disambut oleh pantai berpasir putih yang bersih dan air laut yang jernih, menciptakan suasana tropis yang eksotis. 
                        Akses yang mudah dan keindahan alam yang menakjubkan menjadikan pulau ini destinasi wisata yang ideal bagi mereka yang mencari ketenangan dan petualangan alam.
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

export default PulauBerasBasah;
