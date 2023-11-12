import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  RootLayout,
  AboutPage,
  CartPage,
  CheckoutPage,
  ErrorPage,
  ProductsPage,
  SingleProductPage,
  HomePage,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/products", element: <ProductsPage /> },
      { path: "/products/:id", element: <SingleProductPage /> },
      { path: "/checkout", element: <CheckoutPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
