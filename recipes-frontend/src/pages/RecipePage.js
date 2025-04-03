import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RecipePage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/api/recipes/${id}/`)
      .then((res) => res.json())
      .then((data) => setRecipe(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!recipe) return <div>Загрузка...</div>;

  return (
    <div className="container">
      <h1 className="title">{recipe.title}</h1>
      <p className="description">{recipe.description}</p>
    </div>
  );
}

export default RecipePage;
