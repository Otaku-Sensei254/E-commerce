import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './Pages/Shop.jsx';
import Products from './Pages/Products.jsx';
import Popular from './Componets/Popular/Popular.jsx';
import Iphones from './Componets/PhoneModels/Iphones.jsx';
import ViVos from './Componets/PhoneModels/ViVos.jsx'
import Nokia from './Componets/PhoneModels/Nokia.jsx';
import Samsung from './Componets/PhoneModels/Samsung.jsx';
import Oppo from './Componets/PhoneModels/Oppo.jsx';
import Tecno from './Componets/PhoneModels/Tecno.jsx';
import Infinix from './Componets/PhoneModels/Infinix.jsx';
import Realme from './Componets/PhoneModels/Realme.jsx';
import Login from './Pages/Login.jsx';
import SignUp from './Pages/SignUp.jsx';
import Cart from './Pages/Cart.jsx';
import { CartProvider } from 'react-use-cart';
import Accessories from './Pages/Accessories.jsx';
import Contact from './Pages/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
  },
  {
    path: "/Shop",
    element:<Shop/>,
  },
  {
    path: "/Accessories",
    element:<Accessories/>,
  },
  {
    path:"/Contact",
    element:<Contact/>
  },
  {
    path: "/iPhones",
    element:<Iphones/>,
  },
  {
    path: "/Vivos",
    element:<ViVos/>,
  },
  {
    path: "/Nokia",
    element:<Nokia/>,
  },
  {
    path: "/Samsung",
    element:<Samsung/>,
  },
  {
    path: "/Oppo",
    element:<Oppo/>,
  },
  {
    path: "/Tecno",
    element:<Tecno/>,
  },
  {
    path: "/Infinix",
    element:<Infinix/>,
  },
  {
    path: "/Realme",
    element:<Realme/>,
  },
  {
    path: "/Login",
    element:<Login/>,
  },
  {
    path:"/Signup",
    element:<SignUp/>
  },
  {
    path:"/Cart",
    element:<Cart/>
  }
  
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
