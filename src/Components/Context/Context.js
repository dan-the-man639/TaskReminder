import React, {createContext, useState} from 'react';

const Context = createContext(undefined);

const AppProvider = ({children}) => {
  const [newTasks, setNewTasks] = useState([]);

  return (
    <Context.Provider value={{newTasks, setNewTasks}}>
      {children}
    </Context.Provider>
  );
};

export {AppProvider, Context};
