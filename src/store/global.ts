import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
interface GlobalState {
  checked: boolean;
}

const initialState: GlobalState = {
  checked: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setChecked: (state, action: PayloadAction<boolean>) => {
      state.checked = action.payload;
    }
  },
});

export const {
  setChecked,
} = globalSlice.actions;

export const globalSelector = (state: RootState) => state.global;

export default globalSlice.reducer;
