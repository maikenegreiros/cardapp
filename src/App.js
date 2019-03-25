import React, { Component } from "react";
import "./App.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/Card";
import ButtonUp from "./components/ButtonUp";

class App extends Component {
  constructor() {
    super();
    this.state = {
      categorias: [
        "Bebidas",
        "Massas",
        "Sobremesas",
        "Lanches",
        "Almoço",
        "Salgados",
        "Bolos",
        "Tortas"
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <ul className="CategoriesList">
          {this.state.categorias.map(categoria => (
            <Card categoria={categoria} />
          ))}
        </ul>
        <ButtonUp />
      </div>
    );
  }
}

export default App;
