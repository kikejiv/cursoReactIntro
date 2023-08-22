import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() { 
  const {
    completedTodo,
    totalTodo,
  } = React.useContext(TodoContext);

  let message;

  if(totalTodo === 0) {
    message = "No hay TODOS pendientes";
  } else if (totalTodo === completedTodo) {
    message = "Felicidades, completastes todas las tareas!! 🥳🎊";
  } else {
    message = `Has completado ${completedTodo} de ${totalTodo} TODOS`;
  }
  return (
    <h1 className="TodoCounter">{message}</h1>
   
    /*total === completed ?
    <h1 className="TodoCounter">Felicidades, completastes todas las tareas!! 🥳🎊 </h1> 
    :

    <h1 className="TodoCounter" >
        Has completado <span>{completed}</span> de <span>{total}</span> TODOS
    </h1>*/
  );
}

export { TodoCounter };