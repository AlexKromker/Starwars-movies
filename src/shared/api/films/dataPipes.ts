import axios from "axios";
import { FilmResults, MovieResponse, getAllMovies, getSindleMovie } from ".";
import baseApi from "..";
import { HoverableItemType } from "../../../pages/filmDetails/components/interfaces";

export const getMoviesWithMutation = async (): Promise<
  MovieResponse[] | null
> => {
  try {
    const { data } = await getAllMovies();

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

    return movieRes;
  } catch (e) {
    console.error("Something went wrong while remapping movies response");
    return null;
  }
};

export const getSingleMovieWithMutation = async (filmId: string) => {
  const { data: FilmResData } = await getSindleMovie(filmId);
  const fetchedCharacters = await getNameAndUrlWithUrlList(
    FilmResData.fields.characters
  );
  const fetchedPlanets = await getNameAndUrlWithUrlList(
    FilmResData.fields.planets
  );
  const fetchedSpecies = await getNameAndUrlWithUrlList(
    FilmResData.fields.species
  );
  const fetchedStarships = await getNameAndUrlWithUrlList(
    FilmResData.fields.starships
  );
  const fetchedVehicles = await getNameAndUrlWithUrlList(
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

const getNameWithUrl = async (itemUrl: string) => {
  const { data } = await baseApi.get(itemUrl);
  return data.fields.starship_class || data.fields.name;
};

export const getItemByUrl = async (itemUrl: string) =>
  await baseApi.get(itemUrl);

const getNameAndUrlWithUrlList = async (
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

export const getItemAndSubitemsByUrl = async (itemUrl: string) => {
  const { data } = await baseApi.get(itemUrl);
  let fields = data.fields;

  const mapping = Object.keys(fields).map(async (itemKey: string) => {
    // Only url arrays are returned from the api
    if (Array.isArray(fields[itemKey]) && fields[itemKey].length) {
      fields[itemKey] = await getNameAndUrlWithUrlList(fields[itemKey]);
    } else if (fields[itemKey]?.includes("/api")) {
      fields[itemKey] = await getNameWithUrl(fields[itemKey]);
    }
  });

  return await axios.all(mapping).then(() => fields);
};
