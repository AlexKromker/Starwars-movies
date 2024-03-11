import { useLocation, useNavigate } from "react-router-dom";
import { getSingleMovie } from "../../shared/api/films";
import { RoutePaths } from "../../shared/routes";
import { useSelector } from "react-redux";
import { selectFilmDetails, setFilmDetails } from "./filmDetailsSlice";
import { useAppDispatch } from "../../shared/hooks/useStore";
import HoverableList from "./components/hoverableList";
import StarWarsHeader from "../../components/header";
import useDidMountEffect from "../../shared/hooks/useDidMountEffect";
import styles from "./filmDetails.module.scss";

const FilmDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const filmDetails = useSelector(selectFilmDetails);

  useDidMountEffect(async () => {
    // If we don't have a filmId, redirect to landing page
    if (location.state === null || !location.state.filmId) {
      return navigate(RoutePaths.landing);
    } else {
      const movieRes = await getSingleMovie(location.state.filmId);
      console.log("movieRes", movieRes);
      dispatch(
        setFilmDetails({
          ...movieRes,
          loading: false,
        })
      );
    }
  });
  return (
    <div className={styles["film-details-wrapper"]}>
      <StarWarsHeader />
      <div className={styles["content"]}>
        <h1>{filmDetails.title}</h1>
        <div className={styles["opening-crawl-container"]}>
          <div className={styles["opening-crawl"]}>
            <h2>In a galaxy far, far away...</h2>
            <p>{filmDetails.opening_crawl}</p>
          </div>
        </div>
        <p>Producer: {filmDetails.producer}</p>
        <p>Director: {filmDetails.director}</p>
        <p>Episode number: {filmDetails.episode_id}</p>
        <HoverableList
          {...{ listLabel: "Characters: ", itemList: filmDetails.characters }}
        />
        <HoverableList
          {...{ listLabel: "Planets: ", itemList: filmDetails.planets }}
        />
        <HoverableList
          {...{ listLabel: "Species: ", itemList: filmDetails.species }}
        />
        <HoverableList
          {...{ listLabel: "Starships: ", itemList: filmDetails.starships }}
        />
        <HoverableList
          {...{ listLabel: "Vehicles: ", itemList: filmDetails.vehicles }}
        />
      </div>
    </div>
  );
};

export default FilmDetails;
