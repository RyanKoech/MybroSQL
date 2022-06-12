//React Imports
import React, {useState, useCallback} from "react";

//Generators Imports
import { getDataFromCustomData } from "../generators/custom-data/custom-data";

//Object Imports
import ColumnObject from "../model/ColumnObject";

export const AppContext = React.createContext();

const AppContextProvider = ({children}) => {
  const [enteredCol, setEnteredCol] = useState("");
  const [colNamesList, setColNamesList] = useState([]);
  const [colObjList, setColObjList] = useState([]);
  const [generalInfo, setGeneralInfo] = useState({});

  //Keeps track of columns added in the UI
  const addNewColName = useCallback(
    (e) => {
      e.preventDefault();

      if (!enteredCol.trim().length || colNamesList.includes(enteredCol))
        return;

      setColNamesList((prevColList) => [...prevColList, enteredCol]);
      setColObjList((prevColObjList) => [...prevColObjList, ColumnObject(enteredCol, false, false, 120, "TEXT", "NAME", "")])

      console.log(colObjList);
      setEnteredCol('');
    },
    [colNamesList, enteredCol]
  );

  //Keeps track of details of columns add to the UI
  const updateColObjList = (newObj) => {

    setColObjList( prevColObjList => {

        const newColObjList = prevColObjList.map(obj => {

          if(obj.name === newObj.name){
            return {...obj, ...newObj};
          } 

          return obj;
        });
        
        console.log(newColObjList);
        return newColObjList;
    });
  };

  //Called to begin the process of data generation
  const generateData = () => {

    const data = {}
    const rowCount = 10

    colObjList.forEach((colObj) => {

      if(colObj.customData.trim().length > 0){
        const dirtyArray = colObj.customData.split(',');
        const cleanArray = dirtyArray.map((dirtyString) => dirtyString.trim())
        
        data[colObj.name] = getDataFromCustomData(cleanArray, rowCount, colObj.isUnique)
      }
    })
    console.log("General information: ")
    console.log(generalInfo);
    console.log("Column Info: ")
    console.log(colObjList);
    console.log("Data: ")
    console.log(data)
  }


  return (
    <AppContext.Provider value={{colNamesList, enteredCol, setEnteredCol, addNewColName, updateColObjList, setGeneralInfo, generateData}}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
