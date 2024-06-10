import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900">About Us</h1>
          <p className="mt-4 text-lg text-gray-600">
            We are passionate about shoes and dedicated to bringing you the best
            quality and style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center">
            <img
              src="/boots.jpg"
              alt="Our Story"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Story
            </h2>
            <p className="text-gray-600 mb-4">
              Founded in 2020, we started with a mission to redefine comfort and
              style in footwear. Our shoes are crafted with the finest materials
              and a keen attention to detail.
            </p>
            <p className="text-gray-600">
              Each pair of shoes we make is a testament to our commitment to
              quality and innovation. Join us on our journey and step into the
              future of footwear.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Values
            </h2>
            <ul className="list-disc list-inside text-gray-600">
              <li className="mb-2">Quality: We use only the best materials.</li>
              <li className="mb-2">
                Comfort: Our shoes are designed for all-day wear.
              </li>
              <li className="mb-2">
                Style: Stay trendy with our modern designs.
              </li>
              <li className="mb-2">
                Sustainability: We are committed to eco-friendly practices.
              </li>
              <li>
                Innovation: Continuously improving with the latest technology.
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <img
              src="/legs.jpg"
              alt="Our Values"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Join Our Community
          </h2>
          <p className="text-gray-600 mb-6">
            Be part of our journey and stay updated with the latest news and
            releases.
          </p>
          <a
            href="/signup"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Sign Up Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
