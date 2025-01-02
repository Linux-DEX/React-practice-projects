import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "../feature/GlobalData.js";

export default configureStore({
  reducer: {
    filters: globalReducer,
  },
});
