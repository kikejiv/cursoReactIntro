import React from 'react';
import { TodoCounter } from '../TodoCounter/index';
import { TodoSearch } from '../TodoSearch/index'; 
import { TodoList } from '../TodoList/index'; 
import { TodoItem } from '../TodoItem/index';
import { CreateTodoButton } from '../CreateTodoButton';
import './App.css';

/* const defaultTodos = [
  {text: 'Despertarme temprano', completed: false },
  {text: 'Ir al gym', completed: false },
  {text: 'Estudiar una hora', completed: false },
  {text: 'Trabajar durante el turno', completed: false },
  {text: 'Hacer visita', completed: false },
  {text: 'estados', completed: false },
];
localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos)); */

function useLocalStorage(itemName, initialValue) { //useLocalStorage es el custom hook que se encargara de manejar todo lo relacionado al localStorage, ademas puede manejar parametros
  
  const localStorageItem = localStorage.getItem(itemName); //declaramos la variable localStorageTodos para trabajar con el localStorage  -- Todos_v1 es el nombre de la app
  
  let parsedItem;
  //let parsedTodos = JSON.parse(localStorageTodos) //parseTodo llammos el json.parse nos convierte de string a array

  if (!localStorageItem) { //condicional para validar si es la primera vez que ingresa a la app el localStorage se inicie con un array vacio
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = [];
  } else {
    parsedItem = JSON.parse(localStorageItem); // si el caso contrario me traiga lo que tenia en el localStorage
  }

  const [item, setItem] = React.useState(parsedItem);
  
  //esta funcion actualiza al estado y al localStorage al mismo tiempo
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem)
  };
  return [item, saveItem];
    
}

function App() {  
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []); //guardamos la variable en el estado inicial de la app con custom hook pasandoles las propiedades quellevara inicialmente
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
    saveTodos(newTodos);
  };

  //-- eliminar todo
  const deleteTodo = (text) => {
    const newTodos = [...todos]; //[...]sirve para hacer una copia del array
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1) //el metodo splice pide una posicion en el indice y el 1 es las cantidades que eliminara
    saveTodos(newTodos);
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
