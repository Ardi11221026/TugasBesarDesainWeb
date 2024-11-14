import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const MahakamUlu = () => {
    return (
      <div className="bg-gray-100"> {/* Corrected className */}
      <div className="content-container flex justify-between py-8 max-w-[1300px] mx-auto gap-7">
        {/* Main Content */}
        <div className="main-content flex-[3] bg-white p-5 rounded-lg shadow-lg">
           {/* Breadcrumb Navigation */}
           <nav className="text-sm mb-5 text-gray-600">
                            <Link to="/" className="hover:underline">Home</Link> 
                            <span className="mx-2">{'>>'}</span>
                            <Link to="/mahakam-ulu" className="hover:underline font-semibold">Mahakam Ulu</Link>
                        </nav>
          <h1 className="text-center mb-2 text-3xl font-bold font-arial">Kabupaten Mahakam Ulu</h1>
  
          <h2 className="text-left mb-5 text-2xl font-semibold">Sejarah</h2>
          <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
            Kabupaten Mahakam Ulu adalah kabupaten termuda di Kalimantan Timur, yang resmi terbentuk pada tahun 2013.
            Wilayah ini sebelumnya merupakan bagian dari Kabupaten Kutai Barat dan dikenal memiliki kekayaan budaya
            Dayak yang sangat khas, dengan tradisi yang masih lestari hingga kini.
          </p>
  
          <h2 className="text-left mb-5 text-2xl font-semibold">Geografis</h2>
          <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
            Mahakam Ulu memiliki wilayah seluas sekitar 15.315 km² yang terdiri dari pegunungan, hutan tropis,
            serta aliran Sungai Mahakam. Letaknya yang terpencil membuat akses ke daerah ini cukup sulit,
            namun hal ini juga melestarikan keanekaragaman hayati dan budaya setempat.
          </p>
  
          <h2 className="text-left mb-5 text-2xl font-semibold">Wisata di Mahakam Ulu</h2>
          <p className="leading-relaxed mb-8">
            Beberapa destinasi wisata di Mahakam Ulu yang populer antara lain:
          </p>
  
          <div className="wisata">
  <ul className="list-none p-0">
    {[
      {
        title: "Batu Dinding Mahakam Ulu",
        imgSrc: "img/mahulu/batu dinding.jpg",
        address: "Alamat: Kecamatan Long Hubung, Kabupaten Mahakam Ulu, Kalimantan Timur.",
        link: "https://maps.app.goo.gl/exampleLink4",
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
              className="w-full max-w-[500px] h-auto rounded-lg mx-auto"
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
        <ProfileCardMahakamUlu />
      </div>
      </div>
    );
  };
  
  const ProfileCardMahakamUlu = () => {
    return (
      <aside className="flex justify-center">
        <article className="bg-white p-3 rounded-lg shadow-md text-center w-[350px] h-[700px]">
          <h2 className="mt-0 text-2xl font-bold">Kabupaten <br/>Mahakam Ulu</h2>
          <p className="mt-1 text-lg text-gray-700">Kalimantan Timur</p>
          <figure className="text-center my-4">
            <img
              src="img/mahulu/logo mahakam ulu.png"
              alt="Lambang Kabupaten Mahakam Ulu"
              className="mx-auto max-w-[150px] h-auto"
            />
           <figcaption className="mt-2 text-sm text-gray-600">
              Lambang Kabupaten Mahakam Ulu
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
                  <td className="p-2">15.315 km²</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="p-2 bg-gray-100 text-left font-semibold">Populasi</th>
                  <td className="p-2">35.000 jiwa</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="p-2 bg-gray-100 text-left font-semibold">Bupati</th>
                  <td className="p-2">Bonifasius Belawan Geh</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="p-2 bg-gray-100 text-left font-semibold">Hari Jadi</th>
                  <td className="p-2">14 Desember 2013</td>
                </tr>
              </tbody>
            </table>
          </section>
        </article>
      </aside>
    );
  };  


const MahakamUlu1 = () => {
    return (
        <div>
            <Header />
            <MahakamUlu />
            <Footer />
        </div>
    );
};

export default MahakamUlu1;
