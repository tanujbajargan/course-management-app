import React, { useState } from 'react';
import { initialCourses } from '../data/initialCourses';

const Enrollments = () => {
  const [enrolledCourses, setEnrolledCourses] = useState(initialCourses.slice(0, 1));
  
  const unenrollCourse = (courseId) => {
    setEnrolledCourses(enrolledCourses.filter(course => course.id !== courseId));
  };

  return (
    <div className="enrollments">
      <h1 className="page-title">My Enrollments</h1>
      
      <div className="enrollments-container">
        {enrolledCourses.map(course => (
          <div key={course.id} className="card enrollment-card">
            <div className="enrollment-header">
              <div className="profile-avatar">
                {course.title.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2)}
              </div>
              <div className="enrollment-basic-info">
                <h2>{course.title}</h2>
                <p>{course.instructor}</p>
              </div>
              <button 
                className="btn edit-profile-btn" 
                onClick={() => unenrollCourse(course.id)}
              >
                Unenroll
              </button>
            </div>

            <div className="enrollment-details">
              <div className="profile-section">
                <h3>Course Details</h3>
                <p><strong>Department:</strong> {course.department}</p>
                <p><strong>Credits:</strong> {course.credits}</p>
              </div>

              <div className="profile-section">
                <h3>Schedule</h3>
                <div className="skills-list">
                  <span className="skill-tag">{course.schedule.days}</span>
                  <span className="skill-tag">{course.schedule.time}</span>
                </div>
              </div>

              <div className="profile-section">
                <h3>Additional Information</h3>
                <p>{course.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Enrollments;