import React from "react";

function Terms() {
  return (
    <div className="bg-green-300 min-h-screen py-10 px-6 md:px-20 mt-20">
      <div className="max-w-3xl mx-auto bg-white shadow-lg p-8 rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Terms and Conditions
        </h1>

        {/* Introduction */}
        <p className="text-gray-600 mb-4">
          Welcome to <strong>Fusion Sports Academy</strong>. By enrolling in our
          programs and using our services, you agree to abide by the following
          terms and conditions.
        </p>

        {/* Enrollment & Payments */}
        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
          1. Enrollment & Payments
        </h2>
        <p className="text-gray-600">
          All participants must complete registration and submit payment before
          attending any classes or training sessions.
        </p>

        {/* Code of Conduct */}
        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
          2. Code of Conduct
        </h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Respect coaches, staff, and fellow participants at all times.</li>
          <li>Follow the academy's safety rules and instructions.</li>
          <li>Any form of misconduct may result in suspension or dismissal.</li>
        </ul>

        {/* Cancellation & Refunds */}
        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
          3. Cancellation & Refunds
        </h2>
        <p className="text-gray-600">
          Refunds are only available if cancellation is made at least 7 days
          before the start of the session. No refunds will be provided once a
          session has begun.
        </p>

        {/* Liability Waiver */}
        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
          4. Liability Waiver
        </h2>
        <p className="text-gray-600">
          Fusion Sports Academy is not responsible for any injuries sustained
          during training, competitions, or other activities.
        </p>

        {/* Privacy & Data */}
        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
          5. Privacy & Data Protection
        </h2>
        <p className="text-gray-600">
          Your personal data is collected and processed in accordance with our
          Privacy Policy. By enrolling, you consent to our data usage practices.
        </p>

        {/* Amendments */}
        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
          6. Amendments to Terms
        </h2>
        <p className="text-gray-600">
          Fusion Sports Academy reserves the right to update these terms at any
          time. Continued participation indicates acceptance of revised terms.
        </p>

        {/* Contact Section */}
        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
          7. Contact Us
        </h2>
        <p className="text-gray-600">
          If you have any questions regarding these Terms and Conditions, please
          contact us at <strong>support@fusionsports.com</strong>.
        </p>
      </div>
    </div>
  );
}

export default Terms;
