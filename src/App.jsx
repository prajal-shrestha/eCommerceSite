import React from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import AuthContainer from "./components/loginSignup/AuthContainer";
import ProductDetails from "./containers/ProductDetails";
// import Cart from "./containers/Cart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/userCredentials" element={<AuthContainer />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        {/* <Route path="/cart/:id" element={<Cart />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
