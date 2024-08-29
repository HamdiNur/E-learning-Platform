import React, { useState } from 'react';

const ManageCourses = () => {
  const [courses, setCourses] = useState([]);
  const [courseName, setCourseName] = useState('');
  const [courseVideo, setCourseVideo] = useState(null);

  const handleAddCourse = () => {
    if (courseName && courseVideo) {
      const newCourse = {
        name: courseName,
        video: URL.createObjectURL(courseVideo), // Create a URL for the video file
      };
      setCourses([...courses, newCourse]);
      setCourseName('');
      setCourseVideo(null);
    }
  };

  const handleDeleteCourse = (index) => {
    const newCourses = courses.filter((_, i) => i !== index);
    setCourses(newCourses);
  };

  return (
    <div className="flex p-4">
      {/* Empty left side for sidebar */}
      <div className="flex-1"></div>

      {/* Right side for inputs and content */}
      <div className="flex-1">
        <h2 className="text-xl font-semibold mb-2">Manage Your Courses</h2>
        <div className="flex flex-col md:flex-row mb-4 justify-end">
          <input
            type="text"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            placeholder="Course Name"
            className="border p-2 mb-2 md:mb-0 md:mr-2 w-full md:w-1/2"
          />
          <input
            type="file"
            onChange={(e) => setCourseVideo(e.target.files[0])}
            className="border p-2 w-full md:w-1/2"
            accept="video/*"
          />
        </div>
        <button
          onClick={handleAddCourse}
          className="flex items-center justify-center rounded-md bg-[#004D40] text-white px-6 py-2.5 font-semibold hover:bg-[#00796B] hover:scale-110 transition duration-200 mb-4"
        >
          Add Course
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded">
              <video
                src={course.video}
                controls
                className="rounded"
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: 'auto',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)', // Subtle shadow effect
                }}
              />
              <h3 className="font-semibold mt-2">{course.name}</h3>
              <button
                onClick={() => handleDeleteCourse(index)}
                className="text-red-500 mt-2"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageCourses;