import React from 'react'
import { Alert } from 'bootstrap';
import { useParams } from 'react-router-dom';
import { useDetailMovieQuery } from '../../hooks/useDetailMovie';
import { Container, Row, Col } from 'react-bootstrap';

const MovieDetailPage = () => {
  let { id } = useParams();
  const { data, isLoading, isError, error } = useDetailMovieQuery({id});

  console.log(data);

  if(isLoading){ return <h1>Loading...</h1>}
  if(isError) { return <Alert varient='danger'>{error.message}</Alert>}

  return (
    <Container>
      <Row>
        <Col lg={6} sm={12} style={{ color : 'white' }}>
          <h1>{data.title}</h1>
          <span>상영시간 : {data.runtime} minutes</span>
          장르 : 
          {data.genres.map((genre, index) => (
            <span key={index}>{genre.name}</span>
            ))}
          <p>{data.overview}</p>
          <span>개봉일 : {data.release_date}</span>
        </Col>

        <Col lg={6} sm={12}>
          <img src={'https://media.themoviedb.org/t/p/w533_and_h300_bestv2/' + data.poster_path}/>
        </Col>



        </Row>
    </Container>
  )
}

export default MovieDetailPage
