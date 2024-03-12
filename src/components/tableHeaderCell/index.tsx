// shows label
// has click event for sorting
// shows if sortable
// shows sort order
import cn from "classnames";
import styles from "./tableHeaderCell.module.scss";
import { IHeaderCellProps } from "../table/types";

const TableHeaderCell: React.FC<IHeaderCellProps> = ({
  itemKey,
  label,
  sortable,
  sortedBy,
  orderBy,
  sortHandler,
}) => {
  const focused = sortedBy === itemKey;

  if (sortable) {
    return (
      <td onClick={() => sortHandler(itemKey)}>
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

export default TableHeaderCell;
