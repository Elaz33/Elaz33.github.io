import React, { Component } from 'react'

export default class clock extends Component {
    state={
        time:new Date()
    }
    componentDidMount(){
         setInterval(() =>{
        this.setState({time:new Date()});
        },1000);
    }
  render() {
    const style ={border:'5px solid yellow'}
    return (
      <h4 style={style}>
        <div className = "clock">
            {this.state.time.toLocaleTimeString()}    
        </div>
      </h4>
    )
  }
}

