import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = ({ courses }) => {
  return (
    <div className="sidebar card">
      <h2>My Courses</h2>
      <div className="sidebar-course-list">
        {courses.map(course => (
          <div key={course.id} className="sidebar-course-item">
            <div className="sidebar-course-info">
              <h3>{course.title}</h3>
              <p>{course.schedule}</p>
            </div>
            <span className="sidebar-course-credits">
              {course.credits} CR
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;