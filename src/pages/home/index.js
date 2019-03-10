import React, { Component } from 'react'
import SelectorInput from './../../components/selectorinput/index'
import Navbar from './../../components/navbar/index';
import axios from 'axios'
import * as config from './../../config'


export default class home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            service: "",
            latitude: "-23.5942",
            longitude: "-46.6836",
            neighborhood: "Vila Olímpia"
        }

        this.search = this.search.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)

    }

    componentDidMount() {
        let _this = this
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.setState({ latitude: position.coords.latitude, longitude: position.coords.longitude }, () => {
                    _this.getLocation()
                })
            });
        } else {
            this.getLocation()
        }
    }


    getLocation() {
        let url = config.GOOGLE_GEOLOCATION_URL.replace("{lat}", this.state.latitude).replace("{lon}", this.state.longitude)
        let _this = this

        axios.get(url)
            .then(function (response) {
                response.data.results[0].address_components.map((item, i) => {
                    if (item.types.includes("sublocality")){
                       _this.setState({neighborhood: item.long_name})
                    }
                })
            })
            .catch(function (error) {
                console.log(error)
            });
    }

    search() {
        localStorage.setItem('latitude', this.state.latitude);
        localStorage.setItem('longitude', this.state.longitude);
        localStorage.setItem('service', this.state.service);
        localStorage.setItem('neighborhood', this.state.neighborhood);
        this.props.history.push('/resultado')
    }

    handleInputChange(key, value) {
        this.setState({ [key]: value })
    }

    render() {
        return (
            <div>
                <Navbar color="white"/>
                <div className="main">
                    <div className="container home-search">
                        <div className="row">
                            <h1 className="col-xs-12">Encontre o serviço que você procura na hora que precisa</h1>
                            <p className="col-xs-12 subtitle">Dezenas de salões perto de você: só falta encaixar o seu horário livre na agenda de um deles</p>
                        </div>
                        <div className="row">
                            <div className="col-xs-offset-1 col-xs-10 box ">
                                <h2>Salões próximos a {this.state.neighborhood}</h2>

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
            </div>
        )
    }
}
