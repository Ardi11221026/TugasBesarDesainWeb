import React from "react";

function Header() {
  return (
    <header>
      <div className="jumbotron">
        <h1>Penajam Paser Utara</h1>
        <p>Benuo Taka</p>
      </div>
      <nav>
        <ul>
          <li><a href="#sejarah">Sejarah</a></li>
          <li><a href="#geografis">Geografis</a></li>
          <li><a href="#wisata">Wisata</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
