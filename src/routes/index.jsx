
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import HomePage from "~/pages/home";

 const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    loader: '',
    children: [
      {
        path: "test",
        element: <></>,
        loader: '',
      },
    ],
  },
  {
    path: "/home",
    element: <HomePage />,
    loader: '',
   
  },

]);
const RouterProviderConfig =()=>{
    return <RouterProvider router={router}/>
}
export default RouterProviderConfig