import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../fitur/Header';
import Footer from '../fitur/Footer';
import BlogRandom from '../fitur/BlogRandom';

const TamanBudayaSentawar = () => {
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
                            <Link to="/kutai-barat" className="hover:underline">Kutai Barat</Link>
                            <span className="mx-2">{'>>'}</span>
                            <Link to="/taman-budaya-sentawar" className="hover:underline font-semibold">Taman Budaya Sentawar</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Taman Budaya Sentawar, Destinasi Budaya di Kutai Barat</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='/img/kubar/taman budaya sentawar.jpeg' 
                            alt="Taman Budaya Sentawar"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Taman Budaya Sentawar adalah sebuah tempat yang memiliki berbagai koleksi seni dan budaya dari Kutai Barat. Terletak di jalan Sendawar Raya, taman ini menyajikan berbagai pertunjukan seni tradisional, pameran seni, dan kegiatan budaya lainnya yang melibatkan masyarakat setempat. Tempat ini adalah destinasi wisata yang menarik bagi mereka yang ingin lebih mengenal kebudayaan Kutai Barat.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Di Taman Budaya Sentawar, pengunjung dapat menikmati berbagai pertunjukan seni tradisional seperti tari, musik, dan drama yang merupakan bagian dari kebudayaan lokal. Fasilitas di taman ini termasuk panggung terbuka, ruang pameran seni, serta tempat untuk beristirahat dan menikmati pemandangan.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Untuk mencapai Taman Budaya Sentawar, pengunjung dapat menggunakan kendaraan pribadi atau mengikuti tur yang tersedia. Lokasinya yang berada di pusat kota Sendawar memudahkan akses bagi wisatawan yang datang dari berbagai daerah.
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

export default TamanBudayaSentawar;
