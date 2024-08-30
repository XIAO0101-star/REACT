import React from 'react';
export default class AlertBox extends React.Component{
  state = {
    value: this.props.initialMessage
  }
    render(){
      return(
        <div style={{
          border: '4px solid black',
          padding: '10px',
          width: '200px',
        }}>{this.state.value}</div>
      )
    }
  }