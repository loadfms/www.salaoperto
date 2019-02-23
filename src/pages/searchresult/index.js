import React, { Component } from 'react'
import SelectorInput from './../../components/selectorinput/index'

export default class searchresult extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: 'row filter-content'
        };

        this.tooglefilter = this.tooglefilter.bind(this)
    }

    tooglefilter() {
        if (this.state.isOpen === 'row filter-content') {
            this.setState({ isOpen: 'row filter-content is-open' })
        } else {
            this.setState({ isOpen: 'row filter-content' })
        }
    }

    render() {
        return (
            <div className="container result">
                <div className="row">
                    <div className="col-xs-12 filter ">
                        <i className="fa fa-minus-square collapse-filter" onClick={this.tooglefilter}></i>
                        <h2>Filtros</h2>

                        <div className={this.state.isOpen}>
                            <div className="col-xs-12 col-md-6">
                                <label>Data</label>
                                <SelectorInput type="text" icon="calendar" id="valueData" />
                            </div>

                            <div className="col-xs-12 col-md-6">
                                <label>Serviço</label>
                                <SelectorInput type="text" icon="cut" id="service" />
                            </div>

                            <div className="col-xs-12">
                                <button className="btn" onClick={this.search}> Encontrar </button>
                            </div>
                        </div>
                        <small>126 salões encontrados em <strong>Vila Olimpia, SP</strong> que tem o serviço de <strong>corte feminino</strong>.</small>
                    </div>
                </div>
            </div>
        )
    }
}
