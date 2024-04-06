import React from 'react';

const StudentRow = ({ student }) => {
  return (
    <tr>
      <td>{student.id}</td>
      <td>{student.name}</td>
      <td>{student.ticketNumber}</td>
      <td>{student.ratingGrade}</td>
      <td>{student.examGrade}</td>
      <td>{student.finalGrade}</td>
      <td>{student.status}</td>
      <td><button>Details</button></td> {/* Optional */}
    </tr>
  );
}

export default StudentRow;
