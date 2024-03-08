import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../shared/store";
import { sortWithPropertyValue } from "../../shared/utils";

interface TableState {
  loading: boolean;
  legendData?: any; // Object with key-value pairs used for legend
  headerItems: Array<any>; // TODO: Update these types
  rows: Array<any>;
  sortedBy: string | null;
  orderBy: string;
  rowUniqueKey: string; // Which object should be used for the unique key?
}

const initialState: TableState = {
  loading: true,
  legendData: {},
  headerItems: [],
  rows: [],
  sortedBy: null,
  orderBy: "asc",
  rowUniqueKey: "",
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setTableLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    updateTableContent: (
      state,
      action: PayloadAction<{
        loading: boolean;
        headerItems: Array<any>;
        rows: Array<any>;
        rowUniqueKey: string;
        legendData: Object;
      }>
    ) => {
      const newState = { ...state, ...action.payload };
      return newState;
    },
    setSortedBy: (state, action: PayloadAction<string>) => {
      if (state.sortedBy === action.payload) {
        const newOrder = state.orderBy === "asc" ? "desc" : "asc";
        const newState = {
          ...state,
          orderBy: newOrder,
          rows: sortWithPropertyValue(state.rows, action.payload, newOrder),
        };

        return newState;
      } else {
        const newState = {
          ...state,
          sortedBy: action.payload,
          orderBy: "asc",
          rows: sortWithPropertyValue(state.rows, action.payload, "asc"),
        };

        return newState;
      }
    },
  },
});

export const { setTableLoading, updateTableContent, setSortedBy } =
  tableSlice.actions;

export const selectTable = (state: RootState) => state.table;

export default tableSlice.reducer;
