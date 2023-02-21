import React from 'react';
import './App.css';
import { Header, ProductsList,  Banner } from "./components";
import { Footer } from "./components/Footer/Footer";



function App() {

  return (
    <div className="App">
      <div className="back-image">
      <Header />
      <hr />
      <Banner />
      </div>
      <ProductsList />
      <Footer />

    </div>
  );
}

export default App;
