// este archivo separa la logica con la interfas de usuario
import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch'; 
import { TodoList } from '../TodoList'; 
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import './App.css';

function AppUI({
  loading,
  error,
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
}) {
  return (
    // el simbolo <> </> remplaza <React.Fragment>
    <>
      <TodoCounter 
      completed={completedTodos} // al componente  le pasamos dos parametros completed y total
      total={totalTodos} 
      />
      
      <TodoSearch  //al componente  le pasamos el actualizador value
      searchValue={searchValue} 
      setSearchValue={setSearchValue} 
      />
      
      <TodoList> 
        {loading && <p>Esta cargando la aplicacion...</p>} 
        {error && <p>Hubo un error!😥</p>}
        {(!loading && searchedTodos.length === 0) && <p>Crea tu primer TODO!</p>} 

        {searchedTodos.map(todo => (   //el metodo .map me crea un array apartir de otro array
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
export { AppUI };
