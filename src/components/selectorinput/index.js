import React, { Component } from 'react'

export default class selectorinput extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         selectorClass: "fa fa-" + this.props.icon,
         placeholder: this.props.placeholder
      }
    }

    handleChange(e){
        this.props.handleChange(this.props.id, e.target.value)
    }
    
    render() {
        return (
            <div className="selector-input">
                <i className={this.state.selectorClass}></i>
                <input type={this.props.type} placeholder={this.state.placeholder} value={this.props.value} onChange={this.handleChange.bind(this)} />
            </div>
        )
    }
}
