import { useNavigate } from "react-router-dom";
import StarWarsLogo from "../../shared/assets/images/logo.svg";
import styles from "./header.module.scss";
import { RoutePaths } from "../../shared/routes";

export const Header = () => {
  const navigate = useNavigate();

  function handleRedirect() {
    navigate(RoutePaths.landing);
  }

  return (
    <div className={styles["header-container"]}>
      <button onClick={handleRedirect} className={styles["btn-primary"]}>
        Back to landing
      </button>
      <img src={StarWarsLogo} alt="Star wars logo" />
      <div className={styles["buffer"]}></div>
    </div>
  );
};

export default Header;
