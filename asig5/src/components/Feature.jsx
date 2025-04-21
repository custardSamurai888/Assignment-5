import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Feature.css';

const Feature = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log('API response:', data); // Check the browser console for helpful info
        setMovies(data.results.slice(0, 3));
      })
      .catch(err => console.error('Error fetching movies:', err));
  }, []);
  
  return (
    <div className="feature-section">
      <h2>Featured Now Playing</h2>
      <div className="feature-movies">
        {movies.map(movie => (
          <div key={movie.id} className="movie-card">
            {movie.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            )}
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
