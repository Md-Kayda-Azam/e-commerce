import Layout from "../components/Layout/Layout";
import Users from "../pages/Users/Users";
import AdminDashboard from "../pages/dashboard/AdminDashboard";

// create private route
const privateRoute = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <AdminDashboard />,
      },
      {
        path: "/users",
        element: <Users />,
      },
    ],
  },
];

// export default

export default privateRoute;
