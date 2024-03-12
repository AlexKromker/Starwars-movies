import { useLocation, useNavigate } from "react-router-dom";
import { RoutePaths } from "../../shared/routes";
import { useSelector } from "react-redux";
import { selectFilmDetails, setFilmDetails } from "./filmDetailsSlice";
import { useAppDispatch } from "../../shared/hooks/useStore";
import { useMemo } from "react";
import { getSingleMovieWithMutation } from "../../shared/api/films/dataPipes";
import HoverableList from "./components/hoverableList";
import StarWarsHeader from "../../components/header";
import useDidMountEffect from "../../shared/hooks/useDidMountEffect";
import styles from "./filmDetails.module.scss";
import PageLoader from "../../components/pageLoader";

const FilmDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const filmDetails = useSelector(selectFilmDetails);

  useDidMountEffect(async () => {
    // If we don't have a filmId, redirect to landing page
    if (location.state === null || !location.state.filmId) {
      return navigate(RoutePaths.landing);
    }

    const movieRes = await getSingleMovieWithMutation(location.state.filmId);

    if (movieRes) {
      dispatch(
        setFilmDetails({
          ...movieRes,
          loading: false,
        })
      );
    }
  });

  const renderOpeningCrawl = useMemo(() => {
    if (!filmDetails.opening_crawl) return null;

    return (
      <div className={styles["opening-crawl-container"]}>
        <div className={styles["opening-crawl"]}>
          <h2>In a galaxy far, far away...</h2>
          <p>{filmDetails.opening_crawl}</p>
        </div>
      </div>
    );
  }, [filmDetails.opening_crawl]);

  if (filmDetails.loading)
    return (
      <div className={styles["film-details-wrapper"]}>
        <PageLoader />
      </div>
    );

  return (
    <div className={styles["film-details-wrapper"]}>
      <StarWarsHeader />
      <div className={styles["content"]}>
        <h1>{filmDetails.title}</h1>
        {renderOpeningCrawl}
        <div className={styles["sub-info"]}>
          <p>
            <b>Producers:</b> {filmDetails.producer}
          </p>
          <p>
            <b>Director:</b> {filmDetails.director}
          </p>
        </div>

        <div className={styles["list-content"]}>
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
    </div>
  );
};

export default FilmDetails;
