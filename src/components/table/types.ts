export interface ITableState {
  loading: boolean;
  headerItems: Array<any>;
  rows: Array<any>;
  sortedBy: string;
  orderBy: string;
  rowUniqueKey: string; // Which object should be used for the unique key?
}

export interface ITableProps extends ITableState {
  rowClickHandler: (row: any) => void;
  sortHandler: (str: string) => void;
}

export interface IHeaderCellFields {
  itemKey: string;
  label: string;
  sortable: boolean;
}

export interface IHeaderCellProps extends IHeaderCellFields {
  sortedBy: string;
  orderBy: string;
  sortHandler: (str: string) => void;
}
