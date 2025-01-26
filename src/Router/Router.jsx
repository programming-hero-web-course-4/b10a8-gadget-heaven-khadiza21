import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import About from "../components/About/About";
import NotFound from "../Pages/NotFound";

  
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
      ]
    },
    {
      path: '*',
      element: <NotFound />
    },
  ]);