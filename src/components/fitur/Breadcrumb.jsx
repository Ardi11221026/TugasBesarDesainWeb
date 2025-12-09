import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ cityName, cityUrl }) => {
  return (
    <nav className="text-xs sm:text-sm mb-6 text-gray-600">
      <Link to="/" className="hover:underline">Home</Link> 
      <span className="mx-2">{'>>'}</span>
      <Link to={cityUrl} className="hover:underline font-semibold">{cityName}</Link>
    </nav>
  );
};

export default Breadcrumb;
