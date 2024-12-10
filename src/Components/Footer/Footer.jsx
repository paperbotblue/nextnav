import React from "react";
import { Link } from "react-router-dom";
import Navdata from "../Navbar/Navdata"; 

const Footer = () => {
  return (
    <footer className="w-full h-full">
      <div className="max-w-[120em] bg-gray-900 border-t  border-gray-400 text-white xl:ps-[10em] md:ps-24 mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold uppercase mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {Navdata.map((item, index) => (
            <li key={item.id || index}>
              <Link to={item.add ? item.add : undefined} 
              onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}
              className="hover:underline underline-offset-4">
                {item.buttoname}
              </Link>
            </li>

            ))}
          </ul>
        </div>

        {/* Reports */}
        <div>
          <h3 className="text-lg font-bold uppercase mb-4">Reports</h3>
          <div>
            <img
              src="/path-to-image.jpg"
              alt="Report Preview"
              className="w-full rounded"
            />
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-bold uppercase mb-4">
            Contact Information
          </h3>
          <address className="not-italic space-y-1">
            <p>Business Point Center</p>
            <p>786P+499 بورسعيد - Deira - Dubai - United Arab Emirates</p>
            <p>Tel: +971 4 XXX XXXX</p>
            <p>
              Email:{" "}
              <Link to="mailto:info@qbc.ae" className="hover:underline">
                info@qbc.ae
              </Link>
            </p>
          </address>
        </div>

        {/* Company Info */}
        <div>
          <h3 className="text-lg font-bold uppercase mb-4">About Us</h3>
          <p>
            AL QAYTHARAH BUILDING CONTRACTING (QBC) specializes in high-quality
            construction projects across the UAE. We are committed to delivering
            excellence in every project.
          </p>
        </div>
      </div>

      <div className="bg-gray-800 max-w-[135em] mx-auto lg:ps-44 md:ps-20 text-gray-400 text-sm py-6 px-6 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center">
        <p>
          &copy; 2024 AL QAYTHARAH BUILDING CONTRACTING (QBC). All rights
          reserved.
        </p>
        <div className="flex space-x-4 items-center mt-4 sm:mt-0">
          <span>Part of</span>
          <img src="/path-to-logo.png" alt="Company Logo" className="h-8" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
