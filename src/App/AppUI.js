// este archivo separa la logica con la interfas de usuario
import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch'; 
import { TodoList } from '../TodoList'; 
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoContext } from '../TodoContext';


function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    // el simbolo <> </> remplaza <React.Fragment>
    <>
      <TodoCounter />
      <TodoSearch /> 
      <TodoList> 
        {loading && <TodosLoading /> } 
        {error && <TodosError /> }
        {(!loading && searchedTodos.length === 0) && <EmptyTodos />} 
 
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

      {openModal && (
        <Modal>
          la funcion del modal
        </Modal>
      )}
    </>
  );
}
export { AppUI };
