import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch'; 
import { TodoList } from './TodoList'; 
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';

const defaultTodos = [
  {text: 'Despertarme temprano', completed: true },
  {text: 'Ir al gym', completed: false },
  {text: 'Estudiar una hora', completed: false },
  {text: 'Trabajar durante el turno', completed: false },
  {text: 'Hacer visita', completed: false },

]


function App() {
  return (
    <React.Fragment>
      
      <TodoCounter completed={16} total={25} />
      <TodoSearch/>  

      <TodoList> 
        {defaultTodos.map(todo => ( //el metodo .map me crea un array apartir de otro array
          <TodoItem 
            key={todo.text}  
            text={todo.text}
            completed={todo.completed}
          /> //retorna el todoitem
        ))}
        
      </TodoList>

      <CreateTodoButton />
      
    </React.Fragment>
  );
}

export default App;
