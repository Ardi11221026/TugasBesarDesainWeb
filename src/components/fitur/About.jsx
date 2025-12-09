import React from 'react';
import Header from '../fitur/Header';
import Footer from '../fitur/Footer';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <AboutContent />
      </main>
      <Footer />
    </div>
  );
};

const AboutContent = () => {
  return (
    <div className="main-content flex-[3] bg-gradient-to-b from-gray-50 to-gray-100 p-6 sm:p-8 lg:p-10 shadow-lg flex flex-col items-center w-full">
      <h1 className="text-center mb-4 text-2xl sm:text-3xl lg:text-4xl font-bold">
        Tentang Kami
      </h1>

      <div className="about-content flex flex-col lg:flex-row gap-6 lg:gap-10 items-center lg:items-start max-w-[1000px] mt-5">
        {/* Left Side Image */}
        <div className="img-container w-[180px] sm:w-[220px] lg:w-[250px] h-auto flex-shrink-0">
          <img
            src="img/ragam kaltim.png"
            alt="Logo Ragam Kaltim"
            className="w-full h-auto rounded-xl shadow-md"
          />
        </div>

        {/* Right Side Text */}
        <div className="description flex-1 text-sm sm:text-base bg-white p-6 rounded-xl shadow-md">
          <p className="leading-relaxed text-justify text-gray-800 font-normal">
            Selamat datang di <strong className="text-red-600">Ragam Kaltim</strong>, sebuah website informatif yang memberikan
            panduan komprehensif tentang wisata dan budaya yang ada di 10 kota dan kabupaten di
            Provinsi Kalimantan Timur. Ragam Kaltim didedikasikan untuk mempromosikan kekayaan alam
            dan keindahan wisata di Kalimantan Timur, mulai dari wisata alam, sejarah, hingga budaya lokal.
          </p>
          <p className="mt-4 leading-relaxed text-justify text-gray-800 font-normal">
            Di website ini, kami menyajikan informasi lengkap dan mendalam tentang setiap daerah di Kalimantan Timur, memberikan wawasan berharga bagi para wisatawan yang ingin mengeksplorasi pesona alam dan budaya di kawasan ini. 
            Mulai dari pantai-pantai memesona dengan pasir putih dan air jernih, hutan lindung yang rimbun dan menjadi rumah bagi flora serta fauna langka, 
            hingga pulau-pulau eksotis yang menawarkan ketenangan dan keindahan yang tak tertandingi, semuanya kami rangkum dalam panduan yang mudah diakses. 
            Tak hanya itu, kami juga merekomendasikan berbagai tempat rekreasi dengan aktivitas seru, mulai dari wisata sejarah, kuliner khas, 
            hingga petualangan outdoor yang memacu adrenalin.
          </p>
        </div>
      </div>

      <div className="team-section mt-10 w-full text-center px-4">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6">Tim Kami</h2>
        <div className="team-members grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto">
          <ProfileCard
            image="img/ardi.jpg"
            name="Ardi Dwi Saputra"
            nim="NIM 11221026"
          />
          <ProfileCard
            image="img/rianto.jpg"
            name="Rianto Padli"
            nim="NIM 11221049"
          />
          <ProfileCard
            image="img/arya.jpg"
            name="Arya Andhika Trisnawan"
            nim="NIM 11221054"
          />
          <ProfileCard
            image="img/samuel.jpg"
            name="Samuel Benedicto Siahaan"
            nim="NIM 11221064"
          />
        </div>
      </div>
    </div>
  );
};

const ProfileCard = ({ image, name, nim }) => {
  return (
    <div className="team-member bg-white p-4 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 flex flex-col items-center border border-gray-100">
      <img
        src={image}
        alt={name}
        className="w-[200px] h-[200px] object-cover object-center rounded-lg mb-3"
      />
      <p className="text-base font-semibold text-gray-900">{name}</p>
      <p className="text-sm text-gray-600">{nim}</p>
    </div>
  );
};

export default About;
