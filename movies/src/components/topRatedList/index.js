import React from "react";
import Grid from "@mui/material/Grid";
import TopRatedMovieCard from "../topRatedMovieCard"; // Adjust the path based on your actual project structure

const TopRatedMovieList = ({ movies, action }) => {
  console.log("TopRatedMovieList", movies);

  let movieCards = movies.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <TopRatedMovieCard topRatedMovie={m} action={action}/>
    </Grid>
  ));

  return (
      
      movieCards
    
  );
};

export default TopRatedMovieList;
