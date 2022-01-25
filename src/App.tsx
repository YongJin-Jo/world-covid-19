import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { CovidMain } from './components/pages/main/CovidMain';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CovidMain />} />
      </Routes>
    </div>
  );
}

export default App;
