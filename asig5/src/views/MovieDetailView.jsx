import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetailView.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';

const MovieDetailView = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}`, {
        params: {
          api_key: import.meta.env.VITE_TMDB_API_KEY,
          language: 'en-US',
        },
      })
      .then((res) => setMovie(res.data))
      .catch((err) => {
        console.error(err);
        setError('Failed to load movie details.');
      });
  }, [movieId]);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!movie) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="movie-detail-view">
      <Header />
      <div className="movie-detail-container">
        <img
          className="movie-detail-poster"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-detail-info">
          <h2>{movie.title}</h2>
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Rating:</strong> {movie.vote_average} / 10</p>
          <p className="overview">{movie.overview}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MovieDetailView;
