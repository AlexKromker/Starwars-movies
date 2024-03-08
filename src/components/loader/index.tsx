import styles from "./loader.module.scss";
import BB8Body from "../../shared/assets/images/BB8_body.svg";
import BB8Head from "../../shared/assets/images/BB8_head.svg";

export default function BB8Loader() {
  return (
    <div className={styles["BB-8"]}>
      <img src={BB8Head} alt="BB-8 head" className={styles.head} />
      <img src={BB8Body} alt="BB-8 body" className={styles.body} />
    </div>
  );
}
