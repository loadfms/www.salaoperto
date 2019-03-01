import React, { Component } from 'react'
import SelectorInput from './../../components/selectorinput/index'

export default class home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            service: ""
        }

        this.search = this.search.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                localStorage.setItem('latitude', position.coords.latitude);
                localStorage.setItem('longitude', position.coords.longitude);
            });
        } else {
            localStorage.setItem('latitude', '23.5942');
            localStorage.setItem('longitude', '46.6836');
        }
    }

    search() {
        localStorage.setItem('service', this.state.service);
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
                                <div className="col-xs-12 col-md-12">
                                    <label>Serviço</label>
                                    <SelectorInput placeholder="ex. Corte feminino" type="text" icon="cut" id="service" value={this.state.service} handleChange={this.handleInputChange} autocomplete={true} autocompleteroute="services?nome=" />
                                </div>

                                <div className="col-xs-12 col-md-3">
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
