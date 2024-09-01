import React from 'react';
import { FaBullseye, FaLightbulb, FaRegSmile } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="bg-[#E0F7FA] text-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg font-semibold">
            Learn more about our journey, mission, and vision that drive us forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Introduction Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-[#B2EBF2] rounded-full mb-6">
              <FaRegSmile className="text-3xl text-[#004D40]" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-base font-semibold">
              Welcome to our e-learning platform! We are dedicated to providing high-quality online education that's accessible and affordable for everyone. Join us to embark on a journey of continuous learning and personal growth.
            </p>
          </div>

          {/* Our Mission Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-[#B2EBF2] rounded-full mb-6">
              <FaBullseye className="text-3xl text-[#004D40]" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-base font-semibold">
              Our mission is to empower individuals through accessible education, fostering a community of passionate learners who strive for excellence and innovation in their respective fields.
            </p>
          </div>

          {/* Our Vision Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-[#B2EBF2] rounded-full mb-6">
              <FaLightbulb className="text-3xl text-[#004D40]" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-base font-semibold">
              We envision a world where education knows no boundaries, inspiring individuals to unlock their full potential and contribute meaningfully to society through knowledge and skills acquired.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
