import React from "react";

export default function Popup({ ifShow = false }) {

  return (
    <div style={{ position: "absolute", zIndex: 4 }}>
      { ifShow &&
        <div style={{
          backgroundColor: "white",
          width: 300,
          height: 200,
        }}>
          <p>
            Hello World!
          </p>
        </div>
      }
    </div>
  );
}