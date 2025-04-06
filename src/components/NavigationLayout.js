import React from 'react';
import { Link } from 'react-router-dom';

const NavigationLayout = ({ children }) => {
  return (
    <div className="app-container">
      <nav className="main-nav">
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/enrollments">Enrollments</Link></li>
          <li><Link to="/schedule">Schedule</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default NavigationLayout;
