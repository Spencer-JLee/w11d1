import * as Minesweeper from "./minesweeper.js";
import React from "react";
import ReactDOM from "react-dom";
import Tile from "./tile";

class Board extends React.Component{
  constructor(props){
    super(props);
    this.createTiles = this.createTiles.bind(this);
  }

  render(){
    return (
      <div>
        {this.createTiles()}
      </div>
    );
  }

  createTiles(){
    const tiles = this.props.board.map((row, idx) =>{
      <div>
        {row.map((ele, j) => {
          <Tile tile={ele} updateGame={this.props.updateGame} key={`idx` + `j`}/>
        })}
      </div>
    });

    return tiles;
  }
}

export default Board