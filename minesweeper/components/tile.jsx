import * as Minesweeper from "./minesweeper.js";
import React from "react";

class Tile extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render(){
    const tileText = "T";
    const className = "";
    if(this.props.tile.flagged){
      tileText = "🚩";
      className = "flagged";
    }
    else if(this.props.tile.bombed){
      tileText = "💣";
      className = "bombed";
    }
    else if(this.props.tile.explored){
      tileText = `${this.props.tile.adjacentBombCount()}`;
      className = "revealed";
    }
    return (
      <div className="tile {className}" onClick={this.handleClick()}>
        {tileText}
      </div>
    );
  }

  handleClick(){
    const flagging = false;
    const tile = document.getElementsByClassName("tile");
    tile.addEventListener('click', e => {
      if(e.key === "altKey"){
        flagging = true;
      }
    })
    this.props.updateGame(this.props.tile, flagging);
  }
}

export default Tile;