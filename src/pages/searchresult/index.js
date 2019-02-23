import React, { Component } from 'react'
import SelectorInput from './../../components/selectorinput/index'
import Card from './../../components/card/index'

export default class searchresult extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: 'row filter-content',
            faIcon: 'fa fa-plus-square collapse-filter'
        };

        this.tooglefilter = this.tooglefilter.bind(this)
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
                                <label>Data</label>
                                <SelectorInput type="text" icon="calendar" id="valueData" value="10/02/2019 15:00"/>
                            </div>

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
                    <Card name="Romeo" subname="the grooming room" address="Rua Júlio Diniz, 31" neighborhood="Vila Olímpia" city="São Paulo" state="SP" logo="https://www.trinks.com//Content/upload/img/est_logo/0x92/logo_000005723.jpg?v=68082" />
                    <Card invert={true}  name="Dom Caveira" subname="barbearia" address="Avenida Doutor Cardoso de Melo, 984" neighborhood="Vila Olímpia" city="São Paulo" state="SP" logo="https://static.avecbrasil.com.br/saloes/barbeariadomcave/logo.jpg"/>
                    <Card name="Zenos" subname="sallon express" address="Rua Ramos Batista, 372" neighborhood="Vila Olímpia" city="São Paulo" state="SP" logo="https://static.salaovip.com.br/saloes/zenosvlolimpia/logo.jpg"/>
                    <Card invert={true}  name="Corleone" subname="barbearia" address="Rua Nova Cidade, 26" neighborhood="Vila Olímpia" city="São Paulo" state="SP" logo="https://static.salaovip.com.br/saloes/corleone-vila-olimpia/logo.jpg"/>
                </div>
            </div>
        )
    }
}
