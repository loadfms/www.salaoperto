import React, { Component } from 'react'
import SelectorInput from './../../components/selectorinput/index'
import Card from './../../components/card/index'
import axios from 'axios'
import * as config from './../../config'


export default class searchresult extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: 'row filter-content',
            faIcon: 'fa fa-plus-square collapse-filter',
            payload: {data: {companies: []}}
        };

        this.tooglefilter = this.tooglefilter.bind(this)
    }

    componentWillMount = () => {
        let latitude = localStorage.getItem('latitude');
        let longitude = localStorage.getItem('longitude');
        let _this = this;

        axios.get(config.API_URL + 'companies?latitude=' + latitude + '&longitude=' + longitude + '&nome_servico=Corte%20Masculino&page=1')
            .then(function (response) {
                _this.setState({ payload: response })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    tooglefilter() {
        if (this.state.isOpen === 'row filter-content') {
            this.setState({
                isOpen: 'row filter-content is-open',
                faIcon: 'fa fa-minus-square collapse-filter'
            })
        } else {
            this.setState({
                isOpen: 'row filter-content',
                faIcon: 'fa fa-plus-square collapse-filter'
            })
        }
    }

    render() {
        return (
            <div className="container result">
                <div className="row">
                    <div className="col-xs-12 filter ">
                        <i className={this.state.faIcon} onClick={this.tooglefilter}></i>
                        <h2>Filtros</h2>

                        <div className={this.state.isOpen}>
                            <div className="col-xs-12 col-md-6">
                                <label>Serviço</label>
                                <SelectorInput type="text" icon="cut" id="service" value="Corte feminino" />
                            </div>

                            <div className="col-xs-12">
                                <button className="btn" onClick={this.search}> Encontrar </button>
                            </div>
                        </div>
                        <small><strong>126</strong> salões encontrados em <strong>Vila Olimpia, SP</strong> que tem o serviço de <strong>corte feminino</strong>.</small>
                    </div>
                </div>
                <div className="row">
                    {this.state.payload.data.companies.map((company, i) => {
                        let invert = i%2 != 0
                        return (<Card invert={invert} key={company.company_id} name={company.nome} subname={company.Service[0].nome} address={company.endereco} neighborhood={company.bairro} city={company.cidade} state="SP" logo={company.urlFoto} />)
                    })}
                </div>
            </div>
        )
    }
}
