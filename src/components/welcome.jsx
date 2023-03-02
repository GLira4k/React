import React from 'react';

import Quiz from "../img/quiz.svg";
import "./welcome.css";

const Welcome = () => {
  return(
    <div id= "Welcome">
      <h2>Seja Bem-Vindo</h2>
      <p>Clique no botão abaixo para começar:</p>
      <button>Iniciar</button>
      <img src={Quiz} alt="Início do Quiz"></img>
    </div>
  )
}

export default Welcome
