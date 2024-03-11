import baseApi from "..";
import { HoverableItemType } from "../../../pages/filmDetails/components/interfaces";
import axios from "axios";

export const getAllMovies = async (): Promise<TableData | null> => {
  try {
    const { data } = await baseApi.get("api/films");

    const movieRes: MovieResponse[] = data.results.map(
      ({ fields }: FilmResults) => {
        return {
          title: fields.title,
          director: fields.director,
          producer: fields.producer,
          release_date: fields.release_date,
          episode_id: fields.episode_id,
          url: fields.url,
        };
      }
    );

    return {
      count: data.fields?.count,
      pages: data.fields?.pages,
      results: movieRes,
    };
  } catch (e) {
    console.error("Something went wrong while remapping movies response");
    return null;
  }
};

export const getSingleMovie = async (filmId: string) => {
  const { data: FilmResData } = await baseApi.get(`api/films/${filmId}`);
  const fetchedCharacters = await getNameUrlWithUrlList(
    FilmResData.fields.characters
  );
  const fetchedPlanets = await getNameUrlWithUrlList(
    FilmResData.fields.planets
  );
  const fetchedSpecies = await getNameUrlWithUrlList(
    FilmResData.fields.species
  );
  const fetchedStarships = await getNameUrlWithUrlList(
    FilmResData.fields.starships
  );
  const fetchedVehicles = await getNameUrlWithUrlList(
    FilmResData.fields.vehicles
  );
  return {
    ...FilmResData.fields,
    characters: fetchedCharacters,
    planets: fetchedPlanets,
    species: fetchedSpecies,
    starships: fetchedStarships,
    vehicles: fetchedVehicles,
  };
};

export const getItemByUrl = async (itemUrl: string) =>
  await baseApi.get(itemUrl);

export const getItemAndSubitemsByUrl = async (itemUrl: string) => {
  const { data } = await baseApi.get(itemUrl);
  let fields = data.fields;

  const mapping = Object.keys(fields).map(async (itemKey: string) => {
    // Only url arrays are returned from the api
    if (Array.isArray(fields[itemKey]) && fields[itemKey].length) {
      fields[itemKey] = await getNameUrlWithUrlList(fields[itemKey]);
    } else if (fields[itemKey]?.includes("/api")) {
      fields[itemKey] = await getNameWithUrl(fields[itemKey]);
    }
  });

  return await axios.all(mapping).then(() => fields);
};

const getNameWithUrl = async (itemUrl: string) => {
  const { data } = await baseApi.get(itemUrl);
  return data.fields.starship_class || data.fields.name;
};

const getNameUrlWithUrlList = async (
  urlList: string[]
): Promise<HoverableItemType[]> => {
  const itemReq = urlList.map((url) => baseApi.get(url));
  return axios.all(itemReq).then((responses) => {
    return responses.map(({ data }) => ({
      name: data.fields.starship_class || data.fields.name,
      url: data.fields.url,
    }));
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
