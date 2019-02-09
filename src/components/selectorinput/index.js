import React, { Component } from 'react'

export default class selectorinput extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         selectorClass: "fa fa-" + this.props.icon,
         value: this.props.value
      }
    }
    
    render() {
        return (
            <div className="selector-input">
                <i className={this.state.selectorClass}></i>
                <p>{this.state.value}</p>
            </div>
        )
    }
}
