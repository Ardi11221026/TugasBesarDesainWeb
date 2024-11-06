import React from 'react';
import Header from './Header';
import Footer from './Footer';

const PPU = () => {
  return (
    <div className="bg-gray-100"> {/* Corrected className */}
    <div className="content-container flex justify-between py-8 max-w-[1300px] mx-auto gap-7">
      {/* Main Content */}
      <div className="main-content flex-[3] bg-white p-5 rounded-lg shadow-lg">
        <h1 className="text-center mb-2 text-3xl font-bold font-arial">Kabupaten Penajam Paser Utara</h1>

        <h2 className="text-left mb-5 text-2xl font-semibold">Sejarah</h2>
        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
          Penajam Paser Utara, sering disingkat PPU, merupakan salah satu kabupaten di Provinsi Kalimantan Timur. 
          Kabupaten ini secara resmi terbentuk pada tahun 2002, sebagai hasil pemekaran dari Kabupaten Paser. 
          Penajam Paser Utara memiliki peranan penting sebagai area penyangga ibu kota negara baru, yang akan berlokasi di sebagian wilayahnya. 
          Sejarah wilayah ini berkaitan erat dengan perkembangan Kalimantan Timur sebagai pusat pertanian dan perkebunan yang terus berkembang.
        </p>

        <h2 className="text-left mb-5 text-2xl font-semibold">Geografis</h2>
        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
          Penajam Paser Utara terletak di bagian tenggara Provinsi Kalimantan Timur, dengan luas sekitar 3.333 km². 
          Wilayah ini terdiri dari dataran rendah, hutan tropis, dan perbukitan yang kaya akan keanekaragaman hayati. 
          Iklim di Penajam Paser Utara adalah iklim tropis, dengan curah hujan tinggi yang mendukung sektor pertanian dan perkebunan. 
          Berbatasan langsung dengan Teluk Balikpapan, PPU juga memiliki kawasan pesisir yang potensial untuk kegiatan maritim dan wisata.
        </p>

        <h2 className="text-left mb-5 text-2xl font-semibold">Wisata di Penajam Paser Utara</h2>
        <p className="leading-relaxed mb-8">
          Penajam Paser Utara memiliki beberapa destinasi wisata yang menarik untuk dikunjungi, di antaranya:
        </p>

        <div className="wisata">
  <ul className="list-none p-0">
    {[
      {
        title: "Taman Bunga Rozeline",
        imgSrc: "img/taman bunga rozeline.jpg",
        address: "Alamat: Jalan Provinsi KM. 9, Kelurahan Nipah-nipah, Kabupaten Penajam Paser Utara.",
        link: "https://maps.app.goo.gl/i9gQLwVasEUdq7iC9",
      },
      {
        title: "Taman Alun-alun",
        imgSrc: "img/taman alun-alun.jpg",
        address: "Alamat: Jalan Provinsi KM. 9 Depan Kantor Bupati, Kelurahan Nipah-nipah, Kabupaten Penajam Paser Utara.",
        link: "https://maps.app.goo.gl/fvduXnvb4vH2Df6P9",
      },
      {
        title: "Pantai Sipakario Nipah-nipah",
        imgSrc: "img/pantai nipah-nipah.jpg",
        address: "Alamat: Jalan Coastal Road KM. 7 Kelurahan Nipah-nipah, Kabupaten Penajam Paser Utara.",
        link: "https://maps.app.goo.gl/yYXy5RNyTkBV1Lx9A",
      },
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
        <p className="mb-1 text-gray-700 leading-6 font-normal">{place.address}</p>
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
      <ProfileCard />
    </div>
    </div>
  );
};

const ProfileCard = () => {
  return (
    <aside className="flex justify-center">
      <article className="bg-white p-3 rounded-lg shadow-md text-center w-[350px] h-[700px]">
        <h2 className="mt-0 text-2xl font-bold">Kabupaten <br/>Penajam Paser Utara</h2>
        <p className="mt-1 text-lg text-gray-700">Benuo Taka</p>
        <figure className="text-center my-4">
          <img
            src="img/logo ppu.jpeg"
            alt="Lambang Kabupaten Penajam Paser Utara"
            className="mx-auto max-w-[150px] h-auto" 
          />
          <figcaption className="mt-2 text-sm text-gray-600">
            Lambang Kabupaten Penajam Paser Utara
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
                <td className="p-2">3.333 km²</td>
              </tr>
              <tr className="border-b border-gray-200">
                <th className="p-2 bg-gray-100 text-left font-semibold">Populasi</th>
                <td className="p-2">180.000 jiwa</td>
              </tr>
              <tr className="border-b border-gray-200">
                <th className="p-2 bg-gray-100 text-left font-semibold">Bupati</th>
                <td className="p-2">Zainal Arifin (PJ Bupati)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <th className="p-2 bg-gray-100 text-left font-semibold">Hari Jadi</th>
                <td className="p-2">11 Maret 2002</td>
              </tr>
            </tbody>
          </table>
        </section>
      </article>
    </aside>
  );
};

const PPU1 = () => {
    return (
        <div>
            <Header />
            <PPU />
            <Footer />
        </div>
    );
};

export default PPU1;
