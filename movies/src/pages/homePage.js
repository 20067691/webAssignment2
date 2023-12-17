import React, { useState } from 'react';
import { getMovies, getNowPlaying } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import ScrollToTopButton from '../components/backToTop';
import { Pagination } from '@mui/material';
import TopRatedMovieCard from '../components/topRatedMovieCard';




const HomePage = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const {  data, error, isLoading, isError, refetch }  = useQuery
  (['discover', { page: currentPage }], getMovies);
  const {data: releasedMovie , error: releasedError, isLoading: releasedLoading, isError: releasedIsError} = useQuery
  (['released-movies'], getNowPlaying);
  
  
  

  if (isLoading || releasedLoading) {
    return <Spinner />
  }

  if (isError || releasedIsError) {
    return <h1>{error.message }</h1>
  }  


  const movies = data.results;
  const check = releasedMovie.results;
  console.log("check", check)

  // Randomly select an index between 0 and 19 (inclusive)
  const randomIndex = Math.floor(Math.random() * 20);
  const newMovie = releasedMovie?.results[randomIndex];

  
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
    console.log(page)
    refetch({ currentPage }); // Use the updated page value
  };
  

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites)) 



  return (
    <>
      <h1 style={{ marginLeft: '20px' }}>In Theatres: </h1>
      <TopRatedMovieCard sx={{ padding: '20px' }} topRatedMovie={newMovie} />
    <PageTemplate
      title="Discover Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
    <Pagination style={{ marginTop: '20px', marginBottom: '20px', display: 'flex', justifyContent: 'center' }} 
    count={10} 
    color = "secondary" 
    page={currentPage} 
    onChange={handlePageChange} 
    size={'large'}
      />

      <ScrollToTopButton/>
    </>
    
);
};
export default HomePage;