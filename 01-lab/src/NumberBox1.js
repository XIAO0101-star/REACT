import React from 'react';
export default class NumberBox1 extends React.Component{
    state = {
      count: this.props.initialValue
    }
    click2 = () => {
      this.setState({
        count: this.state.count - 1
      })
    }
    render(){
      return(
        <div onClick={this.click2} style={{
          border: '1px solid black',
          padding: '10px',
          width: '20px',
        }}>{this.state.count}</div>
      )
    }
  }