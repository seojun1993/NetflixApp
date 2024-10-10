import React, { useState } from 'react'
import { Alert } from 'bootstrap';
import { useSearchMovieQuery } from '../../hooks/useSearchMovie'
import { useSearchParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import MovieCard from '../../common/MovieCard/MovieCard';
import ReactPaginate from 'react-paginate';

// 경로 2가지
// nav바에서 클릭해서 온 경우 => popluarMovie 보여주기
// keyword를 입력해서 온 경우 => keyword와 관련된 영화들을 보여줌

// 페이지네이션 설치
// page state 만들기
// 페이지네이션 클릭할때마다 page 바꿔주기
// page값이 바뀔 때 마다 useSearchMovie에 page까지 넣어서 fetch

const MoviePage = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useSearchParams();
  const keyword = query.get("q");
  const { data, isLoading, isError, error } = useSearchMovieQuery({ keyword, page });

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1)
  }

  console.log(data);

  if(isLoading){ return <h1>Loading...</h1>}
  if(isError) { return <Alert varient='danger'>{error.message}</Alert>}
    
  return (
    <Container>
      <Row>
        <Col lg={4} xs={12}> 필터</Col>
        <Col lg={8} xs={12}>
          <Row>
          {
            data?.results.map((movie, index) => 
              (<Col key={index} lg={4} xs={12}> <MovieCard movie={movie}/> </Col>)
            )
          }
          </Row>
          <ReactPaginate
                  nextLabel="next >"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={3}
                  marginPagesDisplayed={2}
                  pageCount={data?.total_pages}
                  previousLabel="< previous"
                  pageClassName="page-item"
                  pageLinkClassName="page-link"
                  previousClassName="page-item"
                  previousLinkClassName="page-link"
                  nextClassName="page-item"
                  nextLinkClassName="page-link"
                  breakLabel="..."
                  breakClassName="page-item"
                  breakLinkClassName="page-link"
                  containerClassName="pagination"
                  activeClassName="active"
                  renderOnZeroPageCount={null}
                  forcePage={page - 1}
                />

        </Col>
      </Row>
    </Container>
  )
}

export default MoviePage
