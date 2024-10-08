import React from 'react'
import Banner from './components/Banner/Banner'
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide'
import './Homepage.style.css'

// 1. 배너 => popular 영화를 들고 와서 첫번 째 아이템 보여주기
// 2. popular movie
// 3. top movie
// 4. upcoming movie

const Homepage = () => {
  return (
    <div>
      <Banner />
      <PopularMovieSlide />
    </div>
  )
}

export default Homepage
