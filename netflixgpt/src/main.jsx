import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index.jsx";
import { Provider } from "react-redux";
import { appStore } from "./store/appStore.js";
import { AuthContextProvider } from "./utils/authContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <Provider store={appStore}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </AuthContextProvider>
);
