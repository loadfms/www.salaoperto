import React, { Component } from 'react'
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
        this.signin = this.signin.bind(this)
        this.signup = this.signup.bind(this)

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
                response.data.results[0].address_components.forEach(item => {
                    if (item.types.includes("sublocality")) {
                        _this.setState({ neighborhood: item.long_name })
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

    signin() {
        this.props.history.push('/login')
    }

    signup() {
        this.props.history.push('/cadastro')
    }

    handleInputChange(key, value) {
        this.setState({ [key]: value })
    }

    render() {
        return (
            <div className="home-page ">
                <div className="home-page-mobile container hidden-md hidden-lg hidden-xl">
                    <div className="home-page-mobile__logo">
                        <div className="row">
                            <h1 className="col-xs-12">Salão Perto</h1>
                        </div>
                    </div>
                    <div className="home-page-mobile__buttons">
                        <div className="row">
                            <input type="submit" className="button col-xs-offset-1 col-xs-10" value="Entrar" onClick={this.signin} />
                        </div>
                        <div className="row">
                            <input type="submit" className="button col-xs-offset-1 col-xs-10" value="Cadastrar" onClick={this.signup} />
                        </div>
                    </div>
                    <div className="home-page-mobile__footer">
                        <div className="row">
                            <button className="col-xs-12">Como funciona?</button>
                        </div>
                        <div className="row">
                            <button className="col-xs-12">Cadastre seu salão.</button>
                        </div>
                    </div>
                </div>
                <div className="home-page-desktop hidden-sm hidden-xs">
                    <div className="home-page-desktop__content">
                        <div className="home-page-desktop__content__logo">
                            <div className="row">
                                <h1 className="col-md-offset-1 col-md-11">salaoperto</h1>
                                <h2 className="col-md-offset-1 col-md-7">Nunca foi tão fácil ter um novo visual</h2>
                                <h3 className="col-md-offset-1 col-md-7">Encontre milhares de salões pertinho de você e marque seu horário. Receba confirmações e lembretes dos seus compromissos.</h3>
                            </div>
                        </div>
                        <div className="home-page-desktop__content__buttons">
                            <div className="row">
                                <input type="submit" className="button col-md-offset-1 col-md-6" value="Cadastre-se" onClick={this.signup} />
                                <button type="submit" className="button gray col-md-offset-1 col-md-1" onClick={this.search}><i class="icofont-search"></i></button>
                            </div>
                        </div>
                        <div className="home-page-desktop__content__footer">
                            <div className="row">
                                <button className="col-xs-12">CADASTRE SEU SALÃO <span>Exiba seu salão para muitos clientes</span></button>
                            </div>
                        </div>
                    </div>
                    <div className="home-page-desktop__bg">
                    </div>
                </div>

            </div>

        )
    }
}
