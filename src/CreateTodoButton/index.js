import './CreateTodoButton.css';

function CreateTodoButton({ setOpenModal }) {
  return (
    <button className="CreateTodoButton" 
    onClick={ /*(event) => {
      console.log("Le diste click")
      console.log(event) 
      console.log(event.target) */
      () => {setOpenModal(state => !state); // se le envia una arrow function con el estado y su negacion
      }
  }
   >+</button>
  );
}

export { CreateTodoButton };