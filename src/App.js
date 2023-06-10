import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch'; 
import { TodoList } from './TodoList'; 
import { TodoItem } from './TodoItem';
import './App.css';


function App() {
  return (
    <div className="App">
      
      <TodoCounter/>
      <TodoSearch/>  

      <TodoList> 
        <TodoItem/> 
        <TodoItem/> 
        <TodoItem/> 
      </TodoList>

      {/* <CreateTodoButton /> */}
      <button variant="contained">Crear Todo</button>
    </div>
  );
}

export default App;
