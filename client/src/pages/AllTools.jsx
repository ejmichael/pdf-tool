import React from "react";
import ToolCard from "../components/ToolCard";

const tools = [
  { title: "Compress PDF", description: "Reduce PDF file size quickly and easily.", route: "/tools/compress" },
  { title: "Merge PDFs", description: "Combine multiple PDFs into one file.", route: "/tools/merge" },
  { title: "Split PDFs", description: "Split your PDF into separate pages.", route: "/tools/split" },
  { title: "PDF → Word", description: "Convert PDF files into editable Word documents.", route: "/tools/pdf-to-word" },
  { title: "Word → PDF", description: "Convert Word documents to PDF quickly.", route: "/tools/word-to-pdf" },
  { title: "PDF → JPG", description: "Convert PDF pages into JPG images.", route: "/tools/pdf-to-jpg" },
  { title: "JPG → PDF", description: "Combine JPG images into a single PDF file.", route: "/tools/jpg-to-pdf" },
];

const AllTools = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4">
      <header className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">All PDF Tools</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          A complete suite of online PDF tools — compress, merge, split, convert, and more.
        </p>
      </header>

      <main className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 mb-16">
        {tools.map((tool) => (
          <ToolCard
            key={tool.title}
            title={tool.title}
            description={tool.description}
            route={tool.route}
          />
        ))}
      </main>
    </div>
  );
};

export default AllTools;
