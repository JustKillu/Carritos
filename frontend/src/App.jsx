import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './components/Inicio.jsx';
import Navb from './components/Navbar.jsx';

function App() {
  return (
    <>
    <Navb />
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
