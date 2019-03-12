import React, { Component } from 'react'
import SelectorInput from './../../../components/selectorinput/index'
import axios from 'axios';
import * as config from './../../../config'
import Navbar from './../../../components/navbar/index';

export default class signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            phone: "",
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
            <div>
                <Navbar color="white"/>
                <div className="main">
                    <div className="container home-search">
                        <div className="row">
                            <div className="col-xs-offset-1 col-xs-10 box ">
                            <h1 className="col-xs-12">Cadastre-se e agende.</h1>
                            <h2 className="col-xs-12 subtitle">Dezenas de salões pertinho de você.</h2>
                                <div className="row">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="col-xs-12">
                                            <label>Email</label>
                                            <SelectorInput isrequired={true} type="email" icon="user" id="email" value={this.state.email} handleChange={this.handleInputChange} />
                                        </div>

                                        <div className="col-xs-12">
                                            <label>Telefone</label>
                                            <SelectorInput isrequired={true} type="text" icon="phone" id="phone" value={this.state.phone} handleChange={this.handleInputChange} />
                                        </div>

                                        <div className="col-xs-12">
                                            <label>Senha</label>
                                            <SelectorInput isrequired={true} type="password" icon="lock" id="password" value={this.state.password} handleChange={this.handleInputChange} />
                                        </div>

                                        <div className="col-xs-12">
                                            <input type="submit" className="btn" value="Cadastrar" />
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
