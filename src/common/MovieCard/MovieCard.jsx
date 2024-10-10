import React from 'react'
import './MovieCard.style.css'
import Badge from 'react-bootstrap/Badge';
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';

const MovieCard = ( { movie } ) => {
  const {data:genreData } = useMovieGenreQuery();
  const showGenre = (genreIdList) => {
    if(!genreData) return []

    const genreNameList = genreIdList.map((id) => {
      const genreObJ = genreData.find((genre) => genre.id === id);
      return genreObJ.name;
    })

    return genreNameList;
  }

  return (
    <div style={{
        backgroundImage : `url(https://media.themoviedb.org/t/p/w533_and_h300_bestv2/${movie.poster_path})`,
    }}
    className='movie-card'
    >
        <div className='overlay'>
            <h1>{movie?.title}</h1>
            {showGenre(movie?.genre_ids).map((id, idx) => (<Badge key={idx} bg="danger">{id}</Badge>))}
        </div>

        <div>{movie?.vote_average}</div>
        <div>{movie?.popularity}</div>
        <div>{movie?.adult ? 'ove18' : 'under18'}</div>
    </div>
  )
}

export default MovieCard
