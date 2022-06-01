import React from "react";

const ColumnCard = React.memo(() => {
  return (
    <div className="block p-6 min-w-fit bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h3 className="inline font-semibold text-lg sm:text-xl text-gray-800 dark:text-slate-300 mb-3">
        Column Details
      </h3>
      <span className="text-base sm:text-lg text-gray-800 dark:text-slate-300">
        &nbsp;:&nbsp;Column Name
      </span>
      <div className="flex flex-col sm:flex-row sm:items-end my-4 max-w-[800px]">
        {/* FOREIGN KEY TOGGLE*/}
        <div className="w-full">
          <label
            htmlFor="foreignKey"
            className="relative inline-flex items-center mb-4 sm:mb-0 cursor-pointer"
          >
            <input
              type="checkbox"
              value=""
              id="foreignKey"
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Foreign Key
            </span>
          </label>
        </div>
        {/* UNIQUE KEY TOGGLE */}
        <div className="w-full">
          <label
            htmlFor="uniqueKey"
            className="relative inline-flex items-center mb-4 sm:mb-0 cursor-pointer"
          >
            <input
              type="checkbox"
              value=""
              id="uniqueKey"
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Unique
            </span>
          </label>
        </div>
        {/* SIZE INPUT  */}
        <div className="w-full">
          <label
            htmlFor="size"
            className="inline-block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Size
          </label>
          <input
            type="number"
            id="size"
            step="1"
            min="0"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline-block w-9/12 p-2.5 ml-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
      </div>
      <h3 className="inline font-semibold text-lg sm:text-xl text-gray-800 dark:text-slate-300 mb-3">
        Date Details
      </h3>
      <div className="flex flex-col sm:flex-row sm:items-end pt-3">
        <div className="mb-4 sm:mb-0 sm:mr-10">
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Select an option
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-8 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option defaultValue="">Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Select an option
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-8 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option defaultValue="">Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
      </div>
    </div>
  );
});

export default ColumnCard;
