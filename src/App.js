// import Logo from './img';
import './App.css';
import React from 'react';
import hamburguesa from './img/hamburguesa.jpg'

function Inicio() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Burguer Queen</p>
        <img src={ hamburguesa } className="hamburguesa" alt="logo" />
        <br/>
        <button type="submit">Mesero</button>
        <button type="submit">Cocinero</button>
      </header>
    </div>
  );
}

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Nombre de cliente:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <br/>
          N° de Mesa:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
      </form>
    );
  }
}

export {NameForm, Inicio};
