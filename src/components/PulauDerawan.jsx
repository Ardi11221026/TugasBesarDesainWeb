import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BlogRandom from './BlogRandom';

const PulauDerawan = () => {
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
                            <Link to="/pulau-derawan" className="hover:underline font-semibold">Pulau Derawan</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Pulau Derawan, Surga Tropis di Berau</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='img/berau/pulau derawan.jpg' 
                            alt="Pulau Derawan"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Pulau Derawan terletak di Kabupaten Berau, Kalimantan Timur. Pulau ini dikenal dengan keindahan alam bawah lautnya yang luar biasa, menjadi tujuan wisata populer bagi penyelam dan pecinta alam. Di Pulau Derawan, pengunjung dapat menikmati pantai pasir putih, air laut yang jernih, dan kehidupan laut yang kaya, termasuk penyu hijau dan manta ray.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Di Pulau Derawan, para wisatawan bisa melakukan berbagai aktivitas seperti snorkeling, diving, dan berenang dengan penyu. Fasilitas penginapan juga tersedia di sekitar pulau, termasuk homestay dan resort. Pulau ini juga menawarkan tempat yang tenang untuk menikmati keindahan alam dan berburu foto.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Pulau Derawan dapat diakses dengan menggunakan kapal dari Kota Tanjung Redeb, ibu kota Kabupaten Berau. Meskipun membutuhkan perjalanan yang lebih panjang untuk sampai ke pulau ini, keindahan alam yang menanti membuat perjalanan tersebut sangat berharga bagi para wisatawan.
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

export default PulauDerawan;
