import React from 'react';
import HeroSection from '../components/HeroSection';
import Contact from './Contact';
import { FaChartBar, FaTruck, FaShieldAlt, FaCloud, FaPen, FaBolt } from 'react-icons/fa';

const Home = () => (
  <div className="p-8 bg-[#E0F7FA] text-[#004D40]">
    <HeroSection />
    <section id="why-choose-us" className="py-8 bg-[#ffffff] sm:py-10 lg:py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-[#004D40] sm:text-4xl xl:text-5xl">
            Why You Choose Our E-learning
          </h2>
          <p className="mt-4 text-base leading-7 text-[#00796B] sm:mt-8">
            Our platform offers more than just eLearning. Discover the features that set us apart.
          </p>
        </div>
        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
          {/* Feature 1 */}
          <div className="md:p-8 lg:p-14 flex flex-col justify-center items-center">
            <div className="w-14 h-14 rounded-full bg-[#B2EBF2] flex justify-center items-center">
              <FaChartBar className="text-3xl text-[#004D40]" />
            </div>
            <h3 className="mt-12 text-xl font-bold text-[#004D40]">Comprehensive Learning Analytics</h3>
            <p className="mt-5 text-base text-[#00796B]">Track your progress with advanced analytics to make informed learning decisions.</p>
          </div>

          {/* Feature 2 */}
          <div className="md:p-8 lg:p-14 md:border-l md:border-[#E0F7FA] flex flex-col justify-center items-center">
            <div className="w-14 h-14 rounded-full bg-[#E0F7FA] flex justify-center items-center">
              <FaTruck className="text-3xl text-[#004D40]" />
            </div>
            <h3 className="mt-12 text-xl font-bold text-[#004D40]">Seamless Course Integration</h3>
            <p className="mt-5 text-base text-[#00796B]">Easily integrate courses into your learning path for a streamlined experience.</p>
          </div>

          {/* Feature 3 */}
          <div className="md:p-8 lg:p-14 md:border-l md:border-[#E0F7FA] flex flex-col justify-center items-center">
            <div className="w-14 h-14 rounded-full bg-[#E0F7FA] flex justify-center items-center">
              <FaShieldAlt className="text-3xl text-[#004D40]" />
            </div>
            <h3 className="mt-12 text-xl font-bold text-[#004D40]">Robust Security</h3>
            <p className="mt-5 text-base text-[#00796B]">Your data is safe with our top-of-the-line security features.</p>
          </div>

          {/* Feature 4 */}
          <div className="md:p-8 lg:p-14 md:border-t md:border-[#E0F7FA] flex flex-col justify-center items-center">
            <div className="w-14 h-14 rounded-full bg-[#E0F7FA] flex justify-center items-center">
              <FaCloud className="text-3xl text-[#004D40]" />
            </div>
            <h3 className="mt-12 text-xl font-bold text-[#004D40]">Cloud-Based Learning</h3>
            <p className="mt-5 text-base text-[#00796B]">Access your courses and materials from anywhere, at any time.</p>
          </div>

          {/* Feature 5 */}
          <div className="md:p-8 lg:p-14 md:border-l md:border-[#E0F7FA] md:border-t flex flex-col justify-center items-center">
            <div className="w-14 h-14 rounded-full bg-[#E0F7FA] flex justify-center items-center">
              <FaPen className="text-3xl text-[#004D40]" />
            </div>
            <h3 className="mt-12 text-xl font-bold text-[#004D40]">Personalized Learning Paths</h3>
            <p className="mt-5 text-base text-[#00796B]">Tailor your learning experience to fit your unique needs and goals.</p>
          </div>

          {/* Feature 6 */}
          <div className="md:p-8 lg:p-14 md:border-l md:border-[#E0F7FA] md:border-t flex flex-col justify-center items-center">
            <div className="w-14 h-14 rounded-full bg-[#E0F7FA] flex justify-center items-center">
              <FaBolt className="text-3xl text-[#004D40]" />
            </div>
            <h3 className="mt-12 text-xl font-bold text-[#004D40]">High Performance</h3>
            <p className="mt-5 text-base text-[#00796B]">Experience smooth and efficient learning with our optimized platform.</p>
          </div>
        </div>
      </div>
    </section>
    <Contact />
  </div>
);

export default Home;
