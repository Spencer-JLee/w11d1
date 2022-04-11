import * as Minesweeper from "./minesweeper.js";
import React from "react";
import ReactDOM from "react-dom";
import Tile from "./tile";

document.addEventListener("DOMContentLoaded", () =>{
  ReactDOM.render(<Tile/>, document.getElementById("main"));
});