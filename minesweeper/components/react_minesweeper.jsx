import * as Minesweeper from "./minesweeper.js";
import React from "react";
import ReactDOM from "react-dom";
import Tile from "./tile";
import Game from "./game";

document.addEventListener("DOMContentLoaded", () =>{
  const root = document.getElementById("main")
  ReactDOM.render(<Game />, root);
});