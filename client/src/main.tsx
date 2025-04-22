import "./index.css";

import App from "./App.tsx";
import Login from "./components/Login.tsx";
import { RouterProvider } from "react-router-dom";
import Signup from "./components/Signup.tsx";
// import Login from "./components/Login.tsx";
import { StrictMode } from "react";
import { createBrowserRouter } from "react-router";
import { createRoot } from "react-dom/client";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
