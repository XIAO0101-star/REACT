import React from 'react';
export default class TickleBox extends React.Component{
  state = {
    value: "Tickle me!"
  }

  mouseover = () => {
    alert("that tickles!");
  }

    render(){
      return(
        <div onMouseOver={this.mouseover} style={{
          border: '1px solid black',
          padding: '10px',
          width: '50px',
        }}>{this.state.value}</div>
      )
    }
  }