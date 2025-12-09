import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../fitur/Header';
import Footer from '../fitur/Footer';
import BlogRandom from '../fitur/BlogRandom';

const AirTerjunBawanBatu = () => {
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
                            <Link to="/air-terjun-bawan-batu" className="hover:underline font-semibold">Air Terjun Bawan Batu</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Air Terjun Bawan Batu, Keajaiban Alam Berau</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='/img/berau/air terjun bawan batu.jpeg' 
                            alt="Air Terjun Bawan Batu"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                        Air Terjun Bawan Batu, yang terletak di Kabupaten Berau, Kalimantan Timur, adalah destinasi wisata alam yang menawarkan pemandangan memukau dengan air terjun yang megah dikelilingi oleh hutan tropis yang rimbun. 
                        Tempat ini menjadi pilihan ideal bagi pengunjung yang mencari ketenangan dan suasana alami untuk melepas penat. Selain keindahan air terjunnya, area sekitar juga menyediakan jalur trekking ringan yang cocok bagi pecinta alam dan fotografer yang ingin mengabadikan momen indah. 
                        Dengan akses yang cukup mudah dan suasana yang sejuk, Air Terjun Bawan Batu menjadi daya tarik wisata favorit di wilayah ini.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                        Air Terjun Bawan Batu menawarkan pengalaman wisata yang menyegarkan, dengan aktivitas trekking ringan melalui jalur alami menuju lokasi air terjun. Sesampainya di sana, pengunjung dapat menikmati pemandangan air terjun yang memukau, berfoto di sekitar keindahan alam, atau bersantai di bawah rindangnya pepohonan sambil menikmati udara segar khas hutan tropis. 
                        Karena fasilitas di area ini masih terbatas, seperti minimnya warung atau tempat istirahat permanen, wisatawan disarankan untuk membawa perlengkapan pribadi, seperti makanan, air minum, dan alas duduk. 
                        Tempat ini cocok bagi mereka yang mencari pelarian sejenak dari kesibukan kota sambil menikmati suasana yang alami dan damai.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                        Untuk mencapai Air Terjun Bawan Batu, perjalanan dimulai dari Tanjung Redeb, ibu kota Kabupaten Berau, dengan menggunakan kendaraan menuju desa terdekat sebagai titik awal trekking. Rute perjalanan darat ini memakan waktu beberapa jam dan menawarkan pemandangan pedesaan yang asri sepanjang jalan. Dari desa, pengunjung melanjutkan trekking dengan medan yang sedikit menantang, melalui jalur setapak yang dikelilingi oleh hutan tropis. 
                        Meski memerlukan usaha ekstra, keindahan alam yang menanti di lokasi air terjun, dengan gemuruh air yang jatuh dan udara segar khas pegunungan, menjadikan perjalanan ini sangat berkesan. 
                        Dianjurkan untuk menggunakan alas kaki yang nyaman dan membawa bekal untuk mendukung perjalanan.
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

export default AirTerjunBawanBatu;
