# Assignment 2 - Web API.

Name: Dean Sinnott

## Features.

A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** (or modifications to existing features)
   
 + Pagination 


## Setup requirements.

[ Outline any non-standard setup steps necessary to run your app locally after cloning the repo.]

+ install npm 
+ install babel


## API Configuration

Create a .env file in the movies-api folder containing a valid database connction string, api key
and SECRET environment variable that will be used to create the JSON Web Token:
______________________
NODEENV=development
PORT=8080
HOST=
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret
______________________

## API Design
Give an overview of your web API design, perhaps similar to the following: 

- /api/movies/tmdb/movies | GET | Gets a list of movies 
- /api/movies/tmdb/movie/{movieid} | GET | Gets a single movie 
- /api/movies/tmdb/movie/{movieid}/reviews | GET | Get all reviews for movie 
- /api/movies/tmdb/upcoming | GET | Gets a list of upcoming movies 
- /api/movies/tmdb/genres | GET | Gets a list of genres 
- /api/movies/tmdb/now_playing | GET | Gets a list of movies currently in the cinema 
- /api/movies/tmdb/person/popular | GET | Gets a list of popular movie people, most popouar to least
- /api/movies/tmdb/movie/top_rated | GET | Gets of list of the most top rated movies 
- /api/movies/tmdb/movie/{movieid}/images | GET | Gets a list of movie posters for a single movie
- /api/movies/tmdb/person/{personid} | GET | Returns details on one person 
- /api/movies/tmdb/movie/availability/{movieid} | GET | Gets a list of streaming providers for a movie



## Security and Authentication

+ Protected Routes 
+ Hashing and salting of passwords in the database
+ JSON Web tokens 



## Integrating with React App

+ Describe how you integrated your React app with the API.
I have set up a backend API that serves as an intermediary between my frontend React application and TMDB. The frontend sends requests to my backend's API endpoints, and the backend is responsible for interacting with TMDB and returning the relevant data. This approach allows me to control access and handle authentication.


+ List the views that use your Web API instead of the TMDB API.
- Actor details page
- Home page
- Login page
- Movie details page 
- Movie reviews
- Favourites
- Watchlist 
- Popular people page 
- Sign up page 
- Top rated movies 
- Upcoming movies 


Describe any other updates to the React app from Assignment One.
- Sign up and Login page 
- User AUTHENTICATION
 

