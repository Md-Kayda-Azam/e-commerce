import { createSlice } from "@reduxjs/toolkit";
import {
  createPermission,
  createRole,
  deletePermission,
  getAllPermission,
  getAllRoles,
  updatePermissionStatusData,
} from "./userApiSlice";

// create user slice
const userSlice = createSlice({
  name: "user",
  initialState: {
    permission: null,
    role: null,
    user: null,
    error: null,
    message: null,
  },
  reducers: {
    setMessageEmpty: (state) => {
      state.message = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPermission.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getAllPermission.fulfilled, (state, action) => {
        state.permission = action.payload;
      })
      .addCase(createPermission.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(createPermission.fulfilled, (state, action) => {
        state.permission.push(action.payload.permission);
        state.message = action.payload.message;
      })
      .addCase(deletePermission.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deletePermission.fulfilled, (state, action) => {
        state.permission = state.permission.filter(
          (data) => data._id != action.payload.permission._id
        );
        state.message = action.payload.message;
      })
      .addCase(updatePermissionStatusData.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updatePermissionStatusData.fulfilled, (state, action) => {
        state.permission[
          state.permission.findIndex(
            (data) => data._id == action.payload.permission._id
          )
        ] = action.payload.permission;
        state.message = action.payload.message;
      })
      .addCase(getAllRoles.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getAllRoles.fulfilled, (state, action) => {
        state.role = action.payload;
      })
      .addCase(createRole.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(createRole.fulfilled, (state, action) => {
        state.role.push(action.payload.role);
        state.message = action.payload.message;
      });
  },
});
// selectors
export const getAllPermissionData = (state) => state.user;
// actions
export const { setMessageEmpty } = userSlice.actions;
// export default

export default userSlice.reducer;
