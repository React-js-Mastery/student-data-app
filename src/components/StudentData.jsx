import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function StudentData() {
  const navigate = useNavigate();
  const data = useSelector((state) => state.Student);

  return (
    <div className='container'>
      <table className='student-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Batch</th>
            <th>Course</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.Name}</td>
              <td>{item.Age}</td>
              <td>{item.Batch}</td>
              <td>{item.Course}</td>
              <td>
                <button
                  className="edit-button"
                  onClick={() => {
                    const id = item.id;
                    navigate('/editstudent', { state: id });
                  }}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentData;
