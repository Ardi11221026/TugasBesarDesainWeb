import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BlogRandom from './BlogRandom';

const DanauLabuanCermin = () => {
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
                            <Link to="/danau-labuan-cermin" className="hover:underline font-semibold">Danau Labuan Cermin</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Danau Labuan Cermin, Keindahan Air Jernih di Berau</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='img/berau/danau labuan cermin.jpg' 
                            alt="Danau Labuan Cermin"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                        Danau Labuan Cermin adalah destinasi wisata alam yang menakjubkan di Kabupaten Berau, Kalimantan Timur. 
                        Danau ini memiliki air yang begitu jernih hingga dasar danau terlihat jelas, menciptakan ilusi cermin alami yang memantulkan pemandangan hijau di sekitarnya. Uniknya, air di danau ini memiliki dua lapisan, yaitu air tawar di permukaan dan air asin di bagian bawah, menjadikannya fenomena alam yang langka. 
                        Aktivitas seperti berenang, snorkeling, dan berperahu menjadi daya tarik utama, sementara suasana tenang di sekitar danau memberikan pengalaman relaksasi yang luar biasa. Dengan akses melalui perjalanan darat dan air, Danau Labuan Cermin menjadi destinasi wajib bagi pencinta alam dan petualangan.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                        Di Danau Labuan Cermin, pengunjung dapat menikmati berbagai aktivitas seperti berenang, snorkeling, atau menjelajahi danau dengan perahu tradisional untuk mengagumi kejernihan airnya yang unik. Dengan keindahan alam yang masih asri, suasana di sekitar danau sangat cocok untuk relaksasi dan menyatu dengan alam. 
                        Meskipun fasilitas di sekitar danau masih terbatas, pengunjung dapat membawa perlengkapan sendiri untuk memaksimalkan pengalaman. 
                        Keunikan lain dari danau ini adalah kombinasi air tawar di permukaan dan air asin di bawah, menciptakan sensasi berenang yang berbeda. Tempat ini menjadi surga tersembunyi bagi para wisatawan yang mencari ketenangan sekaligus petualangan.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                        Untuk menuju Danau Labuan Cermin, pengunjung biasanya memulai perjalanan dari Tanjung Redeb, ibu kota Kabupaten Berau. Dari sana, perjalanan darat dengan kendaraan pribadi atau sewaan menuju Desa Biduk-Biduk menjadi langkah berikutnya. 
                        Setibanya di desa tersebut, perjalanan dilanjutkan dengan menggunakan perahu tradisional yang akan membawa Anda menyusuri sungai hingga tiba di danau. 
                        Lokasinya yang berada di tengah hutan tropis menambah daya tarik alami tempat ini, menawarkan pengalaman unik bagi wisatawan. Meskipun perjalanan menuju danau memerlukan waktu dan usaha, pemandangan yang memukau serta suasana tenang yang ditawarkan di Danau Labuan Cermin menjadikannya destinasi yang sangat layak untuk dikunjungi.
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

export default DanauLabuanCermin;
