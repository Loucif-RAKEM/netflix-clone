import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLarge }) {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setmovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => {
          if (movie.poster_path !== null && movie.backdrop_path !== null)
            return (
              <img
                key={movie.id}
                className={`row_poster ${isLarge && "row_posterLarger"}`}
                src={`${baseUrl}${
                  isLarge ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            );
          else return null;
        })}
      </div>
    </div>
  );
}

export default Row;
