import React from "react";

export default function Popup({ ifShow = false }) {

  return (
    <div style={{ position: "absolute", zIndex: 3 }}>
      { ifShow &&
        <p>
          Hello
        </p>
      }
    </div>
  );
}