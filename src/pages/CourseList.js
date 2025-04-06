import React, { useState } from 'react';
import CourseCard from '../components/CourseCard';
import CourseModal from '../components/CourseModal';
import { initialCourses } from '../data/initialCourses';

const CourseList = () => {
  const [courses] = useState(initialCourses);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleEnroll = (course) => {
    alert(`Enrolled in ${course.title}`);
  };

  return (
    <div className="course-list">
      <h1>Available Courses</h1>
      <div className="courses-grid">
        {courses.map(course => (
          <CourseCard 
            key={course.id} 
            course={course} 
            onEnroll={handleEnroll}
          />
        ))}
      </div>
      {selectedCourse && (
        <CourseModal 
          course={selectedCourse} 
          onClose={() => setSelectedCourse(null)} 
        />
      )}
    </div>
  );
};

export default CourseList;