import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import StarRateIcon from '@mui/icons-material/StarRate';
import CalendarIcon from '@mui/icons-material/CalendarToday';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import img from '../../images/film-poster-placeholder.png'

const TopRatedMovieCard = ({ topRatedMovie, action }) => {
  return (
    <Card sx={{ display: 'flex', marginBottom: 2, marginLeft: 2, width: '90%' }}>
      
      <Box sx={{ width: 200, minWidth: 200, maxHeight: 400 }}>
        <CardMedia
          component="img"
          image={
            topRatedMovie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${topRatedMovie.poster_path}`
              : img 
          }
          alt={topRatedMovie.title}
          sx={{ width: '90%', height: '100%' }}
        />
      </Box>

      
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <CardContent>
          <CardHeader
            avatar={
              <Avatar sx={{ backgroundColor: 'red' }}>
                <StarRateIcon />
              </Avatar>
            }
            title={
              <Typography variant="h5" component="p">
                {topRatedMovie.title}
              </Typography>
            }
          />
          <Typography variant="subtitle2" color="text.secondary" sx={{ marginBottom: 1 }}>
            <CalendarIcon fontSize="small" />
            {topRatedMovie.release_date}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" sx={{ marginBottom: 1 }}>
            <StarRateIcon fontSize="small" />
            {'  '} {topRatedMovie.vote_average}{' '}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {topRatedMovie.overview}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 'auto', marginBottom: 1 }}>
          <CardActions disableSpacing>
            <Link to={`/movies/${topRatedMovie.id}`}>
              <Button variant="outlined" size="medium" color="primary">
                More Info ...
              </Button>
            </Link>
          </CardActions>
        </Box>
      </Box>
    </Card>
  );
};

export default TopRatedMovieCard