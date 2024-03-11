import { FC, ReactNode } from "react";
import styles from "./modal.module.scss";
import PageLoader from "../pageLoader";

export type ModalType = {
  loading: boolean;
  visible: boolean;
  children: ReactNode;
};

const Modal: FC<ModalType> = ({ loading, visible, children }) => {
  if (!visible) return null;
  if (loading) return <PageLoader />;

  return <div className={styles["modal-wrapper"]}>{children}</div>;
};

export default Modal;
