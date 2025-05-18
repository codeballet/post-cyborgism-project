import { createBrowserRouter } from "react-router-dom";
import { App } from "./components";
import { Home } from "./pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
        ],
    },
]);
