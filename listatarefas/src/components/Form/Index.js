import React from "react";
import { FaPlus } from "react-icons/fa";
import styles from "./Form.module.css"

export default function Form({ handleChange, handleSubmit, novaTarefa }) {
  return (
    <form action="#" className={styles.form} onSubmit={handleSubmit}>
      <input onChange={handleChange} type="text" value={novaTarefa} />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}
