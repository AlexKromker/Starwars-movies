import { configureStore } from "@reduxjs/toolkit";
import tableReducer from "../../components/table/tableSlice";
import popupMenuReducer from "../../components/popupMenu/popupSlice";
import filmDetailsReducer from "../../pages/filmDetails/filmDetailsSlice";

export const store = configureStore({
  reducer: {
    table: tableReducer,
    filmDetails: filmDetailsReducer,
    popupMenu: popupMenuReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
