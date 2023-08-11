import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch'; 
import { TodoList } from '../TodoList'; 
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import './App.css';

function AppUI({
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
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map(
          (
            todo //el metodo .map me crea un array apartir de otro array
          ) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)} //se encapsula una funcion en otra funcion
              onDelete={() => deleteTodo(todo.text)}
            /> //retorna el todoitem
          )
        )}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}
export { AppUI };
