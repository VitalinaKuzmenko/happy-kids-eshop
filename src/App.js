import "./App.css";
import MainPage from "./pages/MainPage";
import CheckoutPage from "./pages/CheckoutPage";
import { Routes, Route } from "react-router-dom";
import ShopPage from "./pages/ShopPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
