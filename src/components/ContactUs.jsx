import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-600">
            We would love to hear from you. Please fill out the form below and
            we will get in touch with you shortly.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8 md:p-12 lg:p-16">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="col-span-1">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 p-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  placeholder="Your name"
                />
              </div>
              <div className="col-span-1">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 p-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  placeholder="Your email"
                />
              </div>
            </div>

            <div className="mt-8">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="mt-1 p-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder="Subject"
              />
            </div>

            <div className="mt-8">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 p-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder="Your message"
              ></textarea>
            </div>

            <div className="mt-8 text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Reach Us At
          </h2>
          <p className="text-gray-600 mb-4">
            Email:{" "}
            <a
              href="mailto:contact@shoeshop.com"
              className="text-blue-600 hover:underline"
            >
              contact@shoeshop.com
            </a>
          </p>
          <p className="text-gray-600">
            Phone:{" "}
            <a href="tel:+1234567890" className="text-blue-600 hover:underline">
              +91 9667800308
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
