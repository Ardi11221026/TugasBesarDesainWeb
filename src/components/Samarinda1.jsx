import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';


const Samarinda = () => {
    return (
      <div className="bg-gray-100"> {/* Corrected className */}
      <div className="content-container flex justify-between py-8 max-w-[1300px] mx-auto gap-7">
        {/* Main Content */}
        <div className="main-content flex-[3] bg-white p-5 rounded-lg shadow-lg">
           {/* Breadcrumb Navigation */}
           <nav className="text-sm mb-5 text-gray-600">
                            <Link to="/" className="hover:underline">Home</Link> 
                            <span className="mx-2">{'>>'}</span>
                            <Link to="/samarinda" className="hover:underline font-semibold">Samarinda</Link>
                        </nav>
          <h1 className="text-center mb-2 text-3xl font-bold font-arial">Kota Samarinda</h1>
  
          <h2 className="text-left mb-5 text-2xl font-semibold">Sejarah</h2>
          <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
            Samarinda adalah ibu kota Provinsi Kalimantan Timur dan merupakan kota terbesar di provinsi tersebut. 
            Didirikan pada abad ke-17, Samarinda memiliki sejarah yang panjang sebagai pusat perdagangan dan pelabuhan. 
            Pada masa kolonial, Samarinda berkembang sebagai pusat industri kayu dan tambang batu bara. 
            Saat ini, kota ini dikenal sebagai pusat bisnis dan pemerintahan di Kalimantan Timur, serta berperan penting dalam pembangunan Ibu Kota Nusantara (IKN) yang berlokasi di Kalimantan.
          </p>
  
          <h2 className="text-left mb-5 text-2xl font-semibold">Geografis</h2>
          <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
            Samarinda terletak di bagian timur Pulau Kalimantan dengan luas wilayah sekitar 718 km². 
            Kota ini dilewati oleh Sungai Mahakam yang menjadi ikon dan jalur transportasi utama di Samarinda. 
            Iklim tropis yang dimilikinya menjadikan kota ini memiliki curah hujan tinggi dan suhu rata-rata berkisar antara 26–30°C. 
            Topografinya terdiri dari dataran rendah di pinggir sungai dan perbukitan di area pinggiran kota.
          </p>
  
          <h2 className="text-left mb-5 text-2xl font-semibold">Wisata di Samarinda</h2>
          <p className="leading-relaxed mb-8">
            Samarinda menawarkan berbagai destinasi wisata menarik yang bisa kalian dikunjungi, antara lain:
          </p>
  
          <div className="wisata">
            <ul className="list-none p-0">
              {[
                {
                  title: "Masjid Islamic Center Samarinda",
                  imgSrc: "img/smd/islamic center.jpg",
                  description:
                    "Salah satu masjid terbesar di Asia Tenggara dengan arsitektur megah yang menjadi ikon wisata religi di Samarinda.",
                },
                {
                  title: "Tepian Mahakam",
                  imgSrc: "img/smd/taman tepian mahakam.jpg",
                  description:
                    "Kawasan tepi sungai yang indah, populer untuk bersantai dan menikmati pemandangan Sungai Mahakam yang membentang luas.",
                },
                {
                  title: "Air Terjun Tanah Merah",
                  imgSrc: "img/smd/air terjun tanah merah.jpg",
                  description:
                    "Objek wisata alam yang menawarkan keindahan air terjun dan suasana alami di sekitar hutan tropis Samarinda.",
                },
                // Tambahkan tempat lain di sini jika perlu...
              ].map((place, index) => (
                <li key={index} className="mt-5 font-bold">
                  <strong>{place.title}</strong>
                  <div className="img-container my-2 text-center">
                    <img
                      src={place.imgSrc}
                      alt={place.title}
                      className="w-full max-w-[800px] h-auto rounded-lg mx-auto"
                    />
                  </div>
                  <p className="mb-5 text-gray-700 leading-6 font-normal">{place.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
  
        {/* Profile Card */}
        <ProfileCard />
      </div>
      </div>
    );
  };
  
  const ProfileCard = () => {
    return (
      <aside className="flex justify-center">
        <article className="bg-white p-3 rounded-lg shadow-md text-center w-[350px] h-[700px]">
          <h2 className="mt-0 text-2xl font-bold">Kota Samarinda</h2>
          <p className="mt-1 text-lg text-gray-700">Mahakam River City</p>
          <figure className="text-center my-4">
            <img
              src="img/smd/logo samarinda.png"
              alt="Lambang Kota Samarinda"
              className="mx-auto max-w-[150px] h-auto"
            />
            <figcaption className="mt-2 text-sm text-gray-600">
              Lambang Kota Samarinda
            </figcaption>
          </figure>
          <section className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800">Informasi</h3>
            <table className="w-full border-collapse mt-4">
              <tbody>
                <tr className="border-b border-gray-200">
                  <th className="p-2 bg-gray-100 text-left font-semibold">Negara</th>
                  <td className="p-2">Indonesia</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="p-2 bg-gray-100 text-left font-semibold">Provinsi</th>
                  <td className="p-2">Kalimantan Timur</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="p-2 bg-gray-100 text-left font-semibold">Luas Wilayah</th>
                  <td className="p-2">718 km²</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="p-2 bg-gray-100 text-left font-semibold">Populasi</th>
                  <td className="p-2">827,994 jiwa</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="p-2 bg-gray-100 text-left font-semibold">Wali Kota</th>
                  <td className="p-2">Andi Harun</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="p-2 bg-gray-100 text-left font-semibold">Hari Jadi</th>
                  <td className="p-2">21 Januari 1668</td>
                </tr>
              </tbody>
            </table>
          </section>
        </article>
      </aside>
    );
  };  


const Samarinda1 = () => {
    return (
        <div>
            <Header />
            <Samarinda />
            <Footer />
        </div>
    );
};

export default Samarinda1;
