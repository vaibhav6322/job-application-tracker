import React, { useState } from 'react';
import styles from "./dashboard.css";
const Dashboard = (props) => {
  const [jobList, setJobList] = useState([]);
  const [formData, setFormData] = useState({
    companyname: '',
    position: '',
    deadline: '',
    interview: '',
    status: 'no-selection',
    resume: null, // Initialize resume as null
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setJobList([...jobList, formData]);
    setFormData({
      companyname: '',
      position: '',
      deadline: '',
      interview: '',
      status: 'selected',
      resume: null, // Reset resume after submission
    });
  };

  return (
    <div className="dashboard-container">
      <div className="header">
        <h1>Welcome, {props.name}!</h1>
        <button className="logout-button">Log out</button>
      </div>
      <div className="content">
        <div className="job-form">
          <h2>Add a New Job</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="companyname">Company</label>
              <input
                type="text"
                id="companyname"
                name="companyname"
                placeholder="Company Name"
                value={formData.companyname}
                onChange={(e) => setFormData({ ...formData, companyname: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="position">Position</label>
              <input
                type="text"
                id="position"
                name="position"
                placeholder="Position"
                value={formData.position}
                onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="deadline">Deadline</label>
              <input
                type="date"
                id="deadline"
                name="deadline"
                value={formData.deadline}
                onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="interview">Interview Date</label>
              <input
                type="date"
                id="interview"
                name="interview"
                value={formData.interview}
                onChange={(e) => setFormData({ ...formData, interview: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
  <label htmlFor="resume-upload">Upload Resume:</label>
  <label className="custom-file-upload">
    <input
      type="file"
      id="resume-upload"
      className="file-upload"
      onChange={(e) => setFormData({ ...formData, resume: e.target.files[0] })}
      required
    />
    Choose File
  </label>
</div>


<div className="form-group">
  <label htmlFor="status">Status</label>
  <select
    id="status"
    name="status"
    value={formData.status}
    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
    
  >
    <option value="no-selection">No Selection</option>
    <option value="selected">Selected</option>
    <option value="rejected">Rejected</option>
  </select>
</div>

            <button className="submit-button" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="job-list">
          <h2>Your Job List</h2>
          {jobList.map((job, index) => (
            <div className="job-block" key={index}>
              <p>Company: {job.companyname}</p>
              <p>Position: {job.position}</p>
              <p>Deadline: {job.deadline}</p>
              <p>Interview Date: {job.interview}</p>
              {job.resume && (
                <p>
                  Resume: <a href={URL.createObjectURL(job.resume)} download>Download Resume</a>
                </p>
              )}
              <p>Status: {job.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
