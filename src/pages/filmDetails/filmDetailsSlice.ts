import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../shared/store";
import { HoverableItemType } from "./components/interfaces";

export interface IFilmDetails {
  url: string;
  title: string;
  producer: string;
  director: string;
  opening_crawl: string;
  releaseDate: string;
  edited: string;
  created: string;
  episode_id: string;
  characters: HoverableItemType[];
  species: HoverableItemType[];
  starships: HoverableItemType[];
  vehicles: HoverableItemType[];
  planets: HoverableItemType[];
  loading: boolean;
}

const initialState: IFilmDetails = {
  url: "",
  title: "",
  producer: "",
  director: "",
  opening_crawl: "",
  releaseDate: "",
  edited: "",
  created: "",
  episode_id: "",
  characters: [],
  species: [],
  starships: [],
  vehicles: [],
  planets: [],
  loading: true,
};

const filmDetailsSlice = createSlice({
  name: "filmDetails",
  initialState,
  reducers: {
    setFilmDetails: (state, action: PayloadAction<any>) => {
      const newState = {
        ...state,
        ...action.payload,
      };
      return newState;
    },
  },
});

export const { setFilmDetails } = filmDetailsSlice.actions;

export const selectFilmDetails = (state: RootState) => state.filmDetails;

export default filmDetailsSlice.reducer;
