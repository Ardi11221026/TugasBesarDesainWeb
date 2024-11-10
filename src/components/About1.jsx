import React from 'react';
import Header from './Header';
import Footer from './Footer';

const About = () => {
    return (
        <div className="main-content flex-[3] bg-gray-100 p-10 rounded-lg shadow-lg flex flex-col items-center">
          <h1 className="text-center mb-2 text-3xl font-bold font-arial">Tentang Kami</h1>
          
          <div className="about-content flex gap-10 items-start max-w-[1000px] mt-5">
            {/* Left Side Image */}
            <div className="img-container w-[250px] h-auto">
              <img 
                src="img/Kalimantan Timur.png" 
                alt="Logo Ragam Kaltim" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            
            {/* Right Side Text */}
            <div className="description flex-1">
              <p className="leading-relaxed text-justify text-black font-normal">
                Selamat datang di <strong>Ragam Kaltim</strong>, sebuah website informatif yang memberikan 
                panduan komprehensif tentang wisata dan budaya yang ada di 10 kota dan kabupaten di 
                Provinsi Kalimantan Timur. Ragam Kaltim didedikasikan untuk mempromosikan kekayaan alam 
                dan keindahan wisata di Kalimantan Timur, mulai dari wisata alam, sejarah, hingga budaya lokal.
              </p>
              <p className="mt-4 leading-relaxed text-justify text-black font-normal">
              Di website ini, kami menyajikan informasi lengkap tentang setiap daerah di Kalimantan Timur, termasuk rekomendasi destinasi wisata unggulan yang cocok untuk berbagai jenis petualangan. 
              Mulai dari pantai yang memesona, hutan lindung yang asri, pulau-pulau eksotis, hingga tempat rekreasi yang penuh dengan aktivitas seru. 
              Kami hadir untuk memudahkan para wisatawan dalam menjelajahi keindahan tersembunyi di setiap sudut Kalimantan Timur, 
              sehingga setiap perjalanan Anda dapat menjadi pengalaman yang tak terlupakan.
              </p>
            </div>
          </div>
        </div>
    );
};


  const About1 = () => {
    return (
        <div>
            <Header />
            <About />
            <Footer />
        </div>
    );
};

export default About1;