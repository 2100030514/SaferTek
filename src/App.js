import React, { useState } from 'react';
import Header from './components/Header';
import MainBlock from './components/MainBlock';
import StatisticsBlock from './components/StatisticsBlock';
import DetailsBlock from './components/DetailsBlock';
import Footer from './components/Footer';
import mockData from './utils/mockData';

const App = () => {
  const [students, setStudents] = useState(mockData);
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Functions to handle sorting, filtering, and row selection

  return (
    <div className="app">
      <Header />
      <MainBlock students={students} />
      <StatisticsBlock />
      {selectedStudent && <DetailsBlock selectedStudent={selectedStudent} />}
      <Footer />
    </div>
  );
}

export default App;
