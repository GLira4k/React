import { Component } from "react";
import './styles.css'

export default class Button extends Component {
    

  render() {
    const {text, onClick, disabled} = this.props;

    return (
    <button 
    disabled={disabled}
    onClick={onClick} 
    className="btn"
    >
        {text}
    </button>
    );
  }
}
