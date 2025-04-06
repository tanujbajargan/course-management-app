import React from 'react';
import Sidebar from '../components/SidebarComponent';
import { initialCourses } from '../data/initialCourses';

const StatCard = ({ title, value, icon }) => (
  <div className="stat-card card">
    <div className="stat-card-content">
      <div className="stat-icon">{icon}</div>
      <div className="stat-details">
        <h3>{title}</h3>
        <p>{value}</p>
      </div>
    </div>
  </div>
);

const Dashboard = () => {
  const totalCourses = initialCourses.length;
  const totalCredits = initialCourses.reduce((sum, course) => sum + course.credits, 0);

  const statCards = [
    {
      title: 'Total Courses',
      value: totalCourses,
      icon: '📚'
    },
    {
      title: 'Total Credits',
      value: totalCredits,
      icon: '🎓'
    },
    {
      title: 'Enrolled Students',
      value: '120+',
      icon: '👥'
    }
  ];

  return (
    <div className="dashboard">
      <h1 className="page-title">Student Dashboard</h1>
      <div className="dashboard-content">
        <main>
          <section className="quick-stats">
            <div className="stats-grid">
              {statCards.map((card, index) => (
                <StatCard 
                  key={index}
                  title={card.title}
                  value={card.value}
                  icon={card.icon}
                />
              ))}
            </div>
          </section>
          
          <section className="recent-courses card">
            <h2>Recent Courses</h2>
            <div className="recent-courses-list">
              {initialCourses.slice(0, 3).map(course => (
                <div key={course.id} className="recent-course-item">
                  <h3>{course.title}</h3>
                  <p>{course.instructor}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
        <Sidebar courses={initialCourses} />
      </div>
    </div>
  );
};

export default Dashboard;