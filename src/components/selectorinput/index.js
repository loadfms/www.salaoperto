import React, { Component } from 'react'
import axios from 'axios'
import * as config from './../../config'

export default class selectorinput extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectorClass: "fa fa-" + this.props.icon,
            placeholder: this.props.placeholder,
            showAutoComplete: false,
            data: ["Corte masculino", "Corte feminino", "Corte infantil"]
        }
    }

    handleAutoComplete(e) {
        if (e.target.value.length > 2) {
            //this.handleRequest(e)
            this.setState({ showAutoComplete: true })
        } else {
            this.setState({ showAutoComplete: false })
        }
    }

    handleRequest(e) {
        axios.get(config.API_URL + this.props.autocompleteroute + e.target.value)
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    handleChange(e) {
        this.props.handleChange(this.props.id, e.target.value)

        if (this.props.autocomplete) {
            this.handleAutoComplete(e)
        }
    }

    handleSelect(e) {
        this.props.handleChange(this.props.id, e.target.dataset.value)
        this.setState({showAutoComplete:false})
    }


    render() {
        return (
            <div className="selector-input">
                <i className={this.state.selectorClass}></i>
                <input required={this.props.isrequired} type={this.props.type} placeholder={this.state.placeholder} value={this.props.value} onChange={this.handleChange.bind(this)} />

                <div className={this.state.showAutoComplete ? "selector-auto-complete show" : "selector-auto-complete"}>
                    <ul>
                        {this.state.data.map((option, i) => {
                            return (<li key={i}><button onClick={this.handleSelect.bind(this)} data-value={option}>{option}</button></li>)
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}
