import React from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import Home from "./pages/Home";
import RecipePage from "./pages/RecipePage";

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <Link to="/" className="nav-link">
            Главная
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/recipe/:id" element={<RecipePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
