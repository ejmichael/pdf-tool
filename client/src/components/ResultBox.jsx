import React from 'react'

const ResultBox = ({ downloadUrl, setDownloadUrl }) => {
  return (
   <div className="flex flex-col items-center space-y-4">
    <p className='text-lg'>Your PDF is ready to be downloaded.</p>
      <a href={downloadUrl} download="compressed.pdf" className='w-full'>
        <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-xl w-full font-semibold">
          Download Compressed PDF
        </button>
      </a>
      <button
        onClick={() => setDownloadUrl(null)}
        className="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded-xl w-full font-semibold"
      >
        Compress Another PDF
      </button>
    </div>
  )
}

export default ResultBox