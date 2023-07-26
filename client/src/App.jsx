import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getLoginUser } from "./features/auth/authApiSlice";
import { getAllPermission, getAllRoles } from "./features/user/userApiSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      dispatch(getLoginUser());
    }
  }, [dispatch]);
  useEffect(() => {
    dispatch(getAllPermission());
    dispatch(getAllRoles());
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
