import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { router } from './Router/Router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './contextS/CartWishListContext';


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <CartProvider>
   
      <div >
        <RouterProvider router={router} />
      </div>
    
    <ToastContainer />
   </CartProvider>
  </StrictMode>,
)
