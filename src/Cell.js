import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: props
    }
  }

  render() {
    return (
      <div className='val'>
        {this.genMatrix()}
      </div>
    )
  }

}
