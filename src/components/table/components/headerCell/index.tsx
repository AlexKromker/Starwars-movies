// shows label
// has click event for sorting
// shows if sortable
// shows sort order
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../shared/hooks/useStore";
import { selectTable, setSortedBy } from "../../tableSlice";
import cn from "classnames";
import styles from "./headerCell.module.scss";

export type HeaderCellPropType = {
  itemKey: string;
  label: string;
  sortable?: boolean;
};

const HeaderCell: React.FC<HeaderCellPropType> = ({
  itemKey,
  label,
  sortable,
}) => {
  const dispatch = useAppDispatch();
  const { sortedBy, orderBy } = useSelector(selectTable);
  const focused = sortedBy === itemKey;

  if (sortable) {
    return (
      <td onClick={() => dispatch(setSortedBy(itemKey))}>
        <div className={styles["header-cell-content"]}>
          <span>{label}</span>
          <div className={styles["icon-container"]}>
            <span
              className={cn(styles["arrow-up"], {
                [styles["darken"]]: focused && orderBy === "asc",
              })}
            />
            <span
              className={cn(styles["arrow-down"], {
                [styles["darken"]]: focused && orderBy === "desc",
              })}
            />
          </div>
        </div>
      </td>
    );
  } else {
    return <td key={itemKey}>{label}</td>;
  }
};

export default HeaderCell;
