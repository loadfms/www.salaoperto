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

    signin(){
        this.props.history.push('/login')
    }

    signup(){
        this.props.history.push('/cadastro')
    }

    handleInputChange(key, value) {
        this.setState({ [key]: value })
    }

    render() {
        return (
            <div className="home-page container">
                <div className="home-page__logo">
                    <div className="row">
                        <h1 className="col-xs-12 center">Salão Perto</h1>
                    </div>
                </div>
                <div className="home-page__buttons">
                    <div className="row">
                        <input type="submit" className="button col-xs-offset-1 col-xs-10" value="Entrar" onClick={this.signin} />
                    </div>
                    <div className="row">
                        <input type="submit" className="button col-xs-offset-1 col-xs-10" value="Cadastrar" onClick={this.signup}/>
                    </div>
                </div>
                <div className="home-page__footer">
                    <div className="row">
                        <button className="col-xs-12">Como funciona?</button>
                    </div>
                    <div className="row">
                        <button className="col-xs-12">Cadastre seu salão.</button>
                    </div>
                </div>
            </div>
        )
    }
}
