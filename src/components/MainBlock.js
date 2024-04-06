import React from 'react';
import StudentRow from './StudentRow';

const MainBlock = ({ students }) => {
  return (
    <div className="main-block">
      {/* Options for sorting & filtering */}
      {/* Table to display student data */}
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>Name</th>
            <th>Ticket's Number</th>
            <th>Rating Grade</th>
            <th>Exam Grade</th>
            <th>Final Grade</th>
            <th>Status</th>
            <th>Details</th> {/* Optional */}
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <StudentRow key={index} student={student} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MainBlock;
