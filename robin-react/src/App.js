// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from "./components/Home/Home";
import About from "./components/About/About";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home/>} /> */}
          <Route path="/" component={About} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
