import styles from "./App.module.scss";
import BB8Loader from "./components/loader";
import Logo from "./shared/assets/images/logo.svg";

function App() {
  return (
    <div className={styles["App"]}>
      <img src={Logo} alt="" className={styles["star-wars-logo"]} />
      <BB8Loader />
    </div>
  );
}

export default App;
