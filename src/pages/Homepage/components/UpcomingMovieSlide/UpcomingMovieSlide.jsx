import React from 'react'
import { useUpComingMoviesQuery } from '../../../../hooks/useUpComingMovieSlide';
import { Alert } from 'bootstrap';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';

const UpcomingMovieSlide = () => {
  const { data, isLoading, isError, error } = useUpComingMoviesQuery();
  if(isLoading){ return <h1>Loading...</h1>}
  if(isError) { return <Alert varient='danger'>{error.message}</Alert>}

  return (
      <div>
        <MovieSlider title='Upcoming Movies' movies={data.results} responsive={responsive}/>
      </div>
  )
}

export default UpcomingMovieSlide
