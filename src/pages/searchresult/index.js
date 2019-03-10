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
            payload: { data: { companies: [] } },
            page: 1,
            service: '',
            neighborhood: localStorage.getItem('neighborhood')
        };

        this.tooglefilter = this.tooglefilter.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.getData = this.getData.bind(this)
    }

    registerLayzyLoad(){
        window.onscroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
                this.setState({ page: this.state.page+1 }, () => {
                    this.getData(false)
                })
            }
        };
    }

    componentDidMount(){
        this.registerLayzyLoad()

        this.getData(false)
        this.setState({service: localStorage.getItem('service')})
    }

    getData(clear) {
        let latitude = localStorage.getItem('latitude');
        let longitude = localStorage.getItem('longitude');
        let _this = this;

        axios.get(config.API_URL + 'companies?latitude=' + latitude + '&longitude=' + longitude + '&nome_servico=' + this.state.service + '&page=' + this.state.page)
            .then(function (response) {

                
                let currentCompanies = _this.state.payload.data.companies
                let newCompanies = response.data.companies
                let result = []
                
                if (!clear){
                    result = currentCompanies.concat(newCompanies);
                } else {
                    result = newCompanies
                }

                response.data.companies = result

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

    handleInputChange(key, value) {
        this.setState({ [key]: value })
    }

    render() {
        return (
            <div className="container result">
                <div className="row">
                    <div className="col-xs-12 filter ">
                        <i className={this.state.faIcon} onClick={this.tooglefilter}></i>
                        <h2>Filtros</h2>

                        <div className={this.state.isOpen}>
                            <div className="col-xs-12 col-md-12">
                                <label>Serviço</label>
                                <SelectorInput placeholder="ex. Corte feminino" type="text" icon="cut" id="service" value={this.state.service} handleChange={this.handleInputChange} autocomplete={true} autocompleteroute="services?nome=" />
                            </div>

                            <div className="col-xs-12">
                                <button className="btn" onClick={this.getData}> Encontrar </button>
                            </div>
                        </div>
                        <small><strong>{this.state.payload.data.count}</strong> salões encontrados em <strong>{this.state.neighborhood}, SP</strong> que tem o serviço de <strong>corte masculino</strong>.</small>
                    </div>
                </div>
                <div className="row">
                    {this.state.payload.data.companies.map((company, i) => {
                        let invert = i % 2 !== 0
                        return (<Card invert={invert} key={company.company_id} name={company.nome} subname={company.Service[0].nome} address={company.endereco} neighborhood={company.bairro} city={company.cidade} state="SP" logo={company.urlFoto} />)
                    })}
                </div>
            </div>
        )
    }
}
