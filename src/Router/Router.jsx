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
          path: '/dashboard',
          element: <DashBoard />,
          children: [
            {
              path: 'cart', 
              element: <Cart /> ,
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