import { updateTableContent } from "../../components/table/tableSlice";
import { useAppDispatch } from "../../shared/hooks/useStore";
import Logo from "../../shared/assets/images/logo.svg";
import useDidMountEffect from "../../shared/hooks/useDidMountEffect";
import styles from "./landing.module.scss";
import Table from "../../components/table";
import { headerItems } from "./fields";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../shared/routes";
import { setFilmDetailsLoading } from "../filmDetails/filmDetailsSlice";
import { useCallback } from "react";
import { getMoviesWithMutation } from "../../shared/api/films/dataPipes";

const Landing = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useDidMountEffect(async () => {
    const movieRes = await getMoviesWithMutation();
    console.log('Movie resonse', movieRes)
    if (movieRes) {
      dispatch(
        updateTableContent({
          loading: false,
          headerItems,
          rows: movieRes,
          rowUniqueKey: "title",
        })
      );
    }
  });

  const rowClickHandler = useCallback(
    (row: any) => {
      if (row.url) {
        const filmId = row.url.split("/").pop();
        dispatch(setFilmDetailsLoading(true));
        navigate(RoutePaths.filmDetails, { state: { filmId } });
      }
    },
    [dispatch, navigate]
  );

  return (
    <div className={styles["landing-wrapper"]}>
      <img src={Logo} alt="" className={styles["star-wars-logo"]} />
      <Table rowClickHandler={rowClickHandler} />
    </div>
  );
};

export default Landing;
