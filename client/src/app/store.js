import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";

// create store
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

// export default
export default store;
