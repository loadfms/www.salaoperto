import React, { Component } from 'react'
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

    registerLayzyLoad() {
        window.onscroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
                this.setState({ page: this.state.page + 1 }, () => {
                    this.getData(false)
                })
            }
        };
    }

    componentDidMount() {
        this.registerLayzyLoad()

        this.getData(false)
        this.setState({ service: localStorage.getItem('service') })
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

                if (!clear) {
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
            <div>
               
            </div>
        )
    }
}
