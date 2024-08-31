import { useState } from 'react';
import { FaBars, FaSearch, FaSignOutAlt, FaHome, FaRegUser, FaBell, FaGraduationCap } from 'react-icons/fa';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { MdAssignment, MdOutlineAssignmentLate, MdOutlineAssignmentTurnedIn, MdOutlineOndemandVideo } from "react-icons/md";
const StudentDashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    const handleSidebarToggle = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  
    const handleDropdownToggle = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };


  return (
    <div className={`flex ${isSidebarOpen ? 'w-full' : 'w-full'}`}>
    <aside className={`bg-primary text-white ${isSidebarOpen ? 'w-64' : 'w-30'} h-screen transition-all duration-300`}>
      <li className={`p-4 flex items-center space-x-4 hover:bg-secondary cursor-pointer ${!isSidebarOpen ? 'justify-center' : ''}`}>
        <FaHome className="text-2xl" />
        {isSidebarOpen && <span className="font-bold">Home</span>}
      </li>
      <nav className="mt-8">
        <ul>
          <li className={`p-4 flex items-center space-x-4 hover:bg-secondary cursor-pointer ${!isSidebarOpen ? 'justify-center' : ''}`}>
            <MdOutlineOndemandVideo className="text-2xl" />
            {isSidebarOpen && <span className="font-bold">Courses</span>}
          </li>
          <li className={`relative ${!isSidebarOpen ? 'justify-center' : ''}`}>
            <div className="flex items-center px-4 py-2 text-white hover:bg-teal-600 transition-colors duration-300 cursor-pointer" onClick={handleDropdownToggle}>
              <MdAssignment className="text-2xl" />
              {isSidebarOpen && <span className="ml-2 font-bold">Assessments</span>}
              <button className="ml-2">
                {isDropdownOpen ? <IoMdArrowDropup className="text-2xl" /> : <IoMdArrowDropdown className="text-2xl" />}
              </button>
            </div>
            {isDropdownOpen && (
              <div className={`absolute left-full mt-2 bg-teal-100 text-teal-800 rounded-lg shadow-lg ${!isSidebarOpen ? 'w-40' : ''}`}>
                <a href="#" className="flex items-center px-4 py-2 text-teal-800 hover:bg-teal-200 transition-colors duration-300">
                  <MdOutlineAssignmentLate size={20} className="mr-2" />
                  Assignments
                </a>
                <a href="#" className="flex items-center px-4 py-2 text-teal-800 hover:bg-teal-200 transition-colors duration-300">
                  <MdOutlineAssignmentTurnedIn size={20} className="mr-2" />
                  Exams
                </a>
              </div>
            )}
          </li>
          <li className={`p-4 flex items-center space-x-4 hover:bg-secondary cursor-pointer ${!isSidebarOpen ? 'justify-center' : ''}`}>
            <FaBell className="text-2xl" />
            {isSidebarOpen && <span className="font-bold">Notifications</span>}
          </li>
          <li className={`p-4 flex items-center space-x-4 hover:bg-secondary cursor-pointer ${!isSidebarOpen ? 'justify-center' : ''}`}>
            <FaGraduationCap className="text-2xl" />
            {isSidebarOpen && <span className="font-bold">My Grades</span>}
          </li>
          <li className={`p-4 flex items-center space-x-4 hover:bg-secondary cursor-pointer ${!isSidebarOpen ? 'justify-center' : ''}`}>
            <FaRegUser className="text-2xl" />
            {isSidebarOpen && <span className="font-bold">Profile</span>}
          </li>
        </ul>
      </nav>
    </aside>

    <div className="flex-1 flex flex-col">
      <header className="bg-secondary text-white p-4 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={handleSidebarToggle} className="text-white text-2xl mr-4">
            <FaBars />
          </button>
          <div className="relative flex items-center" style={{ width: '300px' }}>
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 rounded-lg border border-gray-300 pl-10"
            />
            <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500">
              <FaSearch />
            </span>
          </div>
        </div>
        <button className="flex items-center">
          <FaSignOutAlt className="text-2xl" />
          <span className="ml-2 font-bold">Logout</span>
        </button>
      </header>

      
    </div>
  </div>
  )
}

export default StudentDashboard