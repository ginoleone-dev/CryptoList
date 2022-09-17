import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { value: { coin: "bitcoin", days: "20", avgPrice: "" } };

// Reducer
const coinSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setTokenAndDay: (state, action) => {
      state.value = action.payload;
    },
  },
});

// coinSlice.actions get the actions inside the reducers object
export const { setTokenAndDay } = coinSlice.actions;

export const store = configureStore({
  reducer: {
    tokenInfo: coinSlice.reducer,
  },
});