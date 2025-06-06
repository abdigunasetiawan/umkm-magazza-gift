import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/App";
import Detail from "./pages/detailProduct/App";
import SearchPage from "./pages/searchProduct/App";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import BestSeller from "./pages/home/BestSeller";
import { Analytics } from "@vercel/analytics/react";
import BestSellerPage from "./pages/bestSeller/App";
import AllProductPage from "./pages/allProduct/App";
import CategoryProductPage from "./pages/category/App";

const App = () => {
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.theme = isDark ? "dark" : "light";
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="font-inter relative dark:bg-gray-900">
        <Navbar toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/best-seller/" element={<BestSellerPage />} />
          <Route path="/all-products/" element={<AllProductPage />} />
          <Route path="/product/:namaProduct" element={<Detail />} />
          <Route
            path="/category/:namaCategory"
            element={<CategoryProductPage />}
          />
          <Route path="/search/:keyword" element={<SearchPage />} />
        </Routes>
        <Footer toggleDarkMode={toggleDarkMode} />
      </div>
      <Analytics></Analytics>
    </Router>
  );
};

export default App;
