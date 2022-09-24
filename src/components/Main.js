import React, { Component } from "react";

export default class Main extends Component {
  state = {
    tarefas: "",
    listaDeTarefas: []
  };

  handleChange = (event) => {
    this.setState({
      tarefas: event.target.value
    });
  };

  handleClick = () => {
    if (this.state.tarefas !== "") {
      this.setState({
        listaDeTarefas: this.state.listaDeTarefas.concat({
          tarefas: this.state.tarefas,
          id: Date.now()
        }),
        tarefas: ""
      });
    }
  };
  remove = (id) => {
    this.setState({
      listaDeTarefas: this.state.listaDeTarefas.filter((item) => item.id !== id)
    });
  };

  render() {
    return (
      <form onSubmit={(event) => event.preventDefault()}>
        <h2>ToDo List</h2>
        <input onChange={this.handleChange} value={this.state.tarefas} />
        <button onClick={this.handleClick}>Enviar</button>
        <div>
          {this.state.listaDeTarefas.map((item, index) => (
            <itens key={index}>
              <ul>
                <li>{item.tarefas}</li>
              </ul>
              <button onClick={() => this.remove(item.id)}>X</button>
            </itens>
          ))}
        </div>
      </form>
    );
  }
}
