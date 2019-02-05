import React, { Component } from 'react';
import Navbar from './../components/navbar/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
          <div className="main">
            <div className="hero-section">
              <div className="container">
                <div className="hero-content">
                  <h1 >Salão Perto</h1>
                  <p>
                    A melhor ferramenta para clientes encontrarem o salão perfeito!<br />
                    Encontre o salão perfeito com o horário ideal para você.
                    </p>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
