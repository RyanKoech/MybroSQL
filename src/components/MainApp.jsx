import React, { useCallback, useContext, useState } from "react";

//Components Imports
import ColumnCard from "./ColumnCard";

//App Context
import { AppContext } from "../context/AppContext";

const MainApp = React.memo(() => {

  const {colNamesList, enteredCol, setEnteredCol, addNewColName} = useContext(AppContext);

  return (
    <div className="px-2 pt-3 md:pt-20">
      <h1 className="text-3xl sm:text-4xl font-semibold dark:text-slate-100 mb-3">
        Lets Get Started!
      </h1>
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
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-3/12 min-w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Enter SQL table name"
          required
        />
      </div>
      <div>
        <h2 className="text-xl sm:text-2xl text-gray-800 font-semibold dark:text-slate-300 mb-3 sm:mb-5">
          Table Columns
        </h2>
        {colNamesList.length > 0 ? (
          colNamesList.map((colName) => (
            <ColumnCard key={colName} colName={colName} />
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
