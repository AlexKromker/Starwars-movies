import { useSelector } from "react-redux";
import styles from "./popupMenu.module.scss";
import { destroyPopupContent, selectPopupSlice } from "./popupSlice";
import BB8Loader from "../loader";
import { toTitleCase } from "../../shared/utils";
import { useAppDispatch } from "../../shared/hooks/useStore";

export const PopupMenu = () => {
  const dispatch = useAppDispatch();
  const popupMenuState = useSelector(selectPopupSlice);

  function closePopupMenu() {
    dispatch(destroyPopupContent());
  }

  const getSubChildren = (itemList: any) => {
    return itemList.map((item: any, index: number) => {
      const separator = index < itemList.length - 1 ? ", " : ".";
      if (item.name) {
        return (
          <span key={`subchild-${item.name}-${index}`}>
            {item.name}
            {separator}
          </span>
        );
      } else {
        console.error(
          "Provided item list does not follow name, url property type",
          itemList
        );
        return null;
      }
    });
  };

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
            const currObject = popupMenuState.content[itemKey];

            if (Array.isArray(currObject)) {
              if (!currObject.length) return null;

              return (
                <div key={itemKey} className={styles["item-container"]}>
                  <span className={styles["title"]}>
                    {toTitleCase(itemKey)}
                  </span>
                  <div className={styles["item-list-container"]}>
                    {getSubChildren(currObject)}
                  </div>
                </div>
              );
            } else {
              return (
                <div className={styles["item-container"]} key={itemKey}>
                  <span className={styles["title"]}>
                    {toTitleCase(itemKey)}
                  </span>
                  <span>{currObject}</span>
                </div>
              );
            }
          })}
        </button>
      </div>
    );
  }
};

export default PopupMenu;
