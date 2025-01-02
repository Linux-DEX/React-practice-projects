import { createSlice } from "@reduxjs/toolkit";

export const globalState = createSlice({
  name: "filters",
  initialState: {
    yearOfService: 0,
  },
  reducers: {
    changeYearOfService: (state, action) => {
      localStorage.setItem("yearOfService", JSON.stringify(action.payload));
      state.yearOfService = action.payload;
    },
    getYearOfService: (state) => {
      const data = localStorage.getItem("yearOfService");
      if (data) {
        state.yearOfService = JSON.parse(data);
      }
    },
  },
});

export const { changeYearOfService, getYearOfService } = globalState.actions;

export default globalState.reducer;
