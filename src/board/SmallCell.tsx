interface CellProps {
  mainNumber: number;
}
export function Cell(props: CellProps) {
  return <div className="cell">{props.mainNumber}</div>;
}
