import BB8Loader from "../loader";
import styles from "./pageLoader.module.scss";

const PageLoader = () => {
  return (
    <div className={styles["page-loader-wrapper"]}>
      <BB8Loader />
    </div>
  );
};

export default PageLoader;
