import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { getPopularPeople } from '../api/tmdb-api';
import ActorList from '../components/actorList';
import { Pagination } from '@mui/material';
import ScrollToTopButton from '../components/backToTop';

const PopularActorPage = (action) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20;
  const { data: people, error: peopleError, isLoading: peopleLoading, refetch } = useQuery(
    ['popular-people', { page: currentPage }],
    getPopularPeople
  );

  if (peopleLoading) {
    return <Spinner />;
  }

  if (peopleError) {
    return <h1>{peopleError.message}</h1>;
  }

  const popularPeople = people.results;
  console.log(popularPeople)

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
    console.log(page)
    refetch({ currentPage }); // Use the updated page value
  };

  return (
    <div >
      <Pagination style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}count={10} color = "secondary" page={currentPage} onChange={handlePageChange}
      />
      <h1>Popular Actors</h1>
      <ActorList actors={popularPeople} />
      <ScrollToTopButton/>
    </div>
  );
};

export default PopularActorPage;