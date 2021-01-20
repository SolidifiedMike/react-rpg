import React from "react";
import World from "./components/world";
import useWindowDimensions from "./hooks/use-window-dimensions";

function App() {
  const { width, height } = useWindowDimensions();
  /* FIXME: when this app renders, there's a white gap
  around the edge (all sides) of the screen */

  return (
    <div style={{
      width: width - 50,
      height: height - 50,
    }}>
      <World />
    </div>
  );
}

export default App;
