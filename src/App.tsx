import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Button } from "./components/ui/button";
import { useAppSelector } from "./hooks";
import {
  HomeLayout,
  Landing,
  Error,
  Products,
  SingleProduct,
  Cart,
  About,
  Register,
  Login,
  Checkout,
  Orders,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
