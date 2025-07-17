import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../fitur/Header';
import Footer from '../fitur/Footer';

const Paser = () => {
    return (
      <div className="bg-gray-100"> {/* Corrected className */}
      <div className="content-container flex justify-between py-8 max-w-[1300px] mx-auto gap-7">
        {/* Main Content */}
        <div className="main-content flex-[3] bg-white p-5 rounded-lg shadow-lg">
           {/* Breadcrumb Navigation */}
           <nav className="text-sm mb-5 text-gray-600">
                            <Link to="/" className="hover:underline">Home</Link> 
                            <span className="mx-2">{'>>'}</span>
                            <Link to="/paser" className="hover:underline font-semibold">Paser</Link>
                        </nav>
          <h1 className="text-center mb-2 text-3xl font-bold font-arial">Kabupaten Paser</h1>
  
          <h2 className="text-left mb-5 text-2xl font-semibold">Sejarah</h2>
          <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
            Kabupaten Paser merupakan kabupaten tertua di Kalimantan Timur, dengan sejarah panjang yang 
            berakar pada Kerajaan Sadurangas. Kabupaten ini resmi terbentuk pada tahun 1959.
          </p>
  
          <h2 className="text-left mb-5 text-2xl font-semibold">Geografis</h2>
          <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
            Paser memiliki luas wilayah sekitar 7.730 km², dengan kontur wilayah yang terdiri dari pegunungan, 
            perbukitan, serta hutan tropis. Wilayah ini juga kaya akan sumber daya alam seperti batu bara.
          </p>
  
          <h2 className="text-left mb-5 text-2xl font-semibold">Wisata di Paser</h2>
          <p className="leading-relaxed mb-8">
            Beberapa destinasi wisata di Paser antara lain:
          </p>
  
          <div className="wisata">
  <ul className="list-none p-0">
    {[
      {
        title: "Air Terjun Doyam Seriam",
        imgSrc: "img/paser/air terjun doyam seriam.jpg",
        address: "Alamat: Desa Modang, Kecamatan Kuaro, Kabupaten Paser.",
        link: "https://maps.app.goo.gl/qt6BZtLwV1st2YMv9",
        pageLink: "/air-terjun-doyam-seriam"
      },
      {
        title: "Gunung Embun",
        imgSrc: "img/paser/gunung embun.jpg",
        address: "Alamat: Desa Luan, Kecamatan Muara Samu, Kabupaten Paser.",
        link: "https://maps.app.goo.gl/H9Ah2wedyxgew5YJ7",
        pageLink: "/gunung-embun"
      },
      {
        title: "Museum Sadurengas",
        imgSrc: "img/paser/museum sadurengas.jpeg",
        address: "Alamat: Jalan Jenderal Sudirman No. 1, Tanah Grogot, Kabupaten Paser.",
        link: "https://maps.app.goo.gl/XrihCFgw6EE38niW8",
        pageLink: "/museum-sadurengas"
      },
      {
        title: "Pantai Pasir Mayang",
        imgSrc: "img/paser/pantai pasir mayang.jpg",
        address: "Alamat: Desa Pasir Mayang, Kecamatan Kuaro, Kabupaten Paser.",
        link: "https://maps.app.goo.gl/JXPQMZ4bGTdwkfTh6",
        pageLink: "/pantai-pasir-mayang"
      },
      {
        title: "Telaga Ungu",
        imgSrc: "img/paser/telaga ungu.jpg",
        address: "Alamat: Desa Tepian Batang, Kecamatan Tanah Grogot, Kabupaten Paser.",
        link: "https://maps.app.goo.gl/EPmHZ4NC3CMW3kXc6",
        pageLink: "/telaga-ungu"
      },
    ]
      .sort((a, b) => a.title.localeCompare(b.title))
      .map((place, index) => (
        <li key={index} className="mt-5 font-bold">
          <strong>{place.title}</strong>
          <div className="img-container my-2 text-center">
            <a href={place.pageLink}>
              <img
                src={place.imgSrc}
                alt={place.title}
                className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto"
              />
            </a>
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
        <ProfileCardPaser />
      </div>
      </div>
    );
  };
  
  const ProfileCardPaser = () => {
    return (
      <aside className="flex justify-center">
        <article className="bg-white p-3 rounded-lg shadow-md text-center w-[350px] h-[700px]">
          <h2 className="mt-0 text-2xl font-bold">Kabupaten Paser</h2>
          <p className="mt-1 text-lg text-gray-700">Kalimantan Timur</p>
          <figure className="text-center my-4">
            <img
              src="img/paser/logo paser.png"
              alt="Lambang Kabupaten Paser"
             className="mx-auto max-w-[150px] h-auto"
            />
            <figcaption className="mt-2 text-sm text-gray-600">
              Lambang Kabupaten Paser
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
                  <td className="p-2">7.730 km²</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="p-2 bg-gray-100 text-left font-semibold">Populasi</th>
                  <td className="p-2">250.000 jiwa</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="p-2 bg-gray-100 text-left font-semibold">Bupati</th>
                  <td className="p-2">Fahmi Fadli</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="p-2 bg-gray-100 text-left font-semibold">Hari Jadi</th>
                  <td className="p-2">29 Desember 1959</td>
                </tr>
              </tbody>
            </table>
          </section>
        </article>
      </aside>
    );
  };  


const Paser1 = () => {
    return (
        <div>
            <Header />
            <Paser />
            <Footer />
        </div>
    );
};

export default Paser1;
