import React from 'react';

const DetailsBlock = ({ selectedStudent }) => {
  return (
    <div className="details-block">
      <h2>Details</h2>
      <p>{`Name: ${selectedStudent.name}`}</p>
      {/* Add other details */}
    </div>
  );
}

export default DetailsBlock;
