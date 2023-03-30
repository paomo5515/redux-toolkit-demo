import { configureStore } from "@reduxjs/toolkit";
import buyPetsReducer from "../features/pets/buyPetsSlice";

export const store = configureStore({
  reducer: {
    pets: buyPetsReducer,
  },
});
