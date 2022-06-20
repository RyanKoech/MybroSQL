//React Imports
import React, { useCallback, useContext, useState, useRef } from "react";

//Components Imports
import ColumnCard from "./ColumnCard";

//App Context
import { AppContext } from "../context/AppContext";

const MainApp = React.memo(() => {

  const {colNamesList, enteredCol, setEnteredCol, addNewColName, setGeneralInfo, generateData, resetAppState} = useContext(AppContext);

  const tableNameInputRef = useRef();
  const rowCountInputRef = useRef();

  const handleOnClickReset = () => {
    tableNameInputRef.current.value = "";
    rowCountInputRef.current.value = "";
    resetAppState();
  }

  return (
    <div className="px-2 pt-3 md:pt-20">
      <h1 className="text-3xl sm:text-4xl font-semibold dark:text-slate-100 mb-3">
        Lets Get Started!
      </h1>
      <p className="mb-4 text-base text-gray-600 dark:text-gray-400">
        An application for you to generate realistic dummy data for that MySQL database serving your school project. Go ahead! 💪 And don't forget to report any 🐛.
      </p>
      <div className="mb-6">
        <label
          htmlFor="tableName"
          className="block mb-2 text-m font-semibold text-gray-900 dark:text-gray-300"
        >
          Table name
        </label>
        <input
          type="text"
          id="tableName"
          ref={tableNameInputRef}
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-3/12 min-w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Enter SQL table name"
          required
          onChange={(e) => {
            setGeneralInfo(prevObj => { 
              return {...prevObj, tableName: e.target.value}
            })}}
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="tableName"
          className="block mb-2 text-m font-semibold text-gray-900 dark:text-gray-300"
        >
          Number or Rows
        </label>
        <input
          type="number"
          step="1"
          min="1"
          max="100"
          id="tableName"
          ref={rowCountInputRef}
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-3/12 min-w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Enter number of rows needed"
          required
          onChange={(e) => {
            setGeneralInfo(prevObj => { 
              return {...prevObj, rowCount: e.target.value}
            })}}
        />
      </div>
      <div>
        <div className="flex flex-row justify-between items-center mb-3 sm:mb-5">
          <h2 className="block text-xl sm:text-2xl text-gray-800 font-semibold dark:text-slate-300">
            Table Columns
          </h2>
          <button
            type="button"
            className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={handleOnClickReset}
          >
            Reset
          </button>
        </div>
        {colNamesList.length > 0 ? (
          colNamesList.map((colName, index) => (
            <ColumnCard key={colName} colName={colName} colIndex={index}/>
          ))
        ) : (
          <div className="mx-auto text-center text-bold text-2xl text-slate-500 bg-slate-50 dark:bg-slate-800 p-2 rounded-lg mb-3">
            No Columns Entered
          </div>
        )}
        <div className="flex flex-col sm:flex-row-reverse items-end sm:justify-between pt-5">
          <div className="relative w-max mb-10 sm:mb-0">
            <input
              type="text"
              className="z-0 h-10 w-64 pr-36 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline-block p-2.5 ml-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Column Name"
              value={enteredCol}
              onChange={(e) => {
                setEnteredCol(e.target.value);
              }}
            />
            <div className="absolute top-0 right-0">
              <button
                className="h-10 w-32 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg rounded-l-none text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={addNewColName}
              >
                Add Column
              </button>
            </div>
          </div>
          <div className="w-full sm:w-max">
            <button
              type="button"
              className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mx-auto dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full sm:w-max"
              onClick={generateData}
            >
              Generate Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default MainApp;
