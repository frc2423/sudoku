import "./App.scss";
import { Grid } from "./board/Grid";
import React from "react";
import { KeyPad } from "./keyPad/keyPad";

function App() {
  const [noteMode, setNoteMode] = React.useState<Boolean>(false);
  return (
    <div className="board-container">
      <Grid />
      <KeyPad />
      <button
        onClick={() => {
          setNoteMode(!noteMode);
        }}
      >
        Note Mode
      </button>
      <div>Note Mode: {noteMode ? "On" : "Off"}</div>
    </div>
  );
}

export default App;
