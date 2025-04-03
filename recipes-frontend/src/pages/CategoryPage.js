import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function CategoryPage() {
  const { id } = useParams();
  const [category, setCategory] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/api/categories/${id}/`)
      .then((res) => res.json())
      .then((data) => setCategory(data))
      .catch((err) => console.error(err));
  }, [id]);
  if (!category) return <div>Загрузка...</div>;

  return (
    <div className="container">
      <h1 className="title">{category.name}</h1>
      <div className="card-container">
        {category.recipes &&
          category.recipes.map((recipe) => (
            <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="card">
              <h2>{recipe.title}</h2>
              <p>{recipe.description.slice(0, 100)}...</p>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default CategoryPage;
