import React from 'react';
import '../styles/CourseCard.css';

const CourseCard = ({ course, onEnroll }) => {
  return (
    <div className="course-card card">
      <div className="course-card-header">
        <h3>{course.title}</h3>
        <span className="course-credits">
          {course.credits} Credits
        </span>
      </div>
      <div className="course-card-body">
        <p className="course-instructor">
          <strong>Instructor:</strong> {course.instructor}
        </p>
        <p className="course-schedule">
          <strong>Schedule:</strong> {course.schedule}
        </p>
        <p className="course-description">
          {course.description}
        </p>
      </div>
      <div className="course-card-footer">
        <button 
          className="btn course-enroll-btn" 
          onClick={() => onEnroll(course)}
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
