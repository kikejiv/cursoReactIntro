import React from "react";

function useLocalStorage(itemName, initialValue) { //useLocalStorage es el custom hook que se encargara de manejar todo lo relacionado al localStorage, ademas puede manejar parametros
  const [item, setItem] = React.useState(initialValue); //initialValue va a ser el estado inicial que este llamando el componente del custom hook useLocalStorage
  const [loading, setLoading] = React.useState(true); //estado inicias de carga de la app
  const [error, setError] = React.useState(false);
   
   React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName); //declaramos la variable localStorageTodos para trabajar con el localStorage  -- Todos_v1 es el nombre de la app
      
      let parsedItem; //declaramos la variable parseItem
  
      if (!localStorageItem) { //condicional para validar si es la primera vez que ingresa a la app el localStorage se inicie con un array vacio
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      } else {
        parsedItem = JSON.parse(localStorageItem); // si el caso contrario me traiga lo que tenia en el localStorage
        setItem(parsedItem);
      }
  
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);   
      }
    }, 5000); // se debe especificar el tiempo en milisegundos para que se ejecute la funcion dentro del  setTimeout
   }, [itemName, initialValue ]);
   
    //esta funcion actualiza al estado y al localStorage al mismo tiempo
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem)
    };
    return {
      item,
      saveItem,
      loading,
      error,
    };   
  }
  
  export { useLocalStorage };