import React from "react";
import Header from "./components/Header";
import AddStudent from "./components/AddStudent";
import AllStudent from "./components/AllStudent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
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
