import React, { Component } from "react";
import Tarefas from "./Tarefas/Index";
import Form from "./Form/Index";
import "./Main.css";

export default class Main extends Component {
  // Criando estado para classe abaixo
  state = {
    novaTarefa: "",
    tarefas: [],
    index: -1,
  };

  // salvando tarefas no local storage

  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem("tarefas"));

    if (!tarefas) return;

    this.setState({ tarefas });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state;
    if (tarefas === prevState.tarefas) return;

    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();

    if (tarefas.indexOf(novaTarefa) !== -1) return;

    const novasTarefas = [...tarefas];

    if (index === -1) {
      this.setState({
        tarefas: [...novasTarefas, novaTarefa],
        novaTarefa: "",
      });
    } else {
      novasTarefas[index] = novaTarefa;

      this.setState({
        tarefas: [...novasTarefas],
        index: -1,
        novaTarefa: "",
      });
    }
  };

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  handleEdit = (e, index) => {
    const { tarefas } = this.state;

    this.setState({
      index: index,
      novaTarefa: tarefas[index],
    });
  };

  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);

    this.setState({
      tarefas: [...novasTarefas],
    });
  };


  // componentes com estado statefull (classes), precisam do metodo render() para renderizar algo na tela.

  render() {
    const { novaTarefa, tarefas } = this.state;

    return (
      <>
        <div className="main" onClick={this.handleHideDropdown}>
          <h1>Lista de Tarefas</h1>
          <Form
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            novaTarefa={novaTarefa}
            required
          />
          <Tarefas
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
            tarefas={tarefas}
            required
          />
        </div>
      </>
    );
  }
}
