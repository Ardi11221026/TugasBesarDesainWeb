import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BlogRandom from './BlogRandom'; // Import BlogRandom

const PantaiBSB = () => {
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
                            <Link to="/balikpapan" className="hover:underline">Balikpapan</Link>
                            <span className="mx-2">{'>>'}</span>
                            <Link to="/pantai-bsb" className="hover:underline font-semibold">Pantai BSB</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Pantai BSB, Pantai Dekat Mall BSB</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='img/bpp/pantai bsb.jpg' 
                            alt="Pantai BSB"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Pantai BSB, yang terletak dekat Mall BSB di Balikpapan, adalah destinasi populer bagi penduduk setempat dan wisatawan. 
                            Pantai ini menawarkan pemandangan laut yang menakjubkan, pasir putih, dan suasana yang tenang, menjadikannya tempat ideal untuk bersantai atau berlibur singkat. 
                            Berkat lokasinya yang dekat dengan pusat perbelanjaan, Pantai BSB juga menyediakan akses mudah ke fasilitas modern, termasuk restoran, kafe, dan toko-toko.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Di Pantai BSB, pengunjung dapat menikmati berbagai aktivitas seperti berenang, berjemur, dan bermain pasir. 
                            Pantai ini juga memiliki beberapa area untuk piknik dan gazebo yang dapat disewa untuk bersantai. 
                            Bagi yang suka fotografi, pemandangan matahari terbenam di Pantai BSB adalah momen yang tak boleh dilewatkan. 
                            Fasilitas umum seperti kamar mandi, tempat parkir, dan warung kecil juga tersedia untuk kenyamanan pengunjung.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Berlokasi di dekat Mall BSB, Pantai BSB dapat diakses dengan mudah menggunakan kendaraan pribadi atau transportasi umum. 
                            Lokasinya yang strategis membuatnya menjadi destinasi yang sempurna bagi mereka yang mencari suasana pantai tanpa perlu meninggalkan kota. 
                            Pantai ini buka setiap hari dan tidak memerlukan tiket masuk, sehingga ideal untuk kunjungan spontan maupun acara keluarga.
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

export default PantaiBSB;
