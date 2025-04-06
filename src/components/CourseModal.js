import React from 'react';
import '../styles/CourseModal.css';

const CourseModal = ({ course, onClose }) => {
  if (!course) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{course.title}</h2>
        <p><strong>Instructor:</strong> {course.instructor}</p>
        <p><strong>Credits:</strong> {course.credits}</p>
        <p><strong>Schedule:</strong> {course.schedule}</p>
        <p>{course.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CourseModal;