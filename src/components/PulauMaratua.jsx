import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BlogRandom from './BlogRandom';

const PulauMaratua = () => {
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
                            <Link to="/pulau-maratua" className="hover:underline font-semibold">Pulau Maratua</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Pulau Maratua, Surga Tersembunyi di Berau</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='img/berau/pulau maratua.jpeg' 
                            alt="Pulau Maratua"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Pulau Maratua merupakan salah satu pulau eksotis yang terletak di Kabupaten Berau, Kalimantan Timur. Pulau ini terkenal dengan keindahan bawah lautnya yang luar biasa, membuatnya menjadi tempat yang sangat populer untuk aktivitas diving dan snorkeling. Dengan pantai berpasir putih dan perairan yang jernih, Pulau Maratua menjadi surga bagi para pecinta alam dan wisatawan yang ingin menikmati keindahan alam tropis.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Di Pulau Maratua, pengunjung dapat menikmati berbagai aktivitas seperti diving, snorkeling, serta berkeliling dengan perahu untuk menikmati pemandangan sekitar pulau. Pulau ini juga memiliki beberapa resort dan homestay bagi wisatawan yang ingin menginap. Selain itu, tempat ini cocok untuk bersantai di pantai atau menikmati keindahan alam dengan berjalan-jalan di sepanjang pantai.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Pulau Maratua dapat dicapai dengan melakukan perjalanan laut dari Tanjung Redeb, ibu kota Kabupaten Berau. Tiba di pulau, pengunjung dapat melanjutkan perjalanan dengan menggunakan perahu menuju beberapa spot wisata di pulau tersebut. Meskipun perjalanan memakan waktu, keindahan alam Pulau Maratua akan membuatnya menjadi pengalaman yang tak terlupakan.
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

export default PulauMaratua;
