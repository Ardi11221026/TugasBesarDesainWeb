import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BlogRandom from './BlogRandom';

const RiamUdang = () => {
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
                            <Link to="/mahakam-ulu" className="hover:underline">Mahakam Ulu</Link>
                            <span className="mx-2">{'>>'}</span>
                            <Link to="/riam-udang" className="hover:underline font-semibold">Riam Udang</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Riam Udang, Keindahan Alam Mahakam Ulu</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='img/mahulu/riam-udang.jpg' 
                            alt="Riam Udang"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Riam Udang adalah salah satu destinasi wisata alam yang terkenal di Mahakam Ulu, Kalimantan Timur. Tempat ini menawarkan keindahan alam yang luar biasa, dengan air terjun yang indah dan dikelilingi oleh hutan tropis yang masih asri. Riam Udang juga dikenal sebagai tempat yang sempurna untuk aktivitas air seperti berenang dan bermain air.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Pengunjung Riam Udang dapat menikmati berbagai aktivitas, termasuk berenang di kolam alami yang terbentuk dari air terjun, trekking menyusuri hutan tropis, dan berkemah. Fasilitas yang tersedia di lokasi ini termasuk area parkir, tempat peristirahatan, dan pemandu wisata yang siap membantu pengunjung.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Akses ke Riam Udang dapat dilakukan melalui perjalanan darat dari kota terdekat di Mahakam Ulu. Rute perjalanan akan membawa pengunjung melalui jalan-jalan yang berliku dan penuh tantangan, sehingga cocok bagi para petualang yang menyukai perjalanan alam.
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

export default RiamUdang;
