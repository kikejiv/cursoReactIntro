import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() { 
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);

  let message;

  if(totalTodos === 0) {
    message = "No hay TODOS pendientes";
  } else if (totalTodos === completedTodos) {
    message = "Felicidades, completastes todas las tareas!! 🥳🎊";
  } else {
    message = `Has completado ${completedTodos} de ${totalTodos} TODOS`;
  } 
  return (
     
    <h1 className="TodoCounter">{message}</h1>
    /*<h1 className="TodoCounter" >
        Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS
    </h1>*/
  );
}

export { TodoCounter };