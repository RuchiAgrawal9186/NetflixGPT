import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import SignUpLogin from "../pages/SignUpLogin";
import Browse from "../pages/Browse";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <SignUpLogin />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
    ],
  },
]);
