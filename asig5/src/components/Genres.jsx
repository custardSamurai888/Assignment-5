import React, { useEffect, useState } from 'react';
import './Genres.css';
import axios from 'axios';
import { Link } from 'react-router-dom'; // 👈 make sure you import this

const Genres = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.themoviedb.org/3/genre/movie/list', {
        params: {
          api_key: import.meta.env.VITE_TMDB_API_KEY,
          language: 'en-US',
        },
      })
      .then((res) => {
        setGenres(res.data.genres);
      })
      .catch((err) => console.error('Genre API error:', err));
  }, []);

  return (
    <div className="genres">
      <h3>Genres</h3>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>
            <Link to={`/genre/${genre.id}`}>{genre.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Genres;
