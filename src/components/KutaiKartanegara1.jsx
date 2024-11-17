import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const KutaiKartanegara = () => {
    return (
      <div className="bg-gray-100"> {/* Corrected className */}
      <div className="content-container flex justify-between py-8 max-w-[1300px] mx-auto gap-7">
        {/* Main Content */}
        <div className="main-content flex-[3] bg-white p-5 rounded-lg shadow-lg">
           {/* Breadcrumb Navigation */}
           <nav className="text-sm mb-5 text-gray-600">
                            <Link to="/" className="hover:underline">Home</Link> 
                            <span className="mx-2">{'>>'}</span>
                            <Link to="/kutai-kartanegara" className="hover:underline font-semibold">Kutai Kartanegara</Link>
                        </nav>
          <h1 className="text-center mb-2 text-3xl font-bold font-arial">Kabupaten Kutai Kartanegara</h1>
  
          <h2 className="text-left mb-5 text-2xl font-semibold">Sejarah</h2>
          <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
            Kabupaten Kutai Kartanegara, juga dikenal sebagai Kukar, memiliki sejarah panjang sebagai salah satu
            kerajaan tertua di Indonesia, yakni Kerajaan Kutai. Kini, Kukar adalah pusat ekonomi dan pertanian di
            Kalimantan Timur dengan sumber daya alam melimpah.
          </p>
  
          <h2 className="text-left mb-5 text-2xl font-semibold">Geografis</h2>
          <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
            Kabupaten ini memiliki luas wilayah sekitar 27.263 km² dengan berbagai topografi, mulai dari hutan,
            sungai, hingga pegunungan. Sungai Mahakam menjadi ikon geografis yang juga menjadi pusat aktivitas
            ekonomi di wilayah ini.
          </p>
  
          <h2 className="text-left mb-5 text-2xl font-semibold">Wisata di Kutai Kartanegara</h2>
          <p className="leading-relaxed mb-8">
            Beberapa destinasi wisata populer di Kukar antara lain:
          </p>
  
          <div className="wisata">
  <ul className="list-none p-0">
    {[
      {
        title: "Bukit Bangkirai",
        imgSrc: "img/kukar/bukit bangkirai.jpg",
        address: "Alamat: Kelurahan Karya Merdeka, Kecamatan Samboja, Kabupaten Kutai Kartanegara.",
        linkPage: "/bukit-bangkirai",
      },
      {
        title: "Museum Mulawarman",
        imgSrc: "img/kukar/museum mulawarman.jpg",
        address: "Alamat: Jalan Diponegoro, Kelurahan Panji, Kecamatan Tenggarong, Kabupaten Kutai Kartanegara.",
        linkPage: "/museum-mulawarman",
      },
      {
        title: "Pantai Ambalat",
        imgSrc: "img/kukar/pantai ambalat.jpeg",
        address: "Alamat: Kelurahan Amborawang Laut, Kecamatan Samboja, Kabupaten Kutai Kartanegara.",
        linkPage: "/pantai-ambalat",
      },
      {
        title: "Pulau Kumala",
        imgSrc: "img/kukar/pulau kumala.jpeg",
        address: "Alamat: Kelurahan Timbau, Kecamatan Tenggarong, Kabupaten Kutai Kartanegara.",
        linkPage: "/pulau-kumala",
      },
      {
        title: "Taman Kota Raja",
        imgSrc: "img/kukar/taman kota raja.jpg",
        address: "Alamat: Jalan Robert Wolter Mongisidi, Kelurahan Timbau, Kecamatan Tenggarong, Kabupaten Kutai Kartanegara.",
        linkPage: "/taman-kota-raja",
      },
    ]
      .sort((a, b) => a.title.localeCompare(b.title))
      .map((place, index) => (
        <li key={index} className="mt-5 font-bold">
          <strong>{place.title}</strong>
          <div className="img-container my-2 text-center">
            <a href={place.linkPage}>
              <img
                src={place.imgSrc}
                alt={place.title}
                className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto cursor-pointer"
              />
            </a>
          </div>
          <p className="mb-1 text-black leading-6 font-normal">{place.address}</p>
          <p className="mb-5 text-blue-600">
            <a href={place.linkPage} target="_self">
              Selengkapnya
            </a>
          </p>
        </li>
      ))}
  </ul>
</div>
        </div>
  
        {/* Profile Card */}
        <ProfileCardKutaiKartanegara />
      </div>
      </div>
    );
  };
  
  const ProfileCardKutaiKartanegara = () => {
    return (
      <aside className="flex justify-center">
               <article className="bg-white p-3 rounded-lg shadow-md text-center w-[350px] h-[700px]">
          <h2 className="mt-0 text-2xl font-bold">Kabupaten <br/> Kutai Kartanegara</h2>
          <p className="mt-1 text-lg text-gray-700">Kalimantan Timur</p>
          <figure className="text-center my-4">
            <img
              src="img/kukar/logo kutai kartanegara.png"
              alt="Lambang Kabupaten Kutai Kartanegara"
             className="mx-auto max-w-[150px] h-auto"
            />
           <figcaption className="mt-2 text-sm text-gray-600">
              Lambang Kabupaten Kutai Kartanegara
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
                  <td className="p-2">27.263 km²</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="p-2 bg-gray-100 text-left font-semibold">Populasi</th>
                  <td className="p-2">800.000 jiwa</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="p-2 bg-gray-100 text-left font-semibold">Bupati</th>
                  <td className="p-2">Edi Damansyah</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="p-2 bg-gray-100 text-left font-semibold">Hari Jadi</th>
                  <td className="p-2">7 Juli 1959</td>
                </tr>
              </tbody>
            </table>
          </section>
        </article>
      </aside>
    );
  };  

const KutaiKartanegara1 = () => {
    return (
        <div>
            <Header />
            <KutaiKartanegara />
            <Footer />
        </div>
    );
};

export default KutaiKartanegara1;
