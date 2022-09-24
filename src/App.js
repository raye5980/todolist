import React, { Component } from "react";
import Main from "./components/Main";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Lista de Tarefas</h1>
        <Main />
      </div>
    );
  }
}
