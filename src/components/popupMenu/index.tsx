import { useSelector } from "react-redux";
import styles from "./popupMenu.module.scss";
import { destroyPopupContent, selectPopupSlice } from "./popupSlice";
import BB8Loader from "../loader";
import { toTitleCase } from "../../shared/utils";
import { useAppDispatch } from "../../shared/hooks/useStore";
import { KeyboardEventHandler } from "react";

export const PopupMenu = () => {
  const dispatch = useAppDispatch();
  const popupMenuState = useSelector(selectPopupSlice);

  function closePopupMenu() {
    dispatch(destroyPopupContent());
  }

  if (!popupMenuState.visible) return null;

  if (popupMenuState.loading) {
    return (
      <div className={styles["popup-wrapper"]}>
        <div className={styles["popup-container"]}>
          <BB8Loader />
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles["popup-wrapper"]}>
        <button className={styles["popup-container"]} onClick={closePopupMenu}>
          <h1>{popupMenuState.title}</h1>
          {Object.keys(popupMenuState.content).map((itemKey: string) => {
            return (
              <div className={styles["item-container"]} key={itemKey}>
                <span>{toTitleCase(itemKey)}: </span>
                <span>{popupMenuState.content[itemKey]}</span>
              </div>
            );
          })}
        </button>
      </div>
    );
  }
};

export default PopupMenu;
