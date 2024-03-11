import { updateTableContent } from "../../components/table/tableSlice";
import { getAllMovies } from "../../shared/api/films";
import { useAppDispatch } from "../../shared/hooks/useStore";
import Logo from "../../shared/assets/images/logo.svg";
import useDidMountEffect from "../../shared/hooks/useDidMountEffect";
import styles from "./landing.module.scss";
import Table from "../../components/table";
import { headerItems } from "./fields";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../shared/routes";
import { setFilmDetailsLoading } from "../filmDetails/filmDetailsSlice";

const Landing = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useDidMountEffect(async () => {
    const res = await getAllMovies();
    if (res) {
      dispatch(
        updateTableContent({
          loading: false,
          headerItems,
          rows: res.results,
          rowUniqueKey: "title",
        })
      );
    }
  });

  function rowClickHandler(row: any) {
    if (row.url) {
      const filmId = row.url.split("/").pop();
      dispatch(setFilmDetailsLoading(true));
      navigate(RoutePaths.filmDetails, { state: { filmId } });
    }
  }

  return (
    <div className={styles["landing-wrapper"]}>
      <img src={Logo} alt="" className={styles["star-wars-logo"]} />
      <Table rowClickHandler={rowClickHandler} />
    </div>
  );
};

export default Landing;
