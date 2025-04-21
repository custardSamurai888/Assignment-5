import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Genres from '../components/Genres'; // <-- include sidebar!
import './HomeView.css'; // reuse layout styling

import axios from 'axios';

const GenreView = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.themoviedb.org/3/discover/movie', {
        params: {
          api_key: import.meta.env.VITE_TMDB_API_KEY,
          with_genres: id,
        },
      })
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className="home-view">
      <Header />

      <div className="main-layout">
        <aside className="sidebar">
          <Genres />
        </aside>

        <div className="content-area">
          <h2>Movies in this Genre</h2>
          <div className="movie-cards">
            {movies.map((movie) => (
              <div key={movie.id} className="movie-card">
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title}
                />
                <p><strong>{movie.title}</strong></p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GenreView;
