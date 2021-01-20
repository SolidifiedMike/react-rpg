import React from "react";
import World from "./components/world";
import useWindowDimensions from "./hooks/use-window-dimensions";

function App() {
  const { width, height } = useWindowDimensions();
  console.log("width: " + width + " hieght: " + height);

  return (
    <div style={{
      width,
      height,
      backgroundColor: "grey"
      }}>
      <World />
    </div>
  );
}

export default App;
