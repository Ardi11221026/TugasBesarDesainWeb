import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Bontang = () => {
    return (
    <div className="bg-gray-100"> {/* Corrected className */}
      <div className="content-container flex justify-between py-8 max-w-[1300px] mx-auto gap-7">
        {/* Main Content */}
        <div className="main-content flex-[3] bg-white p-5 rounded-lg shadow-lg">
          <h1 className="text-center mb-2 text-3xl font-bold font-arial">Kota Bontang</h1>
  
          <h2 className="text-left mb-5 text-2xl font-semibold">Sejarah</h2>
          <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
            Kota Bontang adalah salah satu kota di Kalimantan Timur yang memiliki sejarah 
            panjang sebagai kota industri, khususnya dalam sektor gas alam dan pupuk. 
            Kota ini berkembang pesat berkat industri yang menjadi pusat ekonomi utama di wilayah ini.
          </p>
  
          <h2 className="text-left mb-5 text-2xl font-semibold">Geografis</h2>
          <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
            Bontang memiliki luas sekitar 497 km², terdiri dari kawasan industri, perumahan, 
            serta kawasan pesisir. Dengan iklim tropis, kota ini mendukung ekosistem laut yang 
            kaya dan beragam.
          </p>
  
          <h2 className="text-left mb-5 text-2xl font-semibold">Wisata di Bontang</h2>
          <p className="leading-relaxed mb-8">
            Kota Bontang memiliki beberapa destinasi menarik, seperti:
          </p>
  
          <div className="wisata">
  <ul className="list-none p-0">
    {[
      {
        title: "Bontang Kuala",
        imgSrc: "img/bontang/bontang kuala.jpg",
        address: "Alamat: Kelurahan Bontang Kuala, Kecamatan Bontang Utara, Kota Bontang.",
        link: "https://maps.app.goo.gl/sgqPCP3YdHu7ziSH9", // Replace with actual link
      },
      {
        title: "Pulau Beras Basah",
        imgSrc: "img/bontang/pulau beras basah.jpg",
        address: "Alamat: Pulau Beras Basah, Kelurahan Bontang Lestari, Kecamatan Bontang Selatan, Kota Bontang.",
        link: "https://maps.app.goo.gl/DV6XE2VpgcE4mTJ39", // Replace with actual link
      },
      {
        title: "Pantai Marina",
        imgSrc: "img/bontang/pantai marina.jpg",
        address: "Alamat: Jalan Pelabuhan Marina, Kelurahan Satimpo, Kecamatan Bontang Selatan , Kota Bontang.",
        link: "https://maps.app.goo.gl/x45yLGz55Z6xTxmy8", // Replace with actual link
      },
    ]
      .sort((a, b) => a.title.localeCompare(b.title))
      .map((place, index) => (
        <li key={index} className="mt-5 font-bold">
          <strong>{place.title}</strong>
          <div className="img-container my-2 text-center">
            <img
              src={place.imgSrc}
              alt={place.title}
              className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto"
            />
          </div>
          <p className="mb-1 text-black leading-6 font-normal">{place.address}</p>
          <p className="mb-5 text-blue-600">
            <a href={place.link} target="_blank" rel="noopener noreferrer">
              Lihat di Maps
            </a>
          </p>
        </li>
      ))}
  </ul>
</div>
</div>
  
        {/* Profile Card */}
        <ProfileCardBontang />
      </div>
      </div>
    );
  };
  
  const ProfileCardBontang = () => {
    return (
      <aside className="flex justify-center">
              <article className="bg-white p-3 rounded-lg shadow-md text-center w-[350px] h-[700px]">
          <h2 className="mt-0 text-2xl font-bold">Kota Bontang</h2>
          <p className="mt-1 text-lg text-gray-700">Kalimantan Timur</p>
          <figure className="text-center my-4">
            <img
              src="img/bontang/logo bontang.png"
              alt="Lambang Kota Bontang"
             className="mx-auto max-w-[150px] h-auto"
            />
            <figcaption className="mt-2 text-sm text-gray-600">
              Lambang Kota Bontang
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
                  <td className="p-2">497 km²</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="p-2 bg-gray-100 text-left font-semibold">Populasi</th>
                  <td className="p-2">170.000 jiwa</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="p-2 bg-gray-100 text-left font-semibold">Walikota</th>
                  <td className="p-2">Basri Rase</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="p-2 bg-gray-100 text-left font-semibold">Hari Jadi</th>
                  <td className="p-2">12 Oktober 1999</td>
                </tr>
              </tbody>
            </table>
          </section>
        </article>
      </aside>
    );
  };  

const Bontang1 = () => {
    return (
        <div>
            <Header />
            < Bontang/>
            <Footer />
        </div>
    );
};

export default Bontang1;
