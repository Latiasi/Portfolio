import React from "react";
import {BrowserRouter as Router} from "react-router-dom"
import { Route, Routes} from "react-router";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import './App.css';
function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
        <Route path='/' element={<About />} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contacts' element={<Contacts/>} />
        </Routes>
      </Router>
  );
}

export default App;
