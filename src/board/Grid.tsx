import "./board.scss";
import { Cell } from "./SmallCell";

const arrayOfSection: number[][] = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
];
export function Grid() {
  return (
    <div className="board">
      <div className="grid">
        {arrayOfSection.map((row: any[]) => {
          return (
            <div className="section">
              {row.map((cell) => {
                return <Cell />;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
