import React from 'react'

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      <header className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Terms of Service
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Please read the terms below before using any of the PDF Tool services.
        </p>
      </header>

      <div className="max-w-3xl mx-auto p-6">

        <h2 className="text-3xl font-bold mb-4">1. Acceptance of Terms</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          By accessing or using PDF Tool, you agree to be bound by these Terms
          of Service. If you do not agree, you may not use the website or any
          of its features.
        </p>

        <h2 className="text-3xl font-bold mb-4 mt-10">2. Use of Services</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          PDF Tool provides free online utilities such as PDF compression,
          merging, splitting, JPG-to-PDF, PDF-to-JPG, and other document
          processing tools. These services are intended for lawful use only.
        </p>

        <h2 className="text-2xl font-semibold mb-3 mt-8">User Responsibilities</h2>
        <ul className="list-disc ml-6 text-gray-700 mb-4">
          <li>You agree not to upload illegal, harmful, or copyrighted content without permission.</li>
          <li>You are responsible for the files you upload and process through the site.</li>
          <li>You must not attempt to misuse, disrupt, or reverse-engineer the service.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3 mt-8">Temporary File Handling</h2>
        <p className="text-gray-700 mb-4">
          Uploaded files are processed temporarily and deleted automatically
          after the operation is complete. PDF Tool does not store, view,
          access, or share your files at any time.
        </p>

        <h2 className="text-3xl font-bold mb-4 mt-10">3. No Warranty</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          All tools are provided on an “as-is” and “as available” basis. We make
          no guarantees regarding:
        </p>
        <ul className="list-disc ml-6 text-gray-700 mb-4">
          <li>Availability or uptime of the service</li>
          <li>Speed of processing</li>
          <li>Accuracy or reliability of the output</li>
        </ul>

        <h2 className="text-3xl font-bold mb-4 mt-10">4. Limitation of Liability</h2>
        <p className="text-gray-700 mb-4">
          PDF Tool is not responsible for:
        </p>
        <ul className="list-disc ml-6 text-gray-700 mb-4">
          <li>Loss or corruption of your files</li>
          <li>Security issues arising from your device or network</li>
          <li>Any damage, direct or indirect, caused by using the site</li>
        </ul>
        <p className="text-gray-700 mb-4">
          You use the services entirely at your own risk.
        </p>

        <h2 className="text-3xl font-bold mb-4 mt-10">5. Third-Party Services & Ads</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          PDF Tool may use third-party services such as Google Analytics or
          Google AdSense. These services may collect anonymous usage data or use
          cookies to deliver relevant advertisements. We do not control or store
          data collected by third parties.
        </p>

        <h2 className="text-3xl font-bold mb-4 mt-10">6. Modifications</h2>
        <p className="text-gray-700 mb-4">
          We may update or change these Terms at any time. Continued use of the
          website after changes means you accept the updated terms.
        </p>

        <h2 className="text-3xl font-bold mb-4 mt-10">7. Contact</h2>
        <p className="text-gray-700">
          For questions about these Terms, contact us at:{' '}
          <span className="font-semibold">support@pdftool.com</span>
        </p>

      </div>
    </div>
  )
}

export default Terms
