import movieModel from './movieModel';
import asyncHandler from 'express-async-handler';
import express from 'express';
import {getUpcomingMovies, getGenres, getMovies, getNowPlaying, getPopularPeople, getTopRatedMovie, getMovie, getMovieImages, getMovieReviews, getActorDetails, getMovieAvailability} from '../tmdb-api';

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    let { page = 1, limit = 10 } = req.query; // destructure page and limit and set default values
    [page, limit] = [+page, +limit]; //trick to convert to numeric (req.query will contain string values)

    // Parallel execution of counting movies and getting movies using movieModel
    const [total_results, results] = await Promise.all([
        movieModel.estimatedDocumentCount(),
        movieModel.find().limit(limit).skip((page - 1) * limit)
    ]);
    const total_pages = Math.ceil(total_results / limit); //Calculate total number of pages (= total No Docs/Number of docs per page) 

    //construct return Object and insert into response object
    const returnObject = {
        page,
        total_pages,
        total_results,
        results
    };
    res.status(200).json(returnObject);
}));

// Get movie details
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const movie = await movieModel.findByMovieDBId(id);
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({message: 'The movie you requested could not be found.', status_code: 404});
    }
}));

router.get('/tmdb/upcoming', asyncHandler(async (req, res) => {
    const page = req.query.page || 1;
    const upcomingMovies = await getUpcomingMovies(page);
    res.status(200).json(upcomingMovies);
}));


router.get('/tmdb/genres', asyncHandler(async (req, res) => {
    const genres = await getGenres();
    res.status(200).json(genres);
}));

router.get('/tmdb/movies', asyncHandler(async (req, res) => {
    const page = req.query.page || 1;
    const movies = await getMovies(page);
    res.status(200).json(movies);
}));

router.get('/tmdb/now_playing', asyncHandler(async (req, res) => {
    const nowPlaying = await getNowPlaying();
    res.status(200).json(nowPlaying);
}));

router.get('/tmdb/person/popular', asyncHandler(async (req, res) => {
    const page = req.query.page || 1;
    const popularPeople = await getPopularPeople(page);
    res.status(200).json(popularPeople);
}));

router.get('/tmdb/movie/top_rated', asyncHandler(async (req, res) => {
    const page = req.query.page || 1;
    const topRatedMovie = await getTopRatedMovie(page);
    res.status(200).json(topRatedMovie);
}));

router.get('/tmdb/movie/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const movie = await getMovie(id);
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({ code: 404, msg: 'Unable to find movie' });
    }
});


router.get('/tmdb/movie/:id/images', async (req, res) => {
    const id = parseInt(req.params.id);
    const images = await getMovieImages(id);
    if (images) {
        res.status(200).json(images);
    } else {
        res.status(404).json({ code: 404, msg: 'Unable to find movie posters' });
    }
});

router.get('/tmdb/movie/:id/reviews', async (req, res) => {
    const id = parseInt(req.params.id);
    const reviews = await getMovieReviews(id);
    if (reviews) {
        res.status(200).json(reviews);
    } else {
        res.status(404).json({ code: 404, msg: 'Unable to find movie reviews' });
    }
});

router.get('/tmdb/person/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const person = await getActorDetails(id);
    if (person) {
        res.status(200).json(person);
    } else {
        res.status(404).json({ code: 404, msg: 'Unable to find actor details' });
    }
});

router.get('/tmdb/movie/availability/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const availability = await getMovieAvailability(id);
    if (availability) {
        res.status(200).json(availability);
    } else {
        res.status(404).json({ code: 404, msg: 'Unable to find movie providers in Ireland' });
    }
});

export default router;