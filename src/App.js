import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {numero: '', res: '', url: 'http://172.17.0.3:9000/codebreaker/'};

    this.ingresaTexto = this.ingresaTexto.bind(this);
    this.adivinar = this.adivinar.bind(this);
  }

  ingresaTexto(event){
    this.setState({numero: event.target.value});
  }

  adivinar(event) {
    console.log(this.state.url+this.state.numero);
    axios.get(this.state.url+this.state.numero)
      .then(response => {
        console.log(response.data);
        this.setState({res: response.data.valor});
      })
      .catch(error => {
        console.log(error);
        this.setState({res: 'Error de comunicación con el BackEnd'});
    });
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> Ejemplo : Raúl y Jean - CodeBreaker</h1>
        </header>
        <p className="App-intro">
          Intente adivinar la clave
        </p>
        <div >
          <form onSubmit={this.adivinar}>
            <label>
              Digite número:
              <input type="number" value={this.state.numero} onChange={this.ingresaTexto}/>
            </label>
            <input type="submit" value="Adivinar" />
          </form>
        </div>
        <div>
          <label>Respuesta: {this.state.res}</label>
        </div>
      </div>
    );
  }
}

export default App;
