import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Body = () => {
  return (
    <div>
      <Router>
        <Routes>
         <Route path="/" element={<Login/>}/>
         <Route path="/Browser" element={<Browse/>}/>
         <Route path="/Header" element={<Header/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default Body;
