import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../shared/store";

interface PopupState {
  loading: boolean;
  title: string;
  content: any; // Object containing key-value pairs to be displayed in the popup menu
  visible: boolean;
}

const initialState: PopupState = {
  loading: false,
  title: "",
  content: {},
  visible: false,
};

const popupSlice = createSlice({
  name: "popupMenu",
  initialState,
  reducers: {
    showLoadingPopup: (state) => {
      const newState = {
        ...state,
        visible: true,
        loading: true,
      };
      return newState;
    },
    setPopupContent: (state, action: PayloadAction<any>) => {
      const newState = {
        loading: false,
        title: action.payload.title,
        content: action.payload.content,
        visible: true,
      };
      return newState;
    },
    destroyPopupContent: () => {
      return initialState;
    },
  },
});

export const { showLoadingPopup, setPopupContent, destroyPopupContent } =
  popupSlice.actions;

export const selectPopupSlice = (state: RootState) => state.popupMenu;

export default popupSlice.reducer;
