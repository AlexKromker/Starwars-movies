import { FC, useMemo } from "react";
import { HoverableListPropType } from "../interfaces";
import styles from "./hoverableList.module.scss";
import {
  setPopupContent,
  showLoadingPopup,
} from "../../../../components/popupMenu/popupSlice";
import { getItemAndSubitemsByUrl } from "../../../../shared/api/films";
import { useAppDispatch } from "../../../../shared/hooks/useStore";

const HoverableLists: FC<HoverableListPropType> = ({ listLabel, itemList }) => {
  const dispatch = useAppDispatch();

  async function handleClick(name: string, itemUrl: string) {
    dispatch(showLoadingPopup());
    const res = await getItemAndSubitemsByUrl(itemUrl);
    // properties we don't want displayed or used
    // Note: If any property ti delete does note exist,
    // it just returns true and continues
    delete res.url;
    delete res.created;
    delete res.edited;

    dispatch(
      setPopupContent({
        title: name,
        content: res,
      })
    );
  }

  const renderList = useMemo(() => {
    return itemList.map(({ name, url }, index) => {
      const separator = index < itemList.length - 1 ? ", " : ".";
      return (
        <button
          key={`${name}-${index}`}
          className={styles["hoverable"]}
          onClick={() => handleClick(name, url)}
        >
          {name}
          {separator}
        </button>
      );
    });
  }, [itemList]);

  return (
    <div className={styles["hoverable-list-container"]}>
      <h2>{listLabel}</h2>
      <div className={styles["item-list"]}>{renderList}</div>
    </div>
  );
};

export default HoverableLists;
