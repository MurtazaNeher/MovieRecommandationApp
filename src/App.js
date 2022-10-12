import React, { useState } from "react";
import "./styles.css";

var color = "#64ffda";

const movieDB = {
  action: [
    { name: "Black Panther (2018)", rating: "9/10" },
    { name: "Deadpool (2016)", rating: "9.5/10" },
    { name: "Endgame (2020)", rating: "8.5/10" }
  ],

  scifi: [
    {
      name: "Inception (2010)",
      rating: "9.5/10"
    },
    {
      name: "Interstellar (2014)",
      rating: "9.5/10"
    },
    {
      name: "The Prestige (2006)",
      rating: "9/10"
    }
  ],
  horror: [
    {
      name: "Conjuring (2013)",
      rating: "8.5/10"
    },
    {
      name: "Sinister (2012)",
      rating: "7.5/10"
    },
    {
      name: "Dead Silence (2007)",
      rating: "8/10"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("scifi");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <div className="container">
        <h1>
          📽 ️Movie <span style={{ color: color }}>Recommendation</span>
        </h1>
        <h4>Checkout my favourite movies.Select a genre to get started.</h4>
        <div>
          {Object.keys(movieDB).map((genre) => (
            <button
              onClick={() => genreClickHandler(genre)}
              style={{
                cursor: "pointer",
                padding: "0.7rem 2rem",
                margin: "0.7rem 1.5rem",
                border: "1px solid #64ffda",
                borderRadius: "0.5rem",
                background: "transparent",
                color: "#64ffda",
                fontSize: "16px"
              }}
            >
              {genre}
            </button>
          ))}
        </div>
        <hr />
        <div style={{ textAlign: "left" }}>
          <ul style={{ paddingInlineStart: "0" }}>
            {movieDB[selectedGenre].map((movie) => (
              <li
                key={movie.name}
                style={{
                  listStyle: "none",
                  padding: "1rem",
                  border: "1px solid #64ffda",
                  margin: "1rem 0rem",
                  borderRadius: "0.5rem",
                  color: "#fff",
                  display: "flex",
                  gap: "10px",
                  flexDirection: "column"
                }}
              >
                {" "}
                <div style={{ fontSize: "larger" }}> {movie.name} </div>
                <div style={{ fontSize: "smaller" }}> {movie.rating} </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer">
        <ul className="list">
          <li className="ft">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/murtaza-neher-wala-345700239"
            >
              Linked in
            </a>
          </li>
          <li className="ft">
            <a
              target="_blank"
              href="https://twitter.com/Murtaza_neher?t=KjQ1giMXozsd4enZDMxNYg&s=03"
            >
              Twitter
            </a>
          </li>
          <li className="ft">
            <a target="_blank" href="https://github.com/MurtazaNeher">
              Github
            </a>
          </li>
          <li className="ft">
            <a target="_blank" href="https://murtazaneherwala.netlify.app">
              Portfolio
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
