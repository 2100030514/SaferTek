import React from 'react';

const StatisticsBlock = ({ statistics }) => {
  return (
    <div className="statistics-block">
      <h2>Statistics</h2>
      <ul>
        <li>Total Students: {statistics.totalStudents}</li>
        <li>Average Grade: {statistics.averageGrade}</li>
        <li>Max Grade: {statistics.maxGrade}</li>
        <li>Min Grade: {statistics.minGrade}</li>
        {/* Add other statistics */}
      </ul>
    </div>
  );
};

export default StatisticsBlock;
