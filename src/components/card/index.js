import React, { Component } from 'react'

export default class card extends Component {
  render() {
    let upperlayout = (
      <React.Fragment>
        <div className="col-xs-4">
          <img src={this.props.logo} alt={this.props.name} />
        </div>
        <div className="col-xs-8">
          <small> {this.props.subname}</small>
          <h3>{this.props.name}</h3>
          <p>{this.props.address}</p>
          <p>{this.props.neighborhood}, {this.props.city}, {this.props.state}</p>
        </div>
      </React.Fragment>
    );
    if (this.props.invert) {
      upperlayout = (
        <React.Fragment>
          <div className="col-xs-8">
            <small> {this.props.subname}</small>
            <h3>{this.props.name}</h3>
            <p>{this.props.address}</p>
            <p>{this.props.neighborhood}, {this.props.city}, {this.props.state}</p>
          </div>
          <div className="col-xs-4">
            <img src={this.props.logo} alt={this.props.name} />
          </div>
        </React.Fragment>
      );
    }

    return (
      <div className="container card">
        <div className="row info">
          {upperlayout}
        </div>
        <div className="row">
          <div className="col-xs-12">
            <button className="btn"> <i className="fa fa-phone"></i> Ligar </button>
          </div>
        </div>
      </div>
    )
  }
}
