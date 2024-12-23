import React, { useState } from "react";
import Transition from "./Animations/Transition";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="grid md:grid-cols-2 md:px-20">
      <div className="flex items-center justify-center   mt-10 text-2xl md:text-4xl px-10">
        Learn more about how Qualiinsight can help your Business and Quality
        teams
      </div>
      <div className="min-h-52 flex items-center justify-center">
        <div className="p-8 w-full max-w-xl">
          <h2 className="text-3xl   text-center text-gray-800">Contact Us</h2>
          <form
            action="https://formspree.io/f/xeojkllk"
            method="POST"
            className="space-y-4"
          >
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-gray-700">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-400"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="lastName" className="block text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-400"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-400"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700">
                How can we help you? <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-400"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gray-600 text-white py-3 rounded-md hover:bg-green-900 transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Transition(ContactUs);
