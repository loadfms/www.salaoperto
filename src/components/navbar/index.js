import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export default class navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: 'mobile-menu',
            navbarClass: 'top-nav'
        };

        this.togglemenu = this.togglemenu.bind(this)
    }

    componentDidMount = () => {
        if (this.props.color){
            this.setState({navbarClass: 'top-nav ' + this.props.color})
        }
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
                <nav className={this.state.navbarClass}>
                    <div className="container">
                        <div className="row">
                            <button className="col-sm-12 icon hidden-sm hidden-md hidden-lg" onClick={this.togglemenu}>
                                <i className="fa fa-bars"></i>
                            </button>
                            <Link to="/" className="brand col-sm-2 hidden-xs">salaoperto</Link>

                            <Link to="/faq" className="col-sm-offset-2 col-sm-2 hidden-xs">Como Funciona?</Link>
                            <Link to="/cadastro-salao" className="col-sm-2 hidden-xs">Cadastrar meu salão</Link>
                            <Link to="/cadastro" className="col-sm-2 hidden-xs">Cadastre-se</Link>
                            <Link to="/login" className="col-sm-2 hidden-xs">Login</Link>
                        </div>
                    </div>
                </nav>
                <div className={this.state.isOpen}>
                    <ul>
                        <li>
                            <Link to="/faq">Como Funciona?</Link>
                        </li>
                        <li>
                            <Link to="/cadastro-salao" >Cadastrar meu salão</Link>
                        </li>
                        <li>
                            <Link to="/cadastro">Cadastre-se</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}