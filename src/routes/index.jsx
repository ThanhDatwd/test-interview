import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "~/pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    loader: "",
  },
]);
const RouterProviderConfig = () => {
  return <RouterProvider router={router} />;
};
export default RouterProviderConfig;
