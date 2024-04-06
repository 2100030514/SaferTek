import React, { useState } from 'react';
import StudentRow from './StudentRow';

const MainBlock = ({ students, onSortChange, onFilterChange }) => {
  const [sortBy, setSortBy] = useState('name');
  const [filterByName, setFilterByName] = useState('');

  const handleSortChange = (e) => {
    const newSortBy = e.target.value;
    setSortBy(newSortBy);
    onSortChange(newSortBy);
  };

  const handleFilterChange = (e) => {
    const nameFilter = e.target.value;
    setFilterByName(nameFilter);

    // Call the onFilterChange function to update the filtered students list
    onFilterChange(nameFilter);
  };

  // Function to filter students based on the name
  const filterStudents = () => {
    if (!filterByName) {
      return students; // Return all students if filterByName is empty
    }

    return students.filter(student => {
      // Convert both the student name and the filter name to lowercase for case-insensitive comparison
      const studentName = student.name.toLowerCase();
      const filterName = filterByName.toLowerCase();

      // Check if the student name contains the filter name
      return studentName.includes(filterName);
    });
  };

  // Get the filtered students list
  const filteredStudents = filterStudents();

  return (
    <div className="main-block">
      <div className="options">
        <label htmlFor="sort">Sort by:</label>
        <select id="sort" value={sortBy} onChange={handleSortChange}>
          <option value="name">Name</option>
          <option value="finalGrade">Final Grade</option>
        </select>
        <label htmlFor="filter">Filter by Name:</label>
        <input
          id="filter"
          type="text"
          value={filterByName}
          onChange={handleFilterChange}
          placeholder="Enter name..."
        />
      </div>
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
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student, index) => (
            <StudentRow key={index} student={student} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MainBlock;
