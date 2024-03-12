import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../shared/store";
import { sortWithPropertyValue } from "../../shared/utils";
import { ITableState } from "../../components/table/types";

interface ILanding {
  tableData: ITableState;
}

const initialState: ILanding = {
  tableData: {
    loading: true,
    headerItems: [],
    rows: [],
    sortedBy: "",
    orderBy: "asc",
    rowUniqueKey: "",
  },
};

const landingSlice = createSlice({
  name: "landing",
  initialState,
  reducers: {
    setTableLoading: (state, action: PayloadAction<boolean>) => {
      state.tableData.loading = action.payload;
    },
    updateTableContent: (
      state,
      action: PayloadAction<{
        loading: boolean;
        headerItems: Array<any>;
        rows: Array<any>;
        rowUniqueKey: string;
      }>
    ) => {
      const newTableData = { ...state.tableData, ...action.payload };
      state.tableData = newTableData;
    },
    setSortedBy: (state, action: PayloadAction<string>) => {
      if (state.tableData.sortedBy === action.payload) {
        const newOrder = state.tableData.orderBy === "asc" ? "desc" : "asc";
        const newTableData = {
          ...state.tableData,
          orderBy: newOrder,
          rows: sortWithPropertyValue(
            state.tableData.rows,
            action.payload,
            newOrder
          ),
        };

        state.tableData = newTableData;
      } else {
        const newTableData = {
          ...state.tableData,
          sortedBy: action.payload,
          orderBy: "asc",
          rows: sortWithPropertyValue(
            state.tableData.rows,
            action.payload,
            "asc"
          ),
        };

        state.tableData = newTableData;
      }
    },
  },
});

export const { setTableLoading, updateTableContent, setSortedBy } =
  landingSlice.actions;

export const selectLanding = (state: RootState) => state.landing;
export const selectLandingTable = (state: RootState) => state.landing.tableData;

export default landingSlice.reducer;
