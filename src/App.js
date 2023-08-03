import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch'; 
import { TodoList } from './TodoList'; 
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';

const defaultTodos = [
  {text: 'Despertarme temprano', completed: false },
  {text: 'Ir al gym', completed: false },
  {text: 'Estudiar una hora', completed: false },
  {text: 'Trabajar durante el turno', completed: false },
  {text: 'Hacer visita', completed: false },
  {text: 'estados', completed: false },

]


function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState(''); //creamos el estado para actualizar lo que se escriba en el input

  const completedTodos = todos.filter(todo => !!todo.completed).length; //el simbolo !! o doble negacion converita en boleano cualquier cosa que devuelva
  const totalTodos = todos.length;

  const searchedTodos = todos.filter( //se filtra para que devuelva todas las coincidencias
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText)// este metodo devuelve el texto si incluye en la busqueda del searchValue
    }
  );
//-- marcar todo como completados
  const completeTodo = (text) => {
    const newTodos = [...todos]; //[...]sirve para hacer una copia del array
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  //-- eliminar todo
  const deleteTodo = (text) => {
    const newTodos = [...todos]; //[...]sirve para hacer una copia del array
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1) //el metodo splice pide una posicion en el indice y el 1 es las cantidades que eliminara
    setTodos(newTodos);
  };

  return ( // el simbolo <> </> remplaza <React.Fragment>
    <> 
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue}
        setSearchValue={setSearchValue}
      />  

      <TodoList> 
        {searchedTodos.map(todo => ( //el metodo .map me crea un array apartir de otro array
          <TodoItem 
            key={todo.text}  
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)} //se encapsula una funcion en otra funcion
            onDelete={() => deleteTodo(todo.text)}
          /> //retorna el todoitem
        ))}
      </TodoList>

      <CreateTodoButton />
      
    </>
  );
}

export default App;
