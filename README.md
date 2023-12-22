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

- /api/movies | GET | Gets a list of movies 
- /api/movies/{movieid} | GET | Gets a single movie 
- /api/movies/{movieid}/reviews | GET | Get all reviews for movie 
- /api/movies/{movieid}/reviews | POST | Create a new review for Movie 



## Security and Authentication

+ Protected Routes 
+ Hashing and salting of passwords in the database
+ JSON Web tokens 



## Integrating with React App

Describe how you integrated your React app with the API. List the views that use your Web API instead of the TMDB API. Describe any other updates to the React app from Assignment One.

