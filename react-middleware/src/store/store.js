import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/users/usersSlice";
import addPrefixMiddleware from "../middleware/addPrefixMiddleware";

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(addPrefixMiddleware),
});

export default store;
