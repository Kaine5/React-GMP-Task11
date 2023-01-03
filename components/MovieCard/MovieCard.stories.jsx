import React from 'react';

import MovieCard from './MovieCard';

const mockData = {
    id: '1',
    imgURL:
      "https://terrigen-cdn-dev.marvel.com/content/prod/2x/MilesPoster.jpg",
    imgAlt: "Lua",
    title: "Lua",
    releaseDate: "2022",
    genres: "cash game",
  }

export default {
    title: 'Movie Card',
    component: MovieCard,
};

export const MovieCardTest = () => <MovieCard {...mockData}/>