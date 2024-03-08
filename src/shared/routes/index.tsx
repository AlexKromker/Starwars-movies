import { createBrowserRouter } from "react-router-dom";
import Landing from "../../pages/landing";
import FilmDetails from "../../pages/filmDetails";

export const RoutePaths = {
  landing: "/",
  filmDetails: "/film-details",
};

export const router = createBrowserRouter([
  {
    path: RoutePaths.landing,
    element: <Landing />,
  },
  {
    path: RoutePaths.filmDetails,
    element: <FilmDetails />,
  },
]);

export default router;
