import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/en/HomePage";
import { ServicesPage } from "./pages/en/ServicesPage";
import { ProjectsPage } from "./pages/en/ProjectsPage";
import { AboutPage } from "./pages/en/AboutPage";
import { ContactPage } from "./pages/en/ContactPage";

export const Routes = () => {
    return <RouterProvider router={router} />;
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/services",
        element: <ServicesPage />,
    },
    {
        path: "/projects",
        element: <ProjectsPage />,
    },
    {
        path: "/about",
        element: <AboutPage />,
    },
    {
        path: "/contact",
        element: <ContactPage />,
    },
]);