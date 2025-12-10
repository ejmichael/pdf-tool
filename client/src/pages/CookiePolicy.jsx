import React from 'react'

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      <header className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Cookie Policy
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          How and why PDF Tool uses cookies and similar technologies.
        </p>
      </header>

      <div className="max-w-3xl mx-auto p-6">
        
        <h2 className="text-3xl font-bold mb-4">1. What Are Cookies?</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Cookies are small text files stored on your device when you visit a
          website. They help websites function, improve performance, and offer a
          better browsing experience. Some cookies are essential, while others
          help with analytics and advertising.
        </p>

        <h2 className="text-3xl font-bold mb-4 mt-10">2. How PDF Tool Uses Cookies</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          PDF Tool aims to keep cookie usage minimal. We do not use cookies to
          track personal files or any uploaded content. However, the following
          types of cookies may be used:
        </p>

        <h3 className="text-2xl font-semibold mb-3">Essential Cookies</h3>
        <p className="text-gray-700 mb-4">
          Used to ensure the website works properly (e.g., navigation,
          interface loading). These cannot be disabled.
        </p>

        <h3 className="text-2xl font-semibold mb-3">Analytics Cookies</h3>
        <p className="text-gray-700 mb-4">
          We may use tools such as Google Analytics to understand how visitors
          use the site. These cookies help us improve site performance but do
          not collect personal files or document content.
        </p>

        <h3 className="text-2xl font-semibold mb-3">Advertising Cookies</h3>
        <p className="text-gray-700 mb-4">
          If Google AdSense is enabled, advertising cookies may be used to
          deliver personalized or non-personalized ads based on your activity
          on this and other websites. These cookies are managed by Google, not
          by PDF Tool.
        </p>

        <h2 className="text-3xl font-bold mb-4 mt-10">3. Third-Party Services</h2>
        <p className="text-gray-700 mb-4">
          Third-party services we may use include:
        </p>

        <ul className="list-disc ml-6 text-gray-700 mb-4">
          <li>Google Analytics</li>
          <li>Google AdSense / Google Ads</li>
          <li>Other performance or analytics tools</li>
        </ul>

        <p className="text-gray-700 mb-4 leading-relaxed">
          These services may place cookies on your device to deliver analytics
          or advertising features. PDF Tool does not control these cookies.
        </p>

        <h2 className="text-3xl font-bold mb-4 mt-10">4. Managing Cookies</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          You can control cookies through your browser settings. Most browsers
          allow you to:
        </p>

        <ul className="list-disc ml-6 text-gray-700 mb-4">
          <li>Block or delete cookies</li>
          <li>Disable tracking</li>
          <li>Receive alerts when cookies are being used</li>
        </ul>

        <p className="text-gray-700 mb-4">
          Note that disabling cookies may affect site functionality.
        </p>

        <h2 className="text-3xl font-bold mb-4 mt-10">5. Updates to This Policy</h2>
        <p className="text-gray-700 mb-4">
          We may update this Cookie Policy from time to time. Any changes will
          be posted on this page.
        </p>

        <h2 className="text-3xl font-bold mb-4 mt-10">6. Contact</h2>
        <p className="text-gray-700 mb-4">
          If you have any questions about our Cookie Policy, contact us at:{' '}
          <span className="font-semibold">support@pdftool.com</span>
        </p>

      </div>
    </div>
  )
}

export default CookiePolicy
