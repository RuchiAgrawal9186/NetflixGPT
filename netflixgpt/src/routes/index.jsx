import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import SignUpLogin from "../pages/SignUpLogin";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "",
                element:<HomePage/>
                
            },
            {
                path: "/login",
                element:<SignUpLogin/>,
            }
        ]
    }
]
)