// src/TodoItem.jsx
import React from 'react';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li className="todo-item">
      <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
        {todo.title}
      </span>
      <div className="buttons">
        <button
          className={todo.done ? 'button-done' : ''} // Använd klassen för gjord-knappen
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.done ? 'Återställ' : 'Gjort'}
        </button>
        <button className="delete" onClick={() => deleteTodo(todo.id)}>Ta bort</button>
      </div>
    </li>
  );
};

export default TodoItem;
