import { createBrowserRouter } from "react-router-dom";

import { Home } from "./Pages/home";
import { Cart } from "./Pages/cart";
import { Produto } from "./Pages/detail";

import { Layout } from "./components/Layout";

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/cart",
        element: <Cart/>
      },
      {
        path: "/product/:id",
        element: <Produto/>
      } 
    ]
  }
])

export { router };