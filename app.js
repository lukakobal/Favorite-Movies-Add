import React, { useState } from "react";
import "./styles.css";

export default function App() {
  // 1️⃣ Seznam filmov (array)
  const [movies, setMovies] = useState([
    "Inception",
    "The Dark Knight",
    "Interstellar",
    "The Matrix",
    "Fight Club",
  ]);

  // 2️⃣ Trenutni vnos (string)
  const [movie, setMovie] = useState("");

  // 3️⃣ Spremlja spremembe v inputu
  const handleChange = (e) => {
    setMovie(e.target.value);
  };

  // 4️⃣ Doda film v seznam
  const addMovie = () => {
    if (movie.trim() === "") return; // če je prazno, ne dodaj
    setMovies([...movies, movie]); // doda film
    setMovie(""); // izprazni input
  };

  // 5️⃣ Render
  return (
    <div className="container">
      <h1>🎥 Favorite Movies</h1>

      <ul>
        {movies.map((m, index) => (
          <li key={index}>{m}</li>
        ))}
      </ul>

      <input
        type="text"
        value={movie}
        onChange={handleChange}
        placeholder="Write a movie title..."
      />
      <button onClick={addMovie}>Add movie</button>
    </div>
  );
}
