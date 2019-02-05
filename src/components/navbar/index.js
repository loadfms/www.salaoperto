import React, { Component } from 'react';


export default class navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentmenu: 'topnav'
        };

        this.togglemenu = this.togglemenu.bind(this)
    }

    togglemenu() {
        if (this.state.currentmenu === 'topnav') {
            this.setState({ currentmenu: 'topnav responsive' })
        } else {
            this.setState({ currentmenu: 'topnav' })
        }
    }

    render() {
        return (
            <div className="container">
                <nav className={this.state.currentmenu} id="myTopnav">
                    <div className="container">
                        <a href="#home" className="brand">SP</a>
                        <a href="javascript:void(0)" className="icon" onClick={this.togglemenu}>
                            <i className="fa fa-bars"></i>
                        </a>
                        <a href="#about">Login</a>
                        <a href="#about">Cadastre-se</a>
                        <a href="#contact">Cadastrar meu salão</a>
                        <a href="#news">Como funciona?</a>
                    </div>
                </nav>
            </div>
        )
    }
}