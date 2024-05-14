export type CellData = {
  row: number;
  col: number;
  section: number;
  id: number;
  state: string; //empty or written
  content: number | number[]; //written number(big) vs. candidate number(small)
  prefilled: boolean;
};

export type RowData = CellData[];

export type BoardData = RowData[];
