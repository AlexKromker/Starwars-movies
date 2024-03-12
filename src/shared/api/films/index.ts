import baseApi from "..";

export const getAllMovies = async () => await baseApi.get("api/films");

export const getSingleMovie = async (filmId: string) =>
  await baseApi.get(`api/films/${filmId}`);

export const getItemByUrl = async (itemUrl: string) =>
  await baseApi.get(itemUrl);

export type TMovieResponse = {
  title: string;
  director: string;
  producer: string;
  release_date: string;
  url: string;
};

export type TFilmResults = {
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
