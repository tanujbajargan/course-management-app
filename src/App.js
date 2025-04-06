import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationLayout from './components/NavigationLayout';
import Dashboard from './pages/Dashboard';
import CourseList from './pages/CourseList';
import Enrollments from './pages/Enrollments';
import Schedule from './pages/Schedule';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <NavigationLayout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<CourseList />} />
          <Route path="/enrollments" element={<Enrollments />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </NavigationLayout>
    </Router>
  );
}

export default App;
