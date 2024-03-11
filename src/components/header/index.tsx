import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../shared/routes";
import HomeIcon from "../../shared/assets/images/home.svg";
import StarWarsLogo from "../../shared/assets/images/logo.svg";
import styles from "./header.module.scss";

export const Header = () => {
  const navigate = useNavigate();

  function handleRedirect() {
    navigate(RoutePaths.landing);
  }

  return (
    <div className={styles["header-container"]}>
      <button onClick={handleRedirect} className={styles["btn"]}>
        <img src={HomeIcon} alt="Home" className={styles["home-icon"]} />
      </button>
      <img
        src={StarWarsLogo}
        alt="Star wars logo"
        className={styles["sw-logo"]}
      />
      <div className={styles["buffer"]}></div>
    </div>
  );
};

export default Header;
