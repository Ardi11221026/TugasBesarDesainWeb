import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BlogRandom from './BlogRandom'; // Import BlogRandom

const PantaiMarina = () => {
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
                            <Link to="/pantai-marina" className="hover:underline font-semibold">Pantai Marina</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Pantai Marina, Pantai Dekat Marina Mall Bontang</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='img/bontang/pantai marina.jpg' 
                            alt="Pantai Marina"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Pantai Marina, yang terletak di Bontang, Kalimantan Timur, adalah destinasi populer bagi penduduk setempat dan wisatawan. 
                            Pantai ini menawarkan pemandangan laut yang menakjubkan, pasir putih, dan suasana yang tenang, menjadikannya tempat ideal untuk bersantai atau berlibur singkat. 
                            Dengan akses yang mudah dari kota, Pantai Marina menjadi pilihan sempurna untuk mereka yang ingin menikmati keindahan alam laut tanpa pergi terlalu jauh.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Di Pantai Marina, pengunjung dapat menikmati berbagai aktivitas seperti berenang, berjemur, dan bermain pasir. 
                            Pantai ini juga memiliki beberapa area untuk piknik dan gazebo yang dapat disewa untuk bersantai. 
                            Bagi yang suka fotografi, pemandangan matahari terbenam di Pantai Marina adalah momen yang tak boleh dilewatkan. 
                            Fasilitas umum seperti kamar mandi, tempat parkir, dan warung kecil juga tersedia untuk kenyamanan pengunjung.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Berlokasi di dekat kawasan wisata di Bontang, Pantai Marina dapat diakses dengan mudah menggunakan kendaraan pribadi atau transportasi umum. 
                            Lokasinya yang strategis membuatnya menjadi destinasi yang sempurna bagi mereka yang mencari suasana pantai yang tenang. 
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

export default PantaiMarina;
