import React, { Component } from 'react'
import SelectorInput from './../../components/selectorinput/index'

export default class home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            valueData: "10/02/2019 15:00",
            service: "Corte feminino"
        }

        this.search = this.search.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    search() {
        this.props.history.push('/resultado')
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
                            <h2>Salões</h2>

                            <div className="row">
                                <div className="col-xs-12 col-md-6">
                                    <label>Data</label>
                                    <SelectorInput type="text" icon="calendar" id="valueData" value={this.state.valueData} handleChange={this.handleInputChange} />
                                </div>

                                <div className="col-xs-12 col-md-6">
                                    <label>Serviço</label>
                                    <SelectorInput type="text" icon="cut" id="service" value={this.state.service} handleChange={this.handleInputChange} />
                                </div>

                                <div className="col-xs-12">
                                    <button className="btn" onClick={this.search}> Encontrar </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
