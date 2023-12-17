import React from 'react';
import { useQuery } from 'react-query';
import { getMovieAvailability } from '../../api/tmdb-api';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import Spinner from '../spinner'

const MovieAvailability = ({ movieId }) => {
  const { data: availabilityData, error, isLoading, isError } = useQuery(
    ['movieAvailability', { id: movieId }],
    getMovieAvailability
  );


  
  if (isLoading) {
    return <Spinner />;
  }

  
  if (isError) {
    return <p>Error loading movie availability: {error.message}</p>;
  }

  
  if (!availabilityData || !availabilityData.results) {
    return <p>No availability data found for this movie.</p>;
  }

    // Accessing data for Ireland 
    const irelandData = availabilityData.results.IE;

  if (!irelandData) {
    return <p>No availability data found for Ireland.</p>;
  }


  return (
    <div>
      <h3>Watch Now:</h3>
      <a href={irelandData.link} target="_blank" rel="noopener noreferrer">
        Watch on TMDB
      </a>

      <h3>Stream:</h3>
      {irelandData?.flatrate?.map((s) => (
        <Box key={s.provider_id} sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                <img
        src={`https://image.tmdb.org/t/p/w200/${s.logo_path}`}
        alt={s.provider_name}
        style={{ width: 40, height: 40, marginRight: 8 }}
      />
          <Typography>{s.provider_name}</Typography>
        </Box>
      ))}
  
      <h3>Rent:</h3>
      {irelandData?.rent?.map((a) => (
        <Box key={a.provider_id} sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                <img
        src={`https://image.tmdb.org/t/p/w200/${a.logo_path}`}
        alt={a.provider_name}
        style={{ width: 40, height: 40, marginRight: 8 }}
      />
          <Typography>{a.provider_name}</Typography>
        </Box>
      ))}

      
    
      <h3>Buy:</h3>
      {irelandData?.buy?.map((b) => (
      <Box key={b.provider_id} sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
      <img
        src={`https://image.tmdb.org/t/p/w200/${b.logo_path}`}
        alt={b.provider_name}
        style={{ width: 40, height: 40, marginRight: 8 }}
      />
      <Typography>{b.provider_name}</Typography>
    </Box>
      ))}
    </div>
  );
      }
  

export default MovieAvailability;
