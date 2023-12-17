import React from "react";
import { useParams } from 'react-router-dom';
import ActorDetails from "../components/actorDetails";
import ScrollToTopButton from '../components/backToTop';
import { getActorDetails } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner';

const ActorDetailsPage = () => {
  const { id } = useParams();
  const { data: actor, error, isLoading, isError } = useQuery(
    ["actor", { id: id }],
    getActorDetails
  
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  console.log("credits",actor)
  

  return (
    <>
      {actor ? (
        <>
          
            <ActorDetails actor={actor} />
          
        </>
      ) : (
        <p>Waiting for actor details</p>
      )}
      <ScrollToTopButton/>
    </>
  );
};

export default ActorDetailsPage;