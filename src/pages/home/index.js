import React, { Component } from 'react'
import SelectorInput from './../../components/selectorinput/index'
import { withRouter } from 'react-router-dom'

export default class home extends Component {
    constructor(props) {
        super(props)

        this.search = this.search.bind(this)
    }

    search() {
        this.props.history.push('/resultado')
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

                            <div class="row">
                                <div class="col-xs-12">
                                    <label>Data</label>
                                    <SelectorInput icon="calendar" value="10/02/2019 15:00" />
                                </div>

                                <div class="col-xs-12">
                                    <label>Serviço</label>
                                    <SelectorInput icon="cut" value="Corte Feminino" />
                                </div>
                                <div class="col-xs-12">
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
