import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Coin from "./components/Coin";
import Exchanges from "./components/Exchanges";
import CoinDetails from "./components/CoinDetails";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}>
            Home
          </Route>
          <Route path="/coin" element={<Coin />}>
            Coins
          </Route>
          <Route path="/exchanges" element={<Exchanges />}>
            Exchanges
          </Route>
          <Route path="/coin/:id" element={<CoinDetails />}>
            CoinDetails
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
