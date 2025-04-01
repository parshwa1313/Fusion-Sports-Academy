import React from "react";

function Privacy() {
  return (
    <div className="bg-blue-100 min-h-screen py-10 px-6 md:px-20 mt-20">
      <div className="max-w-3xl mx-auto bg-white shadow-lg p-8 rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Privacy Policy
        </h1>

        {/* Introduction */}
        <p className="text-gray-600 mb-4">
          At <strong>Fusion Sports Academy</strong>, we are committed to
          protecting your privacy. This policy outlines how we collect, use,
          and safeguard your personal information.
        </p>

        {/* Information Collection */}
        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
          1. Information We Collect
        </h2>
        <p className="text-gray-600">
          We collect personal details such as your name, email, phone number,
          date of birth, and payment information when you register for our
          programs or use our services.
        </p>

        {/* Usage of Information */}
        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>To register and manage your participation in our sports programs.</li>
          <li>To process payments and provide necessary services.</li>
          <li>To communicate updates, schedules, and important information.</li>
          <li>To improve our training programs and facilities.</li>
        </ul>

        {/* Data Security */}
        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
          3. Data Security
        </h2>
        <p className="text-gray-600">
          We implement strong security measures to safeguard your data. However,
          no method of transmission over the internet is entirely secure.
        </p>

        {/* Cookies */}
        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
          4. Cookies & Tracking
        </h2>
        <p className="text-gray-600">
          We use cookies to enhance your browsing experience. You can manage
          cookie settings in your browser preferences.
        </p>

        {/* Third-Party Sharing */}
        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
          5. Third-Party Sharing
        </h2>
        <p className="text-gray-600">
          We do not sell your personal information. However, we may share data
          with service providers for administrative and operational purposes.
        </p>

        {/* User Rights */}
        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
          6. Your Rights
        </h2>
        <p className="text-gray-600">
          You have the right to access, update, or delete your personal
          information. Contact us at <strong>support@fusionsports.com</strong>
          for any requests.
        </p>

        {/* Contact Section */}
        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
          7. Contact Us
        </h2>
        <p className="text-gray-600">
          If you have any questions regarding this Privacy Policy, please
          contact us at <strong>support@fusionsports.com</strong>.
        </p>
      </div>
    </div>
  );
}

export default Privacy;