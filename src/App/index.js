import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';

/*
localStorage.removeItem('TODOS_V1');
const defaultTodos = [
  {text: 'Despertarme temprano', completed: false },
  {text: 'Ir al gym', completed: false },
  {text: 'Estudiar una hora', completed: false },
  {text: 'Trabajar durante el turno', completed: false },
  {text: 'Hacer visita', completed: false },
  {text: 'estados', completed: false },
];
localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos)); */

function App() {  
  return ( // retorna el componente AppUI y envian las props y con sus valores ej: completedTodos={completedTodos}
    <TodoProvider>
      <AppUI />  
    </TodoProvider>
  );
}

export default App;
