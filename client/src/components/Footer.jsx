import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-3">PDF Tool</h3>
          <p className="text-gray-400">
            Free, fast, and secure tools to manage your PDF files — all in one place.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:text-white transition">About</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
            <li><Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white transition">Terms of Service</Link></li>
            <li><Link to="/cookies" className="hover:text-white transition">Cookie Policy</Link></li>
          </ul>
        </div>

        {/* Copyright */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Legal</h4>
          <p className="text-gray-400 mb-2">
            All tools are provided “as-is”. Files are deleted automatically after processing.
          </p>
          <p className="text-gray-500 mt-4">
            © {year} PDF Tool. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
