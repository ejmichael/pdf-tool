import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';

const PdfToolsDropdown = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 hover:text-blue-600 transition"
      >
        PDF Tools
        <svg
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-56 bg-white border rounded-lg shadow-lg z-50">
          <ul className="py-2 text-sm text-gray-700">
            <li>
              <Link to="/tools/merge" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setOpen(false)}>
                Merge PDF
              </Link>
            </li>
            <li>
              <Link to="/tools/split-pdf" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setOpen(false)}>
                Split PDF
              </Link>
            </li>
            <li>
              <Link to="/tools/delete-pages-from-pdf" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setOpen(false)}>
                Delete Pages
              </Link>
              </li>
          </ul>
        </div>
      )}
    </div>
  );
};


export default PdfToolsDropdown