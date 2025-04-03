import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/categories/")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">
      <h1 className="title">Категории рецептов</h1>
      <div className="card-container">
        {categories.map((cat) => (
          <Link to={`/category/${cat.id}`} key={cat.id} className="card">
            <h2>{cat.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
