import React, { useState } from "react";
import UploadBox from "../../components/UploadBox";
import ResultBox from "../../components/ResultBox";

const Protect = () => {
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4">
      {/* Hero */}
      <header className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16 text-center">
        <h1 className="text-5xl font-extrabold mb-4">Protect PDF</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Secure your PDF with a password to prevent unauthorized access.
        </p>
      </header>

      <main className="w-full flex justify-center p-4 -mt-16 z-10">
        <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-lg">
          
          {/* Password Input */}
          <input
            type="password"
            placeholder="Enter password"
            className="w-full mb-4 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <UploadBox
            setDownloadUrl={setDownloadUrl}
            apiEndpoint="/api/protect"
            buttonText="Protect PDF"
            downloadFileName="protected.pdf"
            extraFields={{ password }}
          />

          {downloadUrl && (
            <ResultBox
              downloadUrl={downloadUrl}
              setDownloadUrl={setDownloadUrl}
              toolName="Protected PDF"
            />
          )}
        </div>
      </main>

      <footer className="mt-16 mb-8 text-gray-500 text-sm">
        © {new Date().getFullYear()} PDF Protect Tool
      </footer>
    </div>
  );
};

export default Protect;
