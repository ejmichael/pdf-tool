import React from 'react'

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      <header className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Privacy Policy
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Your privacy and file security matter. Learn how PDF Tool handles data
          and processes your files safely.
        </p>
      </header>

      <div className="max-w-3xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-4">Introduction</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          PDF Tool provides free online tools to compress, merge, split,
          convert, and manage PDF files. We are committed to keeping your data
          private and ensuring all file processing remains secure and temporary.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">File Processing & Storage</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Any files you upload (PDFs, images, or documents) are processed
          temporarily on our server for the selected tool. Once the process
          is complete and your download is delivered:
        </p>
        <ul className="list-disc ml-6 text-gray-700 mb-4">
          <li>Files are automatically deleted from our system</li>
          <li>No files are stored permanently</li>
          <li>No files are viewed, shared, or used for any other purpose</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Personal Data</h2>
        <p className="text-gray-700 mb-4">
          We do not collect any personal data unless you voluntarily contact us
          or submit information through a form on the website.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Cookies & Analytics</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          PDF Tool may use basic cookies or third-party services such as
          Google Analytics or Google AdSense (for advertising). These tools
          may collect anonymous usage data such as:
        </p>
        <ul className="list-disc ml-6 text-gray-700 mb-4">
          <li>Browser type</li>
          <li>Device information</li>
          <li>Pages visited</li>
          <li>Non-identifiable usage statistics</li>
        </ul>
        <p className="text-gray-700 mb-4">
          This information helps improve the service and support ad display.
          No personally identifiable information is collected.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Third-Party Services</h2>
        <p className="text-gray-700 mb-4">
          Some external providers (e.g., Google AdSense) may use cookies to
          deliver relevant ads. You can manage or disable ad personalization
          through your Google account settings.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Contact</h2>
        <p className="text-gray-700 mb-1">
          If you have questions or privacy concerns, contact us at:
        </p>
        <p className="text-gray-800 font-semibold">support@pdftool.com</p>
      </div>
    </div>
  )
}

export default Privacy
