import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import Statistics from "../Pages/Statistics";
import About from "../Pages/About";
import DashBoard from "../Pages/DashBoard";
import Wishlist from "../components/wishlist/Wishlist";
import Cart from "../components/cart/Cart"
import GadgetsDetail from "../components/Gadgets/GadgetsDetail";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home index />
      },
      {
        path: '/home',
        element: <Home />
      },

      {
        path: '/about',
        element: <About />
      },
      {
        path: '/statistics',
        element: <Statistics />
      },
      {
        path: '/gadget/:id',
        element: <GadgetsDetail />
      },
      {
        path: '/dashboard',
        element: <DashBoard />,
        children: [
          {
            path: 'cart',
            element: <Cart index />,
          },
          {
            path: "wishlist",
            element: <Wishlist />,
          },
        ],
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  },
]);