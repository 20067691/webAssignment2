import React, { useState} from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";
import AddToWatchlistIcon from "../components/cardIcons/addToWatchList";
import Spinner from "../components/spinner";
import { useQuery } from "react-query";
import { Pagination } from "@mui/material";
import ScrollToTopButton from "../components/backToTop";


const UpcomingMoviesPage = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const { data, error, isLoading, isError, refetch } = useQuery( 
    ['upcoming', { page: currentPage }],getUpcomingMovies);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const movies = data.results;

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
    console.log(page)
    refetch({ currentPage }); // Use the updated page value
  };

  return (
    <>
    
    <Pagination style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}count={10} color = "secondary" page={currentPage} onChange={handlePageChange}
    />
  
    <PageTemplate
      title='Upcoming Movies'
      movies={movies}
      action={(movie) => {
        return <AddToWatchlistIcon movie={movie} />
      }}
    />

<ScrollToTopButton/>
    </>
    
  
  );
};
export default UpcomingMoviesPage;