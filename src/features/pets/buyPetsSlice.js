import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./petsAPI";

const initialState = {
  pets: [],
  data: [],
  status: "fulfilled",
};

export const getDataAsyncAction = createAsyncThunk(
  "pets/fetchData",
  async () => {
    const res = await fetchData();
    return res.data;
  }
);

export const buyPetsSlice = createSlice({
  name: "pets",
  initialState,
  reducers: {
    // 买宠物的 action
    buyPetsAction(state, { payload }) {
      state.pets = state.pets.concat(payload);
    },
    // 取消宠物的 action
    filetrPetsAction(state, { payload }) {
      state.pets = state.pets.filter((animaly) => animaly !== payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDataAsyncAction.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const selectState = (state) => state.pets;

export const { buyPetsAction, filetrPetsAction } = buyPetsSlice.actions;

export default buyPetsSlice.reducer;
