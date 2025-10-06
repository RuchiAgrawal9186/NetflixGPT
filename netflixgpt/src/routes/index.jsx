import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import SignUpLogin from "../pages/SignUpLogin";
import Browse from "../pages/Browse";
import ProtectedRoute from "../utils/ProtectRoute";
import GPTSearchPage from "../pages/GPTSearchPage";
import MovieDetailsPage from "../pages/MovieDetailsPage";
// import GPTSearchPage from "../componenets/GPTSearchPage";

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
        element: (
          <ProtectedRoute>
            <Browse />
          </ProtectedRoute>
        ),
      },
      {
        path: "/movie/:id",
        element: (
          <ProtectedRoute>
            <MovieDetailsPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/gpt",
        element: (
          <ProtectedRoute>
            <GPTSearchPage></GPTSearchPage>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
