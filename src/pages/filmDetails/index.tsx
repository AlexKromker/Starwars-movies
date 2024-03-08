import { useLocation, useNavigate } from "react-router-dom";
import { getSingleMovie } from "../../shared/api/films";
import { RoutePaths } from "../../shared/routes";
import useDidMountEffect from "../../shared/hooks/useDidMountEffect";

const FilmDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useDidMountEffect(async () => {
    // If we don't have a filmId, redirect to landing page
    if (location.state === null || !location.state.filmId) {
      return navigate(RoutePaths.landing);
    } else {
      const { data: movieData } = await getSingleMovie(location.state.filmId);
      console.log(movieData);
      // console.log(movieData.fields);
      // const characters = await getCharacterList(movieData.fields.characters);
      // console.log(characters);
    }
  });
  return <div></div>;
};

export default FilmDetails;
