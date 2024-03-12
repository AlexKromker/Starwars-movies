import axios from "axios";
import {
  TFilmResults,
  TMovieResponse,
  getAllMovies,
  getItemByUrl,
  getSingleMovie,
} from ".";
import { HoverableItemType } from "../../../pages/filmDetails/types";

export const getMoviesWithMutation = async (): Promise<
  TMovieResponse[] | null
> => {
  try {
    const { data } = await getAllMovies();

    const movieRes: TMovieResponse[] = data.results.map(
      ({ fields }: TFilmResults) => {
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
  try {
    const { data: FilmResData } = await getSingleMovie(filmId);

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
  } catch (e) {
    console.error("Failed to fetch and mutate movie\n", e);
    return null;
  }
};

const getNameWithUrl = async (itemUrl: string) => {
  try {
    const { data } = await getItemByUrl(itemUrl);
    return data.fields.starship_class || data.fields.name;
  } catch (e) {
    console.error("Failed to fetch item.\n", e);
  }
};

const getNameAndUrlWithUrlList = async (
  urlList: string[]
): Promise<HoverableItemType[] | null> => {
  try {
    const itemReq = urlList.map((url) => getItemByUrl(url));
    return axios.all(itemReq).then((responses) => {
      return responses.map(({ data }) => ({
        name: data.fields.starship_class || data.fields.name,
        url: data.fields.url,
      }));
    });
  } catch (e) {
    console.error("Failed to names and url's\n", e);
    return null;
  }
};

export const getItemAndSubitemsByUrl = async (itemUrl: string) => {
  try {
    const { data } = await getItemByUrl(itemUrl);
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
  } catch (e) {
    console.error("Failed to fetch item and/or subitems\n", e);
    return null;
  }
};
