import React from "react";

const ResultBox = ({ downloadUrl, setDownloadUrl, toolName = "PDF" }) => {
  if (!downloadUrl) return null;

  return (
    <div className="flex flex-col items-center space-y-4 w-full">
      <p className="text-lg">Your {toolName} is ready to be downloaded.</p>

      <a
        href={downloadUrl.url}
        download={downloadUrl.name}
        className="w-full"
      >
        <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-xl font-semibold">
          Download {downloadUrl.name}
        </button>
      </a>

      <button
        onClick={() => setDownloadUrl(null)}
        className="w-full bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded-xl font-semibold"
      >
        {toolName.includes("PDF") ? `Upload Another ${toolName}` : "Try Again"}
      </button>
    </div>
  );
};

export default ResultBox;
