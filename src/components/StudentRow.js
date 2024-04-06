import React from 'react';

const StudentRow = ({ student, onDetailsClick }) => {
    return (
    <tr>
      <td>{student.id}</td>
      <td>{student.name}</td>
      <td>{student.ticketNumber}</td>
      <td>{student.ratingGrade}</td>
      <td>{student.examGrade}</td>
      <td>{student.finalGrade}</td>
      <td>{student.status}</td>
      <td>
        <button onClick={() => onDetailsClick(student)}>Details</button>
      </td>    </tr>
  );
}

export default StudentRow;
