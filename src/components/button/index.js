import React, { Component } from 'react'

export default class button extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         text: this.props.text
      }
    }
    
  render() {
    return (
      <div>
        <a className="button">{this.state.text}</a>
      </div>
    )
  }
}
