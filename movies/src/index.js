import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import WriteReviewPage from "./pages/addMovieReview";
import WatchlistPage from "./pages/watchlistPage";
import ActorDetailsPage from "./pages/actorDetailsPage";
import PopularActorPage from "./pages/popularActorPage";
import TopRatedPage from "./pages/topRatedMovies";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Switch } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false
    },
  },
});



const App = () => {

  // state to manage the dark mode
  const [toggleDarkMode, setToggleDarkMode] = useState(true);

  // function to toggle the dark mode as true or false
  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };


  // // applying the primary and secondary theme colors
  const darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? 'dark' : 'light', // handle the dark mode state on toggle
      primary: {
        main: '#90caf9',

      },
      secondary: {
        main: '#5aafd1',

      },

    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />



      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <SiteHeader />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', paddingLeft: 20 }}>
            <FormControl component="fieldset">
              <FormGroup aria-label="position" row>
                <FormControlLabel
                  value="end"
                  control={<Switch checked={toggleDarkMode} onChange={toggleDarkTheme} />}
                  label="Dark mode"
                  labelPlacement="end"
                />
              </FormGroup>
            </FormControl>

          </div>
          <MoviesContextProvider>
            <Routes>
              <Route path="/movies/rated" element={<TopRatedPage />} />
              <Route path="/person/:id" element={<ActorDetailsPage />} />
              <Route path="/movies/actors" element={<PopularActorPage />} />
              <Route path="/movies/watchlist" element={<WatchlistPage />} />
              <Route path="/reviews/form" element={<WriteReviewPage />} />
              <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
              <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
              <Route path="/reviews/:id" element={<MovieReviewPage />} />
              <Route path="/movies/:id" element={<MoviePage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </MoviesContextProvider>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>


    </ThemeProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"))
rootElement.render(<App />);