//React Imports
import React, {useState, useCallback} from "react";
import { createPortal } from "react-dom";

//Generators Imports
import { getDataFromCustomData } from "../generators/custom-data/custom-data-generator";
import { generateFullNames } from "../generators/names/name-generator";
import { generateRandomNumber } from "../generators/random-number/random-number-generator";
import { generatePhoneNumber } from "../generators/phone-number/phone-number-generator";
import { generateEmail } from "../generators/email/email-generator";

//Object Imports
import ColumnObject from "../model/ColumnObject";

//Constants Imports
import { NAME, WORD, RANDOM_NUMBER, PHONE, ADDRESS, EMAIL } from "../model/Constants";

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

      if(colObj.customData.trim().length > 0){ //Use the data provided for generating foreign key field data
        const dirtyArray = colObj.customData.split(',');
        const cleanArray = dirtyArray.map((dirtyString) => dirtyString.trim())
        
        data[colObj.name] = getDataFromCustomData(cleanArray, rowCount, colObj.isUnique)
      }else {
        switch(colObj.dataDomain){
          case NAME: {
            data[colObj.name] = generateFullNames(rowCount, colObj.isUnique);
            break;
          }
          case RANDOM_NUMBER: {
            data[colObj.name] = generateRandomNumber(rowCount, parseInt(colObj.size), colObj.isUnique);
            break;
          }
          case PHONE: {
            data[colObj.name] = generatePhoneNumber(rowCount);
            break;
          }
          case EMAIL:{
            data[colObj.name] = generateEmail(rowCount, colObj.isUnique);
            break;
          }
          default : {
            data[colObj.name] = ["Unknown DataDomain"]
            break;
          }
        }
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
