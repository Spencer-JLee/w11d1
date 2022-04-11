import * as Minesweeper from "./minesweeper.js";
import React from "react";
import ReactDOM from "react-dom";
import Board from "./board.js";

class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      board: new Minesweeper.Board(9, 10)
    };
    this.updateGame = this.updateGame.bind(this);
    this.render = this.render.bind(this);
  }

  updateGame(){

  }

  render(){
    return (
      <Board board={this.state.board} updateGame={this.updateGame}/>;
    );
  }
}

export default Game;