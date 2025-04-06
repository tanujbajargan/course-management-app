import React, { useState } from 'react';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@university.edu',
    major: 'Computer Science',
    graduationYear: 2025,
    bio: 'Passionate about technology and innovation.',
    skills: ['React', 'JavaScript', 'Python', 'Data Structures']
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleSkillChange = (e) => {
    const skills = e.target.value.split(',').map(skill => skill.trim());
    setProfile(prev => ({ ...prev, skills }));
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="profile">
      <h1 className="page-title">Student Profile</h1>
      
      <div className="profile-container card">
        <div className="profile-header">
          <div className="profile-avatar">
            {profile.name.split(' ').map(name => name[0]).join('').toUpperCase()}
          </div>
          <div className="profile-basic-info">
            <h2>{profile.name}</h2>
            <p>{profile.email}</p>
          </div>
          <button 
            className="btn edit-profile-btn" 
            onClick={toggleEdit}
          >
            {isEditing ? 'Save' : 'Edit Profile'}
          </button>
        </div>

        <div className="profile-details">
          {isEditing ? (
            <form className="profile-edit-form">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Major</label>
                <input
                  type="text"
                  name="major"
                  value={profile.major}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Graduation Year</label>
                <input
                  type="number"
                  name="graduationYear"
                  value={profile.graduationYear}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Bio</label>
                <textarea
                  name="bio"
                  value={profile.bio}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Skills (comma-separated)</label>
                <input
                  type="text"
                  value={profile.skills.join(', ')}
                  onChange={handleSkillChange}
                />
              </div>
            </form>
          ) : (
            <>
              <div className="profile-section">
                <h3>About</h3>
                <p>{profile.bio}</p>
              </div>
              <div className="profile-section">
                <h3>Academic Info</h3>
                <p><strong>Major:</strong> {profile.major}</p>
                <p><strong>Graduation Year:</strong> {profile.graduationYear}</p>
              </div>
              <div className="profile-section">
                <h3>Skills</h3>
                <div className="skills-list">
                  {profile.skills.map(skill => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;