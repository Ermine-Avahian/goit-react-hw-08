import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: "", number: "" };

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
    changePhoneFilter: (state, action) => {
      state.number = action.payload;
    },
  },
});

export const { changeFilter, changePhoneFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
