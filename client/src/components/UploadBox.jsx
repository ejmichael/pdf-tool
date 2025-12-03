import React, { useState } from 'react'
import axios from "axios";

const UploadBox = ({ setDownloadUrl }) => {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false)

    const domain = window.location.href.includes('localhost') ? "http://localhost:5000" : "https://pdf-tool-uuw5.onrender.com";


    const handleUpload = async () => {
        if (!file) return;

        setLoading(true);

        const form = new FormData();

        form.append("file", file)

        const res = await axios.post(
            domain + "/api/compress",
            form,
            {
                responseType: "blob"
            }
        );

        const url = window.URL.createObjectURL(new Blob([res.data]));
        setDownloadUrl(url);
        setLoading(false);
    }

  return (
 <div className="flex flex-col items-center justify-center space-y-4">
      <label className="w-full min-h-[200px] justify-center border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition">
        <svg
          className="w-12 h-12 mb-3 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 12v8m0-8L8 8m4 4 4-4m-4 4V4" />
        </svg>
        <span className="text-gray-600">
          {file ? file.name : "Drag & drop a PDF here or click to select"}
        </span>
        <input
          type="file"
          accept="application/pdf"
          className="hidden"
          onChange={(e) => setFile(e.target.files[0])}
        />
      </label>

      <button
        onClick={handleUpload}
        disabled={loading || !file}
        className={`w-full py-2 px-4 rounded-xl text-white font-semibold transition ${
          loading || !file ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? "Compressing..." : "Compress PDF"}
      </button>
    </div>
  )
}

export default UploadBox