import React from "react";

const Service = () => {
  const services = [
    {
      title: "Custom Shoe Design",
      description:
        "Get your own personalized shoe design tailored to your style and preferences.",
      icon: "🎨",
    },
    {
      title: "Shoe Repair",
      description:
        "Professional shoe repair services to make your old shoes look like new.",
      icon: "🛠️",
    },
    {
      title: "Shoe Cleaning",
      description:
        "Expert shoe cleaning services to keep your footwear looking fresh.",
      icon: "🧼",
    },
    {
      title: "Footwear Consultation",
      description:
        "Personalized consultation to help you find the perfect shoes for your needs.",
      icon: "👟",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Our Services
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Discover the range of services we offer to keep you and your shoes
            in perfect step.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-8">
              <div className="text-4xl text-center mb-4">{service.icon}</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                {service.title}
              </h2>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
