import React from "react";
import World from "./components/world";
import useWindowDimensions from "./hooks/use-window-dimensions";

function App() {
  const { width, height } = useWindowDimensions();
  /* FIXME: when this app renders, there's a white gap
  around the edge (all sides) of the screen */

  return (
    <div style={{
      width,
      height,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <World />
    </div>
  );
}

export default App;
