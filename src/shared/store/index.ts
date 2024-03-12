import { configureStore } from "@reduxjs/toolkit";
import landingReducer from "../../pages/landing/landingSlice";
import popupMenuReducer from "../../components/movieDetailsPopup/popupSlice";
import filmDetailsReducer from "../../pages/filmDetails/filmDetailsSlice";

export const store = configureStore({
  reducer: {
    landing: landingReducer,
    filmDetails: filmDetailsReducer,
    popupMenu: popupMenuReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
