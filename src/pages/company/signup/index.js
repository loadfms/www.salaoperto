import React, { Component } from 'react'
import Navbar from './../../../components/navbar'
import SelectorInput from './../../../components/selectorinput/index'

export default class signup extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    handleInputChange(key, value) {
        this.setState({ [key]: value })
    }

    render() {
        return (
            <div>
                <Navbar color="white" />
                <div className="main">
                    <div className="container home-search">
                        <div className="row">
                            <h1 className="col-xs-12">Cadastre-se seu salão</h1>
                            <p className="col-xs-12 subtitle">Lote sua agenda tornando seu salão disponível para milhares de pessoas pertinho de você!</p>
                        </div>
                        <div className="row">
                            <div className="col-xs-offset-1 col-xs-10 box ">
                                <h2>Cadastre-se</h2>
                                <div className="row">
                                    <form onSubmit={this.handleSubmit}>
                                        <h3>Dados de acesso</h3>

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
                                        <h3>Informações do salão</h3>

                                        <div className="col-xs-12">
                                            <label>Nome do salão</label>
                                            <SelectorInput isrequired={true} type="email" icon="cut" id="email" value={this.state.email} handleChange={this.handleInputChange} />
                                        </div>

                                        <div className="col-xs-12">
                                            <label>Url Hotsite</label>
                                            <SelectorInput isrequired={true} type="text" icon="phone" id="phone" value={this.state.phone} handleChange={this.handleInputChange} />
                                        </div>

                                        <div className="col-xs-12">
                                            <label>Foto</label>
                                            <SelectorInput isrequired={true} type="text" icon="camera" id="password" value={this.state.password} handleChange={this.handleInputChange} />
                                        </div>

                                        <div className="col-xs-12">
                                            <label>Cep</label>
                                            <SelectorInput isrequired={true} type="text" icon="location-arrow" id="password" value={this.state.password} handleChange={this.handleInputChange} />
                                        </div>

                                        <div className="col-xs-12">
                                            <label>Numero</label>
                                            <SelectorInput isrequired={true} type="text" icon="map" id="password" value={this.state.password} handleChange={this.handleInputChange} />
                                        </div>

                                        <div className="col-xs-12">
                                            <label>Complemento</label>
                                            <SelectorInput isrequired={true} type="text" icon="map-pin" id="password" value={this.state.password} handleChange={this.handleInputChange} />
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
