import React from "react";
import logo from "../assets/images/Logo Kabupaten Penajam Paser Utara.png";

function ProfileCard() {
  return (
    <article className="profile card">
      <header>
        <h2>Kabupaten Penajam Paser Utara</h2>
        <p>Benuo Taka</p>
        <figure>
          <img src={logo} alt="Lambang Kabupaten" />
          <figcaption>Lambang</figcaption>
        </figure>
      </header>
      <section>
        <h3>Informasi Lainnya</h3>
        <table>
          <tr><th>Negara</th><td>Indonesia</td></tr>
          <tr><th>Hari jadi</th><td>11 Maret 2002</td></tr>
          <tr><th>Luas Total</th><td>3.333,06 km²</td></tr>
          <tr><th>Bahasa Daerah</th><td>Paser</td></tr>
          <tr><th>Kode Telepon</th><td>0542 dan 0543</td></tr>
        </table>
      </section>
    </article>
  );
}

export default ProfileCard;
