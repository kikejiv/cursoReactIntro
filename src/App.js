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
  {text: 'estados', completed: true },

]


function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState(''); //creamos el estado para actualizar lo que se escriba en el input

  const completedTodos = todos.filter(todo => !!todo.completed).length; //el simbolo !! o doble negacion converita en boleano cualquier cosa que devuelva
  const totalTodos = todos.length;

    console.log('los usuarios buscan ' + searchValue );
  return ( // el simbolo <> </> remplaza <React.Fragment>
    <> 
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />  

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
      
    </>
  );
}

export default App;
