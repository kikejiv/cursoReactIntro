import './TodoCounter.css';

function TodoCounter({total, completed}) { 
  let message;

  if(total === 0) {
    message = "No hay TODOS pendientes";
  } else if (total === completed) {
    message = "Felicidades, completastes todas las tareas!! 🥳🎊";
  } else {
    message = `Has completado ${completed} de ${total} TODOS`;
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