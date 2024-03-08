import baseApi from "..";
import { mockFilmResponse, mockFilmsResponse } from "./mock-data";
import axios from "axios";

export const getAllMovies = async (): Promise<TableData | null> => {
  try {
    // TODO: Utilize api here instead of mock data
    // const { data } = await baseApi.get("api/films");
    const { data } = mockFilmsResponse;

    const movieRes: MovieResponse[] = data.results.map(
      ({ fields }: FilmResults) => {
        return {
          title: fields.title,
          director: fields.director,
          producer: fields.producer,
          releaseDate: fields.release_date,
          url: fields.url,
        };
      }
    );

    return {
      count: data.count,
      pages: data?.pages,
      results: movieRes,
    };
  } catch (e) {
    console.error("Something went wrong while remapping movies response");
    return null;
  }
};

export const getSingleMovie = async (filmId: string) => mockFilmResponse;
// await baseApi.get(`api/films/${filmId}`);

export const getCharacter = async (characterUrl: string) =>
  await baseApi.get(characterUrl);

export const getCharacterList = async (charcterUrlList: string[]) => {
  const characterReq = charcterUrlList.map((url) => baseApi.get(url));
  return axios.all(characterReq).then((responses) => {
    return responses.map(({ data }) => data.fields);
  });
};

export type TableData = {
  count: number;
  pages: number;
  results: MovieResponse[];
};

export type MovieResponse = {
  title: string;
  director: string;
  producer: string;
  releaseDate: string;
  url: string;
};

export type FilmsResponse = {
  count: number;
  next: number | null;
  previous: number | null;
  pages: number;
  results: FilmResults[];
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
