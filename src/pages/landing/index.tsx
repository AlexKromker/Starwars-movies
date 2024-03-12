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
import {
  selectLandingTable,
  setSortedBy,
  updateTableContent,
} from "./landingSlice";
import { useSelector } from "react-redux";

const Landing = () => {
  const dispatch = useAppDispatch();
  const tableData = useSelector(selectLandingTable);
  const navigate = useNavigate();

  useDidMountEffect(async () => {
    const movieRes = await getMoviesWithMutation();
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

  const sortHandler = useCallback((str: string) => {
    dispatch(setSortedBy(str));
  }, []);

  return (
    <div className={styles["landing-wrapper"]}>
      <img src={Logo} alt="" className={styles["star-wars-logo"]} />
      <Table
        {...{
          ...tableData,
          rowClickHandler,
          sortHandler,
        }}
      />
    </div>
  );
};

export default Landing;
