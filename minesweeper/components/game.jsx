import * as Minesweeper from "./minesweeper.js";
import React from "react";
import ReactDOM from "react-dom";
import Board from "./board.jsx";
import Tile from "./tile.jsx";

class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      board: new Minesweeper.Board(9, 10)
    };
    this.updateGame = this.updateGame.bind(this);
    this.render = this.render.bind(this);
  }

  updateGame(tile, flagging){
    if(flagging){
      tile.toggleFlag();
    }
    else{
      tile.explore();
    }
    this.setState(
      { board: this.state.board}
    );
  }

  render(){
    return (
      <div>
        <Board board={this.state.board} updateGame={this.updateGame}/>
      </div>
    );
  }
}

export default Game;