import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import "./css/row.css";
import movieTrailer from "movie-trailer";
import instance from "../config/axios";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerURL, setTrailerURL] = useState("");
  const imageUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      console.table(request.data.results); //clean way to show array and lists
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const options = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailerURL) {
      setTrailerURL("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          //https://www.youtube.com//watch?v=XtMThy8QkqU
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerURL(urlParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${imageUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerURL && <YouTube videoId={trailerURL} opts={options} />}
    </div>
  );
};

export default Row;
