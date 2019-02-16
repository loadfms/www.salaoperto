import React, { Component } from 'react'
import SelectorInput from './../../components/selectorinput/index'

export default class signup extends Component {
    constructor(props) {
        super(props)

        this.state = { 
            email: "email@teste.com",
            phone: "(11) 98010-8876",
            password: "******"
        }
        
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(key, value) {
        this.setState({ [key]: value })
    }

    render() {
        return (
            <div className="main">
                <div className="container home-search">
                    <div className="row">
                        <h1 className="col-xs-12">Encontre o serviço que você procura na hora que precisa</h1>
                        <p className="col-xs-12 subtitle">Dezenas de salões perto de você: só falta encaixar o seu horário livre na agenda de um deles</p>
                    </div>
                    <div className="row">
                        <div className="col-xs-offset-1 col-xs-10 box ">
                            <h2>Faça seu cadastro</h2>

                            <div className="row">
                                <div className="col-xs-12">
                                    <label>Email</label>
                                    <SelectorInput icon="user" id="email" value={this.state.email} handleChange={this.handleInputChange} />
                                </div>

                                <div className="col-xs-12">
                                    <label>Telefone</label>
                                    <SelectorInput icon="phone" id="phone" value={this.state.phone} handleChange={this.handleInputChange} />
                                </div>

                                <div className="col-xs-12">
                                    <label>Senha</label>
                                    <SelectorInput icon="lock" id="password" value={this.state.password} handleChange={this.handleInputChange}  />
                                </div>

                                <div className="col-xs-12">
                                    <button className="btn" onClick={this.search}> Cadastrar </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
