import React, { useState } from 'react';
import { initialCourses } from '../data/initialCourses';

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState('All');
  const days = ['All', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  const filterCoursesByDay = (courses) => {
    if (selectedDay === 'All') return courses;
    return courses.filter(course => course.schedule.includes(selectedDay.slice(0,3)));
  };

  const groupCoursesByDay = (courses) => {
    return courses.reduce((acc, course) => {
      const day = course.schedule.split(' ')[0];
      if (!acc[day]) acc[day] = [];
      acc[day].push(course);
      return acc;
    }, {});
  };

  const filteredCourses = filterCoursesByDay(initialCourses);
  const coursesByDay = groupCoursesByDay(filteredCourses);

  return (
    <div className="schedule">
      <h1 className="page-title">Course Schedule</h1>
      
      <div className="schedule-filters">
        {days.map(day => (
          <button 
            key={day}
            className={`btn schedule-filter-btn ${selectedDay === day ? 'active' : ''}`}
            onClick={() => setSelectedDay(day)}
          >
            {day}
          </button>
        ))}
      </div>

      <div className="schedule-grid">
        {selectedDay === 'All' ? (
          Object.entries(coursesByDay).map(([day, courses]) => (
            <div key={day} className="schedule-day-section card">
              <h2>{day}</h2>
              {courses.map(course => (
                <div key={course.id} className="schedule-course-item">
                  <div className="schedule-course-details">
                    <h3>{course.title}</h3>
                    <p>{course.instructor}</p>
                  </div>
                  <div className="schedule-course-time">
                    {course.schedule}
                  </div>
                </div>
              ))}
            </div>
          ))
        ) : (
          <div className="schedule-day-section card">
            <h2>{selectedDay}</h2>
            {filteredCourses.map(course => (
              <div key={course.id} className="schedule-course-item">
                <div className="schedule-course-details">
                  <h3>{course.title}</h3>
                  <p>{course.instructor}</p>
                </div>
                <div className="schedule-course-time">
                  {course.schedule}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Schedule;