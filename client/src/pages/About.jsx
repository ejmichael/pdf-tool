import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      <header className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          About PDF Tool
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          A fast, simple, and secure platform packed with tools to convert, 
          compress, and manage PDF files — completely free.
        </p>
      </header>

      <div className="max-w-3xl mx-auto p-6">
        <p className="text-gray-700 mb-4">
          PDF Tool was created to make working with PDF files quick, stress-free, and 
          accessible to everyone. Whether you need to convert a PDF to images, merge 
          documents, compress a file, or split pages, our tools are designed to work 
          instantly without complicated software or sign-ups.
        </p>

        <p className="text-gray-700 mb-4">
          Our mission is to provide a clean, user-friendly toolkit that helps students, 
          professionals, designers, and everyday users manage their PDF files with ease. 
          All processing is handled securely, and your files are automatically deleted 
          shortly after use to protect your privacy.
        </p>

        <p className="text-gray-700 mb-4">
          PDF Tool is fully web-based — no downloads, installations, or accounts needed. 
          Just upload your file, choose your tool, and get your result in seconds.
        </p>

        <p className="text-gray-700">
          We are continuously improving the platform and adding new tools to make your 
          workflow even smoother. Thank you for using PDF Tool — your go-to solution for 
          fast, free, and secure PDF processing.
        </p>
      </div>
    </div>
  )
}

export default About
