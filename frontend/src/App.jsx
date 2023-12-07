import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './components/Inicio.jsx';
import Login from './components/Login.jsx';
import Navb from './components/Navbar.jsx';
import Modelos from './components/Modelos.jsx';

function App() {
  return (
    <>
    <>
    <Navb />
    </>
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route path= "/Modelos" element={<Modelos />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
