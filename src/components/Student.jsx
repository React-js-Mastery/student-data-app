import React from 'react';
import StudentData from './StudentData';
import { useNavigate } from 'react-router-dom';

function Student() {
  const navigate = useNavigate();

  return (
    <div className='container'>
      <div className="header">
        <h1>Student</h1>
        <button className='Add' onClick={() => navigate('/addnewstudent')}>
          Add New Student
        </button>
      </div>
      <StudentData />
    </div>
  );
}

export default Student;
