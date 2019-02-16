import React, { Component } from 'react';


export default class navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: 'mobile-menu'
        };

        this.togglemenu = this.togglemenu.bind(this)
    }

    togglemenu() {
        if (this.state.isOpen === 'mobile-menu') {
            this.setState({ isOpen: 'mobile-menu is-open' })
        } else {
            this.setState({ isOpen: 'mobile-menu' })
        }
    }

    render() {
        return (
            <div>
                <nav className="top-nav">
                    <div className="container">
                        <div className="row">
                            <button className="col-sm-12 icon hidden-md hidden-lg" onClick={this.togglemenu}>
                                <i className="fa fa-bars"></i>
                            </button>
                            <a href="/" className="brand col-md-2 hidden-sm hidden-xs"></a>
                            <a href="#news" className="col-md-offset-2 col-md-2 hidden-sm hidden-xs">Como funciona?</a>
                            <a href="#about" className="col-md-2 hidden-sm hidden-xs">Cadastrar meu salão</a>
                            <a href="/cadastro" className="col-md-2 hidden-sm hidden-xs">Cadastre-se</a>
                            <a href="#about" className="col-md-2 hidden-sm hidden-xs">Login</a>
                        </div>
                    </div>
                </nav>
                <div className={this.state.isOpen}>
                    <ul>
                        <li>
                            <a href="#news">Como funciona?</a>
                        </li>
                        <li>
                            <a href="#news">Cadastrar meu salão</a>
                        </li>
                        <li>
                            <a href="/cadastro">Cadastre-se</a>
                        </li>
                        <li>
                            <a href="#news">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}