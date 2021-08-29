import React from "react";
import BorderColorSharpIcon from "@material-ui/icons/BorderColorSharp";

export default function Nothing() {
  return (
    <div>
      <p
        style={{
          textAlign: "center",
          color: "red",
          margin: "50px",
          fontFamily: "cursive",
        }}
      >
        Ooops! Nothing to display, add a New Todo
        <BorderColorSharpIcon
          style={{
            color: "red",
            marginLeft: "10px",
          }}
        />
      </p>
    </div>
  );
}
