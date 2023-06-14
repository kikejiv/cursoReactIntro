import React from 'react';
import './TodoSearch.css';

function TodoSearch() {
  
  return (
    <input placeholder="Buscar algo" 
    className="TodoSearch" 
    onChange={(event) => {
      console.log("escribistes en el serch")
      console.log(event) 
      console.log(event.target) 
      console.log(event.target.value) 

    }} 
    />
  );
}

export { TodoSearch };