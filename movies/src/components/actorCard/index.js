import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import CardActions from "@mui/material/CardActions";

const ActorCard = ({ actor, action }) => {
    
    return (
        <Card>
          <CardHeader
            avatar={
              <Avatar alt={actor.name} src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`} />
            }
            title={actor.name}
            subheader={`Popularity: ${actor.popularity}`}
          />
          <CardContent>
            <Typography variant="h6" component="div">
              {`Best known for: ${actor.known_for[0].title || actor.known_for[0].name }`}
            </Typography>
            
          </CardContent>
          <CardActions disableSpacing>
        
        <Link to={`/person/${actor.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
        </Card>
      );
        }

export default ActorCard;