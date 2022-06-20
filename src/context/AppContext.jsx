//React Imports
import React, {useState, useCallback} from "react";
//Generators Imports
import addressGenerator from "../generators/address/address-generator";
import customDataGenerator from "../generators/custom-data/custom-data-generator";
import dateTimeGenerator from "../generators/date-time/date-time-generator";
import entityGenerator from "../generators/entity/entity-generator";
import internetGenerator from "../generators/internet/internet-generators";
import personGenerator from "../generators/person/person-generator";
import phoneGenerator from "../generators/phone/phone-generator";
import randomGenerator from "../generators/random/random-generator";


//Object Imports
import ColumnObject from "../model/ColumnObject";

//Constants Imports
import {
  NAME,
  WORD,
  LETTER,
  SENTENCE,
  PARAGRAPHS,
  GENDER,
  COMPANY,
  CITY,
  COUNTRY,
  STATE, 
  RANDOM_NUMBER, 
  PHONE,
  ADDRESS,
  EMAIL,
  URL,
  POSTAL_CODE,      
  DATE,
  TIME,
  DATE_TIME,
  YEAR,
  TIMESTAMP
 } from "../model/Constants";

export const AppContext = React.createContext();

const AppContextProvider = ({children}) => {
  const [enteredCol, setEnteredCol] = useState("");
  const [colNamesList, setColNamesList] = useState([]);
  const [colObjList, setColObjList] = useState([]);
  const [generalInfo, setGeneralInfo] = useState({});
  const [preparedQuery , setPreparedQuery] = useState("No Prepared Query Yet");
  const [showResults, setShowResults ] = useState(false);

  const resetAppState = () => {
    setEnteredCol("");
    setColNamesList((prevList) => []);
    setColObjList((prevList) => []);
    setGeneralInfo((prevObj) => {return {}});
    setPreparedQuery("No Prepared Query Yet");
    setShowResults(false);
  }

  //Keeps track of columns added in the UI
  const addNewColName = useCallback(
    (e) => {
      e.preventDefault();

      if (!enteredCol.trim().length || colNamesList.includes(enteredCol))
        return;

      setColNamesList((prevColList) => [...prevColList, enteredCol]);
      setColObjList((prevColObjList) => [...prevColObjList, ColumnObject(enteredCol, false, false, 0, "TEXT", "NAME", "")])

      setEnteredCol('');
    },
    [colNamesList, enteredCol]
  );

  const removeCol = (colName) => {
     setColNamesList(prevColList => prevColList.filter((prevColName) => {
      return prevColName != colName;
     }));
     setColObjList(prevColObjList => prevColObjList.filter(preColObj => {
      return preColObj.name != colName;
     }));
  }

  //Keeps track of details of columns add to the UI
  const updateColObjList = (newObj) => {

    setColObjList( prevColObjList => {

        const newColObjList = prevColObjList.map(obj => {

          if(obj.name === newObj.name){
            return {...obj, ...newObj};
          } 

          return obj;
        });
        
        return newColObjList;
    });
  };

  const prepareQuery = (rowCount, data) => {


    let insertQuery  = `INSERT INTO \`${generalInfo.tableName}\` (`;

    colNamesList.forEach((colName, index) => {
      let colString = (index == 0)? `\`${colName}\`` : `, \`${colName}\``;
  
      insertQuery = insertQuery.concat(colString);
    });
  
    insertQuery = insertQuery.concat(") VALUES ");
  
    
    for (let i = 0; i < rowCount; i++){
      let currentRowDataQuery = (i == 0) ? " (" : ", (";

      colNamesList.forEach((colName, index) => {
        const colData = data[colName][i];
        const colDataQuery = (index == 0)? `'${colData}'` : `, '${colData}'`;

        currentRowDataQuery = currentRowDataQuery.concat(colDataQuery);
      });

      currentRowDataQuery = currentRowDataQuery.concat(" )");
      insertQuery = insertQuery.concat(currentRowDataQuery);
    }
    
    insertQuery = insertQuery.concat(";");
  
    setPreparedQuery(insertQuery);
    setShowResults(true);
  }

  //Called to begin the process of data generation
  const generateData = () => {

    if (!colObjList.length) return;

    const data = {}
    const rowCount = (generalInfo.rowCount < 1 || generalInfo.rowCount > 750 || typeof(generalInfo.rowCount) == "undefined" || generalInfo.rowCount == null) ? 10 : generalInfo.rowCount;

    colObjList.forEach((colObj) => {

      if(colObj.customData.trim().length > 0){ //Use the data provided for generating foreign key field data
        const dirtyArray = colObj.customData.split(',');
        const cleanArray = dirtyArray.map((dirtyString) => dirtyString.trim())
        
        data[colObj.name] = customDataGenerator.customData(cleanArray, rowCount, colObj.isUnique)
      }else {
        switch(colObj.dataDomain){
          case NAME: {
            data[colObj.name] = personGenerator.name(rowCount, colObj.isUnique);
            break;
          }
          case WORD: {
            data[colObj.name] = randomGenerator.word(rowCount, colObj.isUnique);
            break;
          }
          case LETTER: {
            data[colObj.name] = randomGenerator.letter(rowCount, colObj.isUnique);
            break;
          }
          case SENTENCE: {
            data[colObj.name] = randomGenerator.sentence(rowCount, colObj.isUnique);
            break;
          }
          case PARAGRAPHS: {
            data[colObj.name] = randomGenerator.paragraphs(rowCount, colObj.isUnique);
            break;
          }
          case GENDER: {
            data[colObj.name] = randomGenerator.gender(rowCount);
            break;
          }
          case COMPANY: {
            data[colObj.name] = entityGenerator.company(rowCount, colObj.isUnique);
            break;
          }
          case CITY: {
            data[colObj.name] = addressGenerator.city(rowCount, colObj.isUnique);
            break;
          }
          case COUNTRY: {
            data[colObj.name] = addressGenerator.country(rowCount, colObj.isUnique);
            break;
          }
          case STATE: {
            data[colObj.name] = addressGenerator.state(rowCount, colObj.isUnique);
            break;
          }
          case RANDOM_NUMBER: {
            data[colObj.name] = randomGenerator.number(rowCount, parseInt(colObj.size), colObj.isUnique);
            break;
          }
          case PHONE: {
            data[colObj.name] = phoneGenerator.phone(rowCount);
            break;
          }
          case ADDRESS:{
            data[colObj.name] = addressGenerator.address(rowCount, colObj.isUnique);
            break;
          }
          case EMAIL:{
            data[colObj.name] = internetGenerator.email(rowCount, colObj.isUnique);
            break;
          }
          case URL: {
            data[colObj.name] = internetGenerator.url(rowCount, colObj.isUnique);
            break;
          }
          case POSTAL_CODE: {
            data[colObj.name] = addressGenerator.postalCode(rowCount, colObj.isUnique);
            break;
          }
          case DATE: {
            data[colObj.name] = dateTimeGenerator.date(rowCount);
            break;
          }
          case TIME: {
            data[colObj.name] = dateTimeGenerator.time(rowCount);
            break;
          }
          case DATE_TIME: {
            data[colObj.name] = dateTimeGenerator.dateTime(rowCount);
            break;
          }
          case YEAR: {
            data[colObj.name] = dateTimeGenerator.year(rowCount);
            break;
          }
          case TIMESTAMP: {
            data[colObj.name] = dateTimeGenerator.timestamp(rowCount);
            break;
          }
          default : {
            data[colObj.name] = ["Unknown DataDomain"]
            break;
          }
        }
      }
    })
    prepareQuery(rowCount, data);
  }


  return (
    <AppContext.Provider value={{colNamesList, enteredCol, setEnteredCol, addNewColName, removeCol, updateColObjList, colObjList,setGeneralInfo, generateData, preparedQuery, showResults, setShowResults, resetAppState}}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
