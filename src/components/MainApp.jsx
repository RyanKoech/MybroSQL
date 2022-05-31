import React from "react";

//Components Imports
import ColumnCard from "./ColumnCard";

const MainApp = React.memo(() => {
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
          required
        />
      </div>
      <div>
        <h2 className="text-xl sm:text-2xl text-gray-800 font-semibold dark:text-slate-300 mb-3">
          Table Columns
        </h2>
        <ColumnCard />
        <div className="flex flex-row-reverse mt-5">
          <div className="relative">
            <input
              type="text"
              className="z-0 h-10 w-64 pr-36 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline-block p-2.5 ml-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Column Name"
            />
            <div className="absolute top-0 right-0">
              <button className="h-10 w-32 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Add Column
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default MainApp;
