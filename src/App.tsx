import { createBrowserRouter } from "react-router-dom";

import { Home } from "./Pages/home";
import { Cart } from "./Pages/cart";
import { Produto } from "./Pages/products";

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
        path: "/produto/:product",
        element: <Produto/>
      } 
    ]
  }
])

export { router };