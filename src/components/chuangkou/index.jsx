import React, { useState } from "react";
import useInteract from "../../hooks/use-interact";

export default function ChuangKou() {
  const {ifShow, interact} = useInteract();

  // useKeyPress((e) => {
  //   const myKey = e.key.toLowerCase();
  //   // console.log(myKey);
  // })

  console.log(ifShow);

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