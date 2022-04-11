import * as Minesweeper from "./minesweeper.js";
import React from "react";

class Tile extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const tileText = "T";
    if(this.props.tile.flagged){
      tileText = "🚩";
    }
    else if(this.props.tile.bombed){
      tileText = "💣";
    }
    else if(this.props.tile.explored){
      tileText = `${this.props.tile.adjacentBombCount()}`;
    }
    return (
      <p>{tileText}</p>
    );
  }
}

export default Tile;