import React, { useState } from 'react';
import Header from './components/Header';
import MainBlock from './components/MainBlock';
import StatisticsBlock from './components/StatisticsBlock';
import Footer from './components/Footer';
import mockData from './utils/mockData';

const App = () => {
  const [students, setStudents] = useState(mockData);

  // Function to handle sorting
  const handleSortChange = (sortBy) => {
    const sortedStudents = [...students].sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'finalGrade') {
        return a.finalGrade - b.finalGrade;
      }
    });

    setStudents(sortedStudents);
  };

  // Calculate statistics
  const totalStudents = students.length;
  const totalPassed = students.filter(student => student.finalGrade >= 4).length;
  const totalFailed = totalStudents - totalPassed;
  const averageGrade = students.reduce((acc, student) => acc + student.finalGrade, 0) / totalStudents;
  const maxGrade = Math.max(...students.map(student => student.finalGrade));
  const minGrade = Math.min(...students.map(student => student.finalGrade));

  const statistics = {
    totalStudents,
    totalPassed,
    totalFailed,
    averageGrade,
    maxGrade,
    minGrade
  };

  return (
    <div className="app">
      <Header />
      <MainBlock students={students} onSortChange={handleSortChange} />
      <StatisticsBlock statistics={statistics} />
      <Footer />
    </div>
  );
}

export default App;
