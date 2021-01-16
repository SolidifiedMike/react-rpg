import React from "react";

export default function Popup({ ifShow = false }) {

  return (
    <div>
      { ifShow &&
        <p>
          Hello
        </p>
      }
    </div>
  );
}