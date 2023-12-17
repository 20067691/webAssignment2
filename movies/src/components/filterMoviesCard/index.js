import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import img from '../../images/pixel-art-movie-ticket-icon-for-8bit-game-on-white-background-vector.jpg'
import { getGenres } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'
import { Box } from "@mui/material";

const formControl =
{
  margin: 1,
  minWidth: 220,
  backgroundColor: "#808080",

};

const FilterMoviesCard = (props) => {
  const [sortOption, setSortOption] = useState('desc');
  const { data, error, isLoading, isError } = useQuery('genres', getGenres);

  if (isLoading) {
    return <Spinner />;

  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const genres = data.genres;
  if (genres[0].name !== 'All') {
    genres.unshift({ id: '0', name: 'All' });
  }

  const handleChange = (e, type, value) => {
    e.preventDefault();

    if (type === 'sort') {
      setSortOption(value); 
      props.onUserInput(type, value);
    } else {
      props.onUserInput(type, value);
    }
  };

  const handleTextChange = (e) => {
    handleChange(e, 'name', e.target.value);
  };

  const handleGenreChange = (e) => {
    handleChange(e, 'genre', e.target.value);
  };

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgb(204, 204, 0)',
      }}
      variant="outlined"
    >
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter the movies.
        </Typography>
        <TextField
          sx={{ ...formControl }}
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
          value={props.titleFilter}
          onChange={handleTextChange}
        />
        <FormControl sx={{ ...formControl }}>
          <InputLabel id="genre-label">Genre</InputLabel>
          <Select
            labelId="genre-label"
            id="genre-select"
            defaultValue=""
            value={props.genreFilter}
            onChange={handleGenreChange}
          >
            {genres.map((genre) => (
              <MenuItem key={genre.id} value={genre.id}>
                {genre.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </CardContent>
      <CardMedia
        component="img"
        height="200"
        image={img}  
        alt="Filter"
      />
      <Box sx={{ display: 'flex', alignItems: 'center', paddingLeft: '10px' }}>
        <FormControl sx={{ ...formControl, minWidth: 120, marginRight: '10px' }}>
          <InputLabel id="sort-label">Vote Average</InputLabel>
          <Select
            labelId="sort-label"
            id="sort-select"
            value={sortOption}
            onChange={(e) => handleChange(e, 'sort', e.target.value)}
          >
            <MenuItem value="desc">High-Low </MenuItem>
            <MenuItem value="asc">Low-High</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Card>
  );
};

export default FilterMoviesCard;