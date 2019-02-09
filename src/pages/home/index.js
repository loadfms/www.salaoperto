import React, { Component } from 'react'

export default class home extends Component {
    render() {
        return (
            <div className="main">
                <div className="container">
                    <div className="home-search">
                        <div className="row">
                            <h1 className="col-sm-12">Encontre o serviço que você procura na hora que precisa</h1>
                            <p className="col-sm-12">Dezenas de salões perto de você: só falta encaixar o seu horário livre na agenda de um deles</p>
                        </div>
                        <div className="box">
                            <h2>Salões</h2>
                            <label>Data e hora</label>
                            <input type="text"></input>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
