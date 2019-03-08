import React, { Component } from 'react'
import SelectorInput from './../../../components/selectorinput/index'
import axios from 'axios';
import * as config from './../../../config'
import Navbar from './../../../components/navbar/index'

export default class signin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInputChange(key, value) {
        this.setState({ [key]: value })
    }

    handleSubmit(e) {
        e.preventDefault()

        axios.post(config.API_URL + 'users/login', this.state)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="main">
                    <div className="container home-search">
                        <div className="row">
                            <h1 className="col-xs-12">Faça o login e acesso seu conteúdo privado</h1>
                            <p className="col-xs-12 subtitle">Agende, consulte, confime e entre em contato com mais de 1000 salões perto de você</p>
                        </div>
                        <div className="row">
                            <div className="col-xs-offset-1 col-xs-10 box ">
                                <h2>Cadastre-se</h2>
                                <div className="row">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="col-xs-12">
                                            <label>Email</label>
                                            <SelectorInput isrequired={true} type="email" icon="user" id="email" value={this.state.email} handleChange={this.handleInputChange} />
                                        </div>

                                        <div className="col-xs-12">
                                            <label>Senha</label>
                                            <SelectorInput isrequired={true} type="password" icon="lock" id="password" value={this.state.password} handleChange={this.handleInputChange} />
                                        </div>

                                        <div className="col-xs-12">
                                            <input type="submit" className="btn" value="Login" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        )
    }
}
