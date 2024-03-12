import { FC, useCallback, useMemo } from "react";
import { IHeaderCellFields, ITableProps } from "./types";
import BB8Loader from "../loader";
import HeaderCell from "../tableHeaderCell";
import styles from "./table.module.scss";

const Table: FC<ITableProps> = ({
  loading,
  headerItems,
  rows,
  sortedBy,
  orderBy,
  rowUniqueKey,
  rowClickHandler,
  sortHandler,
}) => {
  // Add legend with item and page count
  const renderHeader = useMemo(() => {
    return headerItems.map((headerCell: IHeaderCellFields) => (
      <HeaderCell
        key={headerCell.itemKey}
        {...{ ...headerCell, sortedBy, orderBy, sortHandler }}
      />
    ));
  }, [headerItems]);

  const getCells = useCallback(
    (row: any, rowKey: string) => {
      // Only maps the new cell if it's requested in the headerItems list.
      return headerItems.map((headerCell) => {
        if (row.hasOwnProperty(headerCell.itemKey)) {
          return (
            <td key={`${rowKey}-${headerCell.itemKey}`}>
              {row[headerCell.itemKey]}
            </td>
          );
        } else {
          return null;
        }
      });
    },
    [headerItems]
  );

  const renderRows = useMemo(() => {
    try {
      return rows.map((currRow) => {
        let rowKey = currRow[rowUniqueKey];
        return (
          <tr key={rowKey} onClick={() => rowClickHandler(currRow)}>
            {getCells(currRow, rowKey)}
          </tr>
        );
      });
    } catch (e) {
      console.error(
        "Failed to create table rows. Please check that unique row key exists\n",
        e
      );
    }
  }, [rows, getCells, rowClickHandler, rowUniqueKey]);

  if (loading) {
    return (
      <div className={styles["loading-container"]}>
        <BB8Loader />
      </div>
    );
  } else {
    return (
      <div className={styles["table-container"]}>
        <table>
          <thead className={styles["table-header"]}>
            <tr className={styles["table-rows"]}>{renderHeader}</tr>
          </thead>
          <tbody>{renderRows}</tbody>
        </table>
      </div>
    );
  }
};

export default Table;
