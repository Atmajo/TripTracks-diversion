import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Review from "./Components/Review";
import Planning from "./Components/Planning";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/planning' element={<Planning />} />
      <Route path='/review' element={<Review />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;
