import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('') //de forma local se crea el estado para que guarde la informacion que escribe el usuario

    const onSubmit = (event) => { //cuando dan click al boton se conecta con el contexto global de la app 
        event.preventDefault(); //metodo para evitar que se recargue la pagina y se envie el formulario
        addTodo(newTodoValue); //al addTodo se le envia el nuevo Todovalue
        setOpenModal(false);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (event) => {
      setNewTodoValue (event.target.value);
    };
    
    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu Nuevo TODO</label>
            <textarea 
                placeholder="Escribe tu TODO" 
                value={newTodoValue}
                onChange={onChange}
                 />
            <div className="TodoForm-buttonContainer">
                <button type="button" className="TodoForm-button TodoForm-button--cancel" onClick={onCancel} >Cancelar</button>
                <button type="submit" className="TodoForm-button TodoForm-button--add" >Añadir</button>
            </div>
        </form>
        
    )
};

export { TodoForm }