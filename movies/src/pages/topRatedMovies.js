import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { getTopRatedMovie } from '../api/tmdb-api';
import TopRatedMovieList from '../components/topRatedList';
import { Pagination } from '@mui/material';
import ScrollToTopButton from '../components/backToTop';

const TopRatedPage = (action) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20;
  const { data: ratedMovies, error: ratedError, isLoading: ratedLoading, refetch } = useQuery(
    ['rated-movies', { page: currentPage }],
    getTopRatedMovie
  );

  if (ratedLoading) {
    return <Spinner />;
  }

  if (ratedError) {
    return <h1>{ratedError.message}</h1>;
  }

  const topRatedMovies = ratedMovies?.results;
  console.log(topRatedMovies)

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
    console.log(page)
    refetch({ currentPage }); // Use the updated page value
  };

  return (
    <div >
      <Pagination style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}count={10} color = "secondary" page={currentPage} onChange={handlePageChange}
      />
      <h1>Rated Movies</h1>
      <TopRatedMovieList movies={topRatedMovies} />
      <ScrollToTopButton/>
    </div>
    
  );
};

export default TopRatedPage;