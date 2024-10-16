import { Cell } from "../board/SmallCell";

export function KeyPad() {
  return (
    <div className="keyPad">
      <Cell mainNumber={1} />
      <Cell mainNumber={2} />
      <Cell mainNumber={3} />
      <Cell mainNumber={4} />
      <Cell mainNumber={5} />
      <Cell mainNumber={6} />
      <Cell mainNumber={7} />
      <Cell mainNumber={8} />
      <Cell mainNumber={9} />
    </div>
  );
}
