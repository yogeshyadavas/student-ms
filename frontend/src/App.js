import React from "react";
import "./App.css";
import Header from "./components/Header";
import AddStudent from "./components/AddStudent";
import AllStudent from "./components/AllStudent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <br />
        <br />
        <Routes>
          <React.Fragment>
            <Route path="/" element={<AllStudent />} />
            <Route path="/add" element={<AddStudent />} />
          </React.Fragment>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
