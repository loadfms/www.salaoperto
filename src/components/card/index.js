import React, { Component } from 'react'

export default class card extends Component {
  render() {
    return (
      <div className="result-page__content-card" style={{ backgroundImage: 'url(' + process.env.PUBLIC_URL + '/assets/images/' + this.props.image + ')' }}>
        <div className="container">
          <div className="row">
            <button>Agendar</button>
          </div>
          <div className="row">
            <span>{this.props.service}</span>
          </div>
          <div className="row">
            <h2>{this.props.name}</h2>
            <h3>{this.props.subtitle}</h3>
          </div>
        </div>
      </div>
    )
  }
}
