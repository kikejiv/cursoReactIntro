import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';

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
  const {
    item: todos, //renombremos los objetos todo y saveTodos
    saveItem: saveTodos,
    loading,
    error,
   } = useLocalStorage('TODOS_V1', []); //guardamos la variable en el estado inicial de la app con custom hook pasandoles las propiedades quellevara inicialmente
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
  return ( // retorna el componente AppUI y envian las props y con sus valores ej: completedTodos={completedTodos}
    <AppUI 
    loading={loading}
    error={error}
    completedTodos={completedTodos}
    totalTodos={totalTodos}
    searchValue = {searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}    
    />  
  )
}

export default App;
