import baseApi from "..";

export const getAllMovies = async () => await baseApi.get("api/films");

export const getSindleMovie = async (filmId: string) =>
  await baseApi.get(`api/films/${filmId}`);

export type MovieResponse = {
  title: string;
  director: string;
  producer: string;
  release_date: string;
  url: string;
};

export type FilmResults = {
  fields: {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: string[];
    planets: string[];
    starships: string[];
    vehicles: string[];
    species: string[];
    created: string;
    edited: string;
    url: string;
  };
};
