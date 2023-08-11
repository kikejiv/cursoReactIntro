import React from "react";

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
  
  export { useLocalStorage };