import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/en/HomePage";

export const Routes = () => {
    return <RouterProvider router={router} />;
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
]);