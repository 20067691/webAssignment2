import React from "react";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import MovieListPageTemplate from "../templateMovieListPage";

const ActorDetails = ({ actor }) => {
  console.log(actor.movie_credits.cast)
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Avatar
          alt={actor.name}
          src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
          sx={{ width: 200, height: 200 }}
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <Typography variant="h4" gutterBottom>
          {actor.name}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Place of Birth: {actor.place_of_birth}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Occupation: {actor.known_for_department}
        </Typography>
        <Paper elevation={3} style={{ padding: "10px", marginTop: "10px" }}>
          <Typography variant="body1">{actor.biography}</Typography>
        </Paper>
      </Grid>
      <MovieListPageTemplate 
      title={actor.name}
      movies={actor.movie_credits.cast}
      
      action = {(movie) => {
      return null
    }
        }
      />
    </Grid>
  );
};

export default ActorDetails;