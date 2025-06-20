import React, { useEffect, useState } from "react";
import "./ApiData.css";

const API_KEY = "17e438f6bd9a369f94f8d37ac69cb117"; 
export default function ApiData() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-ES&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results || []);
        setTotalPages(data.total_pages || 1);
      })
      .catch((err) => console.error("Error al obtener películas:", err))
      .finally(() => setLoading(false));
  }, [page]);

  const moviesToShow = movies.slice(0, 12);

  return (
    <div className="api-data-container">
      <h2>Películas Populares (API TMDB)</h2>

      {loading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <div className="movie-grid">
            {moviesToShow.map((movie) => (
              <div key={movie.id} className="movie-card">
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                />
                <p>{movie.title}</p>
              </div>
            ))}
          </div>

          <div className="pagination">
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
              className="pagination-btn"
            >
              ◀ Anterior
            </button>

            <span>Página {page} de {totalPages}</span>

            <button
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              disabled={page === totalPages}
              className="pagination-btn"
            >
              Siguiente ▶
            </button>
          </div>
        </>
      )}
    </div>
  );
}

