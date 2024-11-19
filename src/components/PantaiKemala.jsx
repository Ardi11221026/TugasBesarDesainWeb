import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BlogRandom from './BlogRandom';

const PantaiKemala = () => {
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
                            <Link to="/pantai-kemala" className="hover:underline font-semibold">Pantai Kemala</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Pantai Kemala</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='img/bpp/pantai kemala.jpeg' 
                            alt="Pantai Kemala"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Pantai Kemala, yang dikenal sebagai Pantai Polda, merupakan salah satu destinasi wisata pantai paling populer di Balikpapan. Terkenal dengan suasana santai dan air laut yang jernih, Pantai Kemala menjadi tempat ideal untuk rekreasi keluarga.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Fasilitas dan Aktivitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Pantai ini dilengkapi dengan fasilitas seperti restoran, area bermain anak-anak, dan penyewaan banana boat. Pengunjung juga dapat menikmati makanan khas lokal di pinggir pantai sambil menikmati deburan ombak.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Lokasi Pantai Kemala mudah dijangkau dari pusat kota Balikpapan. Anda dapat menggunakan kendaraan pribadi atau transportasi umum. Dengan tiket masuk yang terjangkau, pantai ini menjadi pilihan favorit bagi wisatawan dan warga setempat.
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

export default PantaiKemala;
