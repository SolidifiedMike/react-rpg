import {useEffect, useState} from "react";

export default function useDraggable(id) {
  const [position, setPosition] = useState({x: 0, y: 0});

  useEffect(() => {
  const handle = document.getElementById(id);
  handle.addEventListener("mousedown", function(e) {
      e.preventDefault();
      handle.style.pointerEvents = "none";

      document.body.addEventListener("mousemove", move);
      document.body.addEventListener("mouseup", () => {
      document.body.removeEventListener("mousemove", move);
      handle.style.pointerEvents = "initial";
      })
  })
  return () => {
      document.body.removeEventListener("mousedown", move);
      document.body.removeEventListener("mouseup", move);
      document.body.removeEventListener("mousemove", move);

  };
  }, []);

  function move(e) {
  const pos = {
      x: e.clientY,
      y: e.clientX,
  };
  setPosition(pos);
  }

  return {position};
}
