import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";



export default function CastCard({cast, action}) {

        return (
          <Card sx={{ border: '2px solid lightblue', margin: '10px' }}>
            <CardMedia
              sx={{ minHeight: 200 , maxHeight: 400, padding: 10 }}
              image={`https://image.tmdb.org/t/p/w200/${cast.profile_path}`}
            />
            <CardContent>
              <Grid container>
                <Grid item xs={6}>
                  <Typography variant="h6" component="p">
                    <strong>{cast.name}</strong>
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Known For: {cast.known_for_department}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions disableSpacing>
              <Link to={`/person/${cast.id}`}>
                <Button variant="outlined" size="medium" color="primary">
                  More Info ...
                </Button>
              </Link>
            </CardActions>
          </Card>
        );
      }