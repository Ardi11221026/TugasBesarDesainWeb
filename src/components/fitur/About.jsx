import React, { useState, useEffect } from 'react';
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
    <div className="main-content flex-[3] bg-[#2c5845] p-6 sm:p-8 lg:p-10 shadow-lg flex flex-col items-center w-full">
      <h1 className="text-center mb-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
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
        <div className="description flex-1 text-sm sm:text-base bg-[#102c1e] p-6 rounded-xl shadow-md border border-white">
          <p className="leading-relaxed text-justify text-white font-normal">
            Selamat datang di <strong className="text-orange-400">Ragam Kaltim</strong>, sebuah website informatif yang memberikan
            panduan komprehensif tentang wisata dan budaya yang ada di 10 kota dan kabupaten di
            Provinsi Kalimantan Timur. Ragam Kaltim didedikasikan untuk mempromosikan kekayaan alam
            dan keindahan wisata di Kalimantan Timur, mulai dari wisata alam, sejarah, hingga budaya lokal.
          </p>
          <p className="mt-4 leading-relaxed text-justify text-white font-normal">
            Di website ini, kami menyajikan informasi lengkap dan mendalam tentang setiap daerah di Kalimantan Timur, memberikan wawasan berharga bagi para wisatawan yang ingin mengeksplorasi pesona alam dan budaya di kawasan ini. 
            Mulai dari pantai-pantai memesona dengan pasir putih dan air jernih, hutan lindung yang rimbun dan menjadi rumah bagi flora serta fauna langka, 
            hingga pulau-pulau eksotis yang menawarkan ketenangan dan keindahan yang tak tertandingi, semuanya kami rangkum dalam panduan yang mudah diakses. 
            Tak hanya itu, kami juga merekomendasikan berbagai tempat rekreasi dengan aktivitas seru, mulai dari wisata sejarah, kuliner khas, 
            hingga petualangan outdoor yang memacu adrenalin.
          </p>
        </div>
      </div>

      <div className="team-section mt-10 w-full text-center px-4">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-white">Tim Kami</h2>
        <div className="team-members grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto">
          <ProfileCard
            image="img/ardi.jpg"
            name="Ardi Dwi Saputra"
            nim="NIM 11221026"
            role="Frontend Developer"
            technologies="HTML, CSS, React.js, Python"
            description="Nama saya Ardi Dwi Saputra. Saya seorang Mahasiswa Institut Teknologi Kalimantan, Program Studi Informatika. Saya hanyalah mahasiswa biasa-biasa saja."
            linkedin="https://www.linkedin.com/in/ardidwi8104"
            github="https://www.github.com/ardidwi8104"
            instagram="https://www.instagram.com/ardi_dwi8104"
            whatsapp="https://wa.me/62895342503504"
          />
          <ProfileCard
            image="img/rianto.jpg"
            name="Rianto Padli"
            nim="NIM 11221049"
            role="Frontend Developer"
            technologies="HTML, React.js, CSS"
            description="Saya seorang Mahasiswa Institut Tekhnologi Kalimantan Program Studi Informatika tahun 2022. Saya Sekarang di ITK telah menenmpuh sekitar 2,5 tahun atau telah semester 5."
            linkedin="https://www.linkedin.com/in/rianto-padli-07b7262a0/"
            github="https://github.com/riantopadli11"
            instagram="https://www.instagram.com/_padlay"
            whatsapp="https://wa.me/6282157612739"
          />
          <ProfileCard
            image="img/arya.jpg"
            name="Arya Andhika Trisnawan"
            nim="NIM 11221054"
            role="Frontend Developer"
            technologies="React.js, Python"
            description="Hai! saya adalah mahasiswa semester 5 Institut Teknologi Kalimantan dengan hobi mencari uang dan memiliki keahlian dalam membuat web."
            linkedin="https://linkedin.com/in/arya-andhika"
            github="https://github.com/AryaAT551"
            instagram="https://www.instagram.com/arya_a.t/profilecard/?igsh=MWk4b2d5YnF1a2lpeg=="
            whatsapp="https://wa.me/6281549373141"
          />
          <ProfileCard
            image="img/samuel.jpg"
            name="Samuel Benedicto Siahaan"
            nim="NIM 11221064"
            role="Frontend Developer"
            technologies="React.js, HTML, CSS"
            description="Saya merupakan mahasiswa di Institut Teknologi Kalimantan dari prodi Informatika dan sekarang saya merupakan mahasiswa semester 5, saya tertarik pada bidang front-End,UI/UX dan juga memiliki ketertarikan pada bidang cybersecurity"
            linkedin="https://www.linkedin.com/in/samuelsiiahaan/"
            github="https://github.com/SamMorales11"
            instagram="https://www.instagram.com/samsiiahaan/"
            whatsapp="https://wa.me/6281545391954"
          />
        </div>
      </div>
    </div>
  );
};

const ProfileCard = ({ image, name, nim, role, technologies, description, linkedin, github, instagram, whatsapp }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  return (
    <div className="team-member bg-[#102c1e] p-4 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 flex flex-col items-center border border-white cursor-pointer" onClick={handleModalOpen}>
      <img
        src={image}
        alt={name}
        className="w-[200px] h-[200px] object-cover object-center rounded-lg mb-3"
      />
      <p className="text-base font-semibold text-white">{name}</p>
      <p className="text-sm text-gray-300">{nim}</p>
      <p className="text-xs text-gray-400 mt-2">{role}</p>
      
      {isModalOpen && (
        <Modal
          onClose={handleModalClose}
          image={image}
          name={name}
          nim={nim}
          role={role}
          technologies={technologies}
          description={description}
          linkedin={linkedin}
          github={github}
          instagram={instagram}
          whatsapp={whatsapp}
        />
      )}
    </div>
  );
};

const Modal = ({ onClose, image, name, nim, role, technologies, description, linkedin, github, instagram, whatsapp }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 0);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={() => {
        setIsVisible(false);
        setTimeout(onClose, 300);
      }}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out',
      }}
    >
      <div
        className="modal-content bg-[#102c1e] p-6 rounded-lg w-80 sm:w-96 border border-white"
        onClick={(e) => e.stopPropagation()}
        style={{
          transform: isVisible ? 'scale(1)' : 'scale(0.9)',
          transition: 'transform 0.3s ease-in-out',
        }}
      >
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold mb-2 text-white">{name}</h3>
        <p className="text-sm text-gray-300 mb-1">{nim}</p>
        <p className="text-sm text-orange-400 font-semibold mb-1">{role}</p>
        <p className="text-xs text-gray-400 mb-3">{technologies}</p>
        <p className="mb-4 text-sm text-white leading-relaxed">{description}</p>
        
        <div className="flex justify-center items-center gap-3 mb-4">
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <img src="/img/linkedin.png" alt="LinkedIn" className="h-8 w-8 hover:scale-110 transition" />
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <img src="/img/github.png" alt="GitHub" className="h-8 w-8 hover:scale-110 transition" />
          </a>
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            <img src="/img/ig.png" alt="Instagram" className="h-8 w-8 hover:scale-110 transition" />
          </a>
          <a href={whatsapp} target="_blank" rel="noopener noreferrer">
            <img src="/img/wa.png" alt="Whatsapp" className="h-8 w-8 hover:scale-110 transition" />
          </a>
        </div>

        <button
          onClick={() => {
            setIsVisible(false);
            setTimeout(onClose, 300);
          }}
          className="w-full px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded font-semibold transition-all duration-300"
        >
          Tutup
        </button>
      </div>
    </div>
  );
};

export default About;
