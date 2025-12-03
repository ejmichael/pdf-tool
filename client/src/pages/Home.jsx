import React, { useState } from "react";
import UploadBox from "../components/UploadBox";
import ResultBox from "../components/ResultBox";
import ToolCard from "../components/ToolCard";
import { Link } from "react-router-dom";

const Home = () => {
  const [downloadUrl, setDownloadUrl] = useState(null);

  const featuredTools = [
    { title: "Compress PDF", description: "Reduce PDF file size quickly.", route: "/tools/compress" },
    { title: "Merge PDFs", description: "Combine multiple PDFs into one.", route: "/tools/merge" },
    { title: "Split PDFs", description: "Split your PDF into separate pages.", route: "/tools/split" },
  ];

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
          <div className="mb-6 flex justify-center">
            <div className="w-full h-24 bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
              Top Ad Placeholder
            </div>
          </div>

          {!downloadUrl ? (
            <UploadBox
                setDownloadUrl={setDownloadUrl}
                multiple={false}                 // single file upload for compression
                apiEndpoint="/api/compress"      // backend route for compression
                buttonText="Compress PDF"        // button text
                downloadFileName="compressed.pdf" // downloaded file name
            />
          ) : (
            <ResultBox
                downloadUrl={downloadUrl}
                setDownloadUrl={setDownloadUrl}
                toolName="Compressed PDF"
            />
          )}

          <div className="mt-6 flex justify-center">
            <div className="w-full h-24 bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
              Bottom Ad Placeholder
            </div>
          </div>
        </div>

        {/* Featured Tools */}
        <section className="w-full max-w-5xl mt-16 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Other PDF Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {featuredTools.map((tool) => (
              <ToolCard
                key={tool.title}
                title={tool.title}
                description={tool.description}
                route={tool.route}
              />
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link to="/tools" className="text-blue-600 font-semibold hover:underline">
              See all PDF Tools
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-16 mb-8 text-gray-500 text-sm text-center">
        © {new Date().getFullYear()} PDF Compressor. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
