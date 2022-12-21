import React from "react";
import ReactDOM from "react-dom";
import { styled } from "@stitches/react";
import { Hexile } from "./lib";

const Box1 = styled("div", {
  backgroundColor: "#ED6F6F",
  width: "100px",
  height: "100px",
});

const Box2 = styled("div", {
  backgroundColor: "#6FA9ED",
  width: "100px",
  height: "200px",
});

ReactDOM.render(
  <React.StrictMode>
    <Hexile gap={1} padding={1} y="center" x="right">
      <Box1 />
      <Box2 />
    </Hexile>
  </React.StrictMode>,
  document.getElementById("root")
);
