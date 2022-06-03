import React, {useState, useCallback} from "react";

export const AppContext = React.createContext();

const AppContextProvider = ({children}) => {
  const [enteredCol, setEnteredCol] = useState("");
  const [colNamesList, setColNamesList] = useState([]);

  const addNewColName = useCallback(
    (e) => {
      e.preventDefault();

      if (!enteredCol.trim().length || colNamesList.includes(enteredCol))
        return;

      setColNamesList((prevColList) => [...prevColList, enteredCol]);
      setEnteredCol('');
    },
    [colNamesList, enteredCol]
  );

  return (
    <AppContext.Provider value={{colNamesList, enteredCol, setEnteredCol, addNewColName}}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
