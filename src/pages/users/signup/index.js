import React, { Component } from 'react'
import axios from 'axios';
import * as config from './../../../config'

export default class signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            phone: "",
            password: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault()

        axios.post(config.API_URL + 'users', this.state)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="signup-page container">
                <div className="signup-page__title">
                    <div className="row">
                        <h1 className="col-xs-12 center">Cadastrar</h1>
                    </div>
                </div>
                <div className="signup-page__form">
                    <div className="row">
                        <input type="text" id="email" className="col-xs-offset-1 col-xs-10" placeholder="Email" onChange={this.handleChange}/>
                    </div>
                    <div className="row">
                        <input type="text" id="phone" className="col-xs-offset-1 col-xs-10" placeholder="Telefone" onChange={this.handleChange}/>
                    </div>
                    <div className="row">
                        <input type="password" id="password" className="col-xs-offset-1 col-xs-10" placeholder="Senha" onChange={this.handleChange}/>
                    </div>
                    <div className="row">
                        <input type="submit" className="button col-xs-offset-1 col-xs-10" value="Cadastrar" />
                    </div>
                </div>
                <div className="signup-page__footer">
                    <div className="row">
                        <button className="col-xs-12">Não tem uma conta? Cadastrar</button>
                    </div>
                </div>
            </div>
        )
    }
}
