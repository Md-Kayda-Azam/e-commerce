import { createSlice } from "@reduxjs/toolkit";

// create auth slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
  },
  reducers: {},
  extraReducers: () => {},
});

// selectors

// actions

// export default

export default authSlice.reducer;
