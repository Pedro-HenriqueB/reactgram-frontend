import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import photoService from "../services/PhotoService";

const initialState = {
  photos: [],
  photo: {},
  error: false,
  success: false,
  loading: false,
  message: null,
};

// funcoes
export const photoSlice = createSlice({
  name: "photo",
  initialState,
  reducers: {
    resetMessage: (state) => {
      state.message = null;
    },
  },
});

export const { resetMessage } = photoSlice.actions;
export default photoSlice.reducer;
