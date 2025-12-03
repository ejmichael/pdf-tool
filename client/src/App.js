import React, { useState } from "react";
import UploadBox from "./components/UploadBox";
import ResultBox from "./components/ResultBox";

function App() {
  const [downloadUrl, setDownloadUrl] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      
      {/* Hero Header */}
      <header className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          PDF Compressor
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Compress your PDF files online quickly and easily. Free, fast, and secure PDF compression.
        </p>
      </header>

      {/* Main Tool Section */}
      <main className="w-full flex flex-col items-center p-4 -mt-16 z-10">
        <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-lg">
          
          {/* AdSense Placeholder Top */}
          <div className="mb-6 flex justify-center">
            {/* Replace with Google AdSense code after approval */}
            <div className="w-full h-24 bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
              Top Ad Placeholder
            </div>
          </div>

          {!downloadUrl ? (
            <UploadBox setDownloadUrl={setDownloadUrl} />
          ) : (
            <ResultBox downloadUrl={downloadUrl} setDownloadUrl={setDownloadUrl} />
          )}

          {/* AdSense Placeholder Bottom */}
          <div className="mt-6 flex justify-center">
            <div className="w-full h-24 bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
              Bottom Ad Placeholder
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 mb-8 text-gray-500 text-sm text-center">
        © {new Date().getFullYear()} PDF Compressor. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
