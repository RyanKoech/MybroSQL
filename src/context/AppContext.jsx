import React, {useState, useCallback} from "react";

//Object Imports
import ColumnObject from "../model/ColumnObject";

export const AppContext = React.createContext();

const AppContextProvider = ({children}) => {
  const [enteredCol, setEnteredCol] = useState("");
  const [colNamesList, setColNamesList] = useState([]);
  const [colObjList, setColObjList] = useState([]);
  const [generalInfo, setGeneralInfo] = useState({});

  const addNewColName = useCallback(
    (e) => {
      e.preventDefault();

      if (!enteredCol.trim().length || colNamesList.includes(enteredCol))
        return;

      setColNamesList((prevColList) => [...prevColList, enteredCol]);
      setColObjList((prevColObjlist) => [...prevColObjlist, ColumnObject(enteredCol, false, false, 120, "TEXT", "NAME", "")])

      console.log(colObjList);
      setEnteredCol('');
    },
    [colNamesList, enteredCol]
  );

  const updateColObjList = (newObj) => {

    setColObjList( prevColObjlist => {

        const newColObjList = prevColObjlist.map(obj => {

          if(obj.name === newObj.name){
            return {...obj, ...newObj};
          } 

          return obj;
        });
        
        console.log(newColObjList);
        return newColObjList;
    });
  };

  const generateData = () => {

    const data = {}
    const rowCount = 10

    // colObjList.forEach((colObj) => {

    //   data[colObj.name] = []

    //   if(colObj.customData.trim().length > 0){
        
    //   }
    // })
    console.log("General infromation: ")
    console.log(generalInfo);
    console.log("Column Info: ")
    console.log(colObjList);
  }


  return (
    <AppContext.Provider value={{colNamesList, enteredCol, setEnteredCol, addNewColName, updateColObjList, setGeneralInfo, generateData}}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
