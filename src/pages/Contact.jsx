import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="py-24 bg-[#E0F7FA]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className="grid lg:grid-cols-2 grid-cols-1 shadow-xl">
          <div className="lg:mb-0 mb-10">
            <div className="group w-full h-full">
              <div className="relative h-full">
                <img
                  src="https://pagedone.io/asset/uploads/1696488602.png"
                  alt="Contact Us"
                  className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-[#00796B]"
                />
                <h1 className="font-manrope text-white text-4xl font-bold leading-10 absolute top-11 left-11">
                  Contact us
                </h1>
                <div className="absolute bottom-0 w-full lg:p-11 p-5">
                  <div className="bg-white rounded-lg p-6 block">
                    <a href="tel:470-601-1911" className="flex items-center mb-6">
                      {/* Add phone icon SVG here */}
                      <h5 className="text-black text-base font-normal leading-6 ml-5">
                        470-601-1911
                      </h5>
                    </a>
                    <a href="https://veilmail.io/irish-geoff" className="flex items-center mb-6">
                      {/* Add email icon SVG here */}
                      <h5 className="text-black text-base font-normal leading-6 ml-5">
                        https://veilmail.io/irish-geoff
                      </h5>
                    </a>
                    <a href="javascript:;" className="flex items-center">
                      {/* Add address icon SVG here */}
                      <h5 className="text-black text-base font-normal leading-6 ml-5">
                        654 Sycamore Avenue, Meadowville, WA 76543
                      </h5>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
            <h2 className="text-[#004D40] font-manrope text-4xl font-semibold leading-10 mb-11">
              Send Us A Message
            </h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-5"
                placeholder="First Name"
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-5"
                placeholder="Last Name"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-5"
                placeholder="Email"
                required
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-5"
                placeholder="Phone"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full h-24 text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-lg border border-gray-200 focus:outline-none pl-4 mb-10"
                placeholder="Message"
                required
              />
              <button
                type="submit"
                className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 hover:bg-[#00574B] bg-[#00796B] shadow-sm"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
