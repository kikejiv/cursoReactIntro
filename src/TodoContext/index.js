import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
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
    
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
        }}>
            {children}
        </TodoContext.Provider>
    );
}


export { TodoContext, TodoProvider };