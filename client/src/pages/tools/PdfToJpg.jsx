import React, { useState } from "react";
import UploadBox from "../../components/UploadBox";
import ResultBox from "../../components/ResultBox";

const PdfToJpg = () => {
  const [downloadUrl, setDownloadUrl] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4">
      {/* Hero Header */}
      <header className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          PDF to JPG
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Convert your PDF pages into high-quality JPG images. Fast, secure, and easy to use.
        </p>
      </header>

      {/* Main Tool Section */}
      <main className="w-full flex flex-col items-center p-4 -mt-16 z-10">
        <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-lg">

          {/* AdSense Placeholder Top */}
          <div className="mb-6 flex justify-center">
            <div className="w-full h-24 bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
              Top Ad Placeholder
            </div>
          </div>

          {!downloadUrl ? (
            <UploadBox
              setDownloadUrl={setDownloadUrl}
              multiple={false} 
              apiEndpoint="/api/pdf-to-jpg" 
              buttonText="Convert to JPG"
              downloadFileName="converted-images.zip"
            />
          ) : (
            <ResultBox
              downloadUrl={downloadUrl}
              setDownloadUrl={setDownloadUrl}
              toolName="Converted JPG Images"
            />
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
        © {new Date().getFullYear()} PDF to JPG Tool. All rights reserved.
      </footer>
    </div>
  );
};

export default PdfToJpg;
