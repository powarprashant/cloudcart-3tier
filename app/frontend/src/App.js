import React from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {

  return (
    <div>

      <Navbar />

      <div className="container">

        <h1>Welcome to CloudCart</h1>

        <ProductList />

      </div>

    </div>
  );

}

export default App;