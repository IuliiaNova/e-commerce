import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './routes/Home';
import Shop from './routes/Shop';



function App() {

  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/shop" element={<Shop />}/>
          <Route path="/productpage" element={<div>ProductPage</div>}/>
          <Route path="/about" element={<div>About</div>}/>
          <Route path="/*" element={<Navigate replace to="/" />}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
