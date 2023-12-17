import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'

const AddToWatchlistIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToWatchlsit = (e) => {
    e.preventDefault();
    context.addToWatchlist(movie);
  };

  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToWatchlsit}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToWatchlistIcon;