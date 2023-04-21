import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import styles from "./Tarefas.module.css"

export default function Tarefas({ tarefas, handleDelete, handleEdit }) {
  return (
    <ul className={styles.tarefas}>
      {tarefas.map((tarefa, index) => (
        <li key={tarefa}>
          {tarefa}
          <span>
            <FaEdit
              onClick={(e) => handleEdit(e, index)}
              className={styles.edit}
            />
            <FaTrash
              onClick={(e) => handleDelete(e, index)}
              className={styles.delete}
            />
          </span>
        </li>
      ))}
    </ul>
  );
}
