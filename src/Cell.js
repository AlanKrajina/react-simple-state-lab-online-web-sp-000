import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: props.value
    }
  }

  changeBack = () => {
    this.setState({
      color: '#333'
    })
  }

  render() {
    return (
      <div onClick={this.setState()} className='val'>
      </div>
    )
  }

}
