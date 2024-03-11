import { FC, useCallback, useMemo } from "react";
import BB8Loader from "../loader";
import HeaderCell from "./components/headerCell";
import styles from "./table.module.scss";
import { useSelector } from "react-redux";
import { selectTable } from "./tableSlice";
import { toTitleCase } from "../../shared/utils";

type TableProps = {
  rowClickHandler: (row: any) => void;
};

const Table: FC<TableProps> = ({ rowClickHandler }) => {
  // Add legend with item and page count
  const tableData = useSelector(selectTable);

  const renderLegend = useMemo(() => {
    if (!tableData.legendData) return null;

    return Object.keys(tableData.legendData).map((legendKey: string) => {
      const legendLabel = toTitleCase(legendKey) || "";
      if (legendLabel) {
        return (
          <span key={legendKey}>
            {legendLabel}: {tableData.legendData[legendKey]}
          </span>
        );
      } else {
        return null;
      }
    });
  }, [tableData.legendData]);

  const renderHeader = useMemo(() => {
    return tableData.headerItems.map((headerCell) => (
      <HeaderCell {...headerCell} key={headerCell.itemKey} />
    ));
  }, [tableData.headerItems]);

  const getCells = useCallback(
    (row: any, rowKey: string) => {
      // Only maps the new cell if it's requested in the headerItems list.
      return tableData.headerItems.map((headerCell) => {
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
    [tableData.headerItems]
  );

  const renderRows = useMemo(() => {
    try {
      return tableData.rows.map((currRow) => {
        let rowKey = currRow[tableData.rowUniqueKey];
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
  }, [tableData.rows]);

  if (tableData.loading) {
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
        <div className={styles["legend-container"]}>{renderLegend}</div>
      </div>
    );
  }
};

export default Table;
