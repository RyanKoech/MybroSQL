//React Imports
import React, { useContext, useState, useEffect } from "react";

//Component Imports
import { AppContext } from "../context/AppContext";

//Object Imports
import ColumnObject from "../model/ColumnObject";

//Constants Imports
import { DATA_TYPE, DATA_DOMAINS } from "../model/Constants";

const ColumnCard = React.memo(({ colName }) => {
  const { updateColObjList } = useContext(AppContext);

  //Information for Generating Column Data
  const [isForeignKey, setIsForeignKey] = useState(false);
  const [isUnique, setIsUnique] = useState(false);
  const [size, setSize] = useState(0);
  const [datatype, setDatatype] = useState(DATA_TYPE.TEXT);
  const [dataDomain, setDataDomain] = useState(DATA_DOMAINS[DATA_TYPE.TEXT][0]);
  const [customData, setCustomData] = useState("");

  //Loops through DATA_TYPE constant to create options elements list for a select input
  const getDataTypeOptions = () => {
    let optionsList = [];

    for (const data_type in DATA_TYPE) {
      const option = (
        <option key={DATA_TYPE[data_type]} value={DATA_TYPE[data_type]}>
          {DATA_TYPE[data_type]}
        </option>
      );
      optionsList.push(option);
    }

    return optionsList;
  };

  //Loops through DATA_DOMAIN[<data_type>] constant to create options elements list for a select input
  const getDataDomainOptions = () => {
    let optionsList = [];

    DATA_DOMAINS[datatype].forEach((dataDomain) => {
      const option = (
        <option key={dataDomain} value={dataDomain}>
          {dataDomain}
        </option>
      );
      optionsList.push(option);
    });

    return optionsList;
  };

  return (
    <div className="block p-6 min-w-fit bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mb-5 sm:mb-7">
      <div className="flex flex-row items-end justify-between">
        <div>
          <h3 className="inline font-semibold text-lg sm:text-xl text-gray-800 dark:text-slate-300 mb-3">
            Column Details
          </h3>
          <span className="text-base sm:text-lg text-gray-800 dark:text-slate-300">
            &nbsp;:&nbsp;{colName}
          </span>
        </div>
        <button className="block p-1 text-gray-500 sm:text-gray-300 dark:text-slate-400 sm:dark:text-slate-600 hover:text-gray-600 dark:hover:text-slate-300">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </button>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-end my-4 max-w-[800px]">
        {/* FOREIGN KEY TOGGLE*/}
        <div className="w-full">
          <label
            htmlFor={colName + "_foreignKey"}
            className="relative inline-flex items-center mb-4 sm:mb-0 cursor-pointer"
          >
            <input
              type="checkbox"
              value=""
              id={colName + "_foreignKey"}
              className="sr-only peer"
              onClick={(e) => {
                const _isForeignKey = e.target.checked;
                updateColObjList(
                  ColumnObject(
                    colName,
                    _isForeignKey,
                    isUnique,
                    size,
                    datatype,
                    dataDomain,
                    customData
                  )
                );
                setIsForeignKey(_isForeignKey);
              }}
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
            htmlFor={colName + "_uniqueKey"}
            className="relative inline-flex items-center mb-4 sm:mb-0 cursor-pointer"
          >
            <input
              type="checkbox"
              value=""
              id={colName + "_uniqueKey"}
              className="sr-only peer"
              onClick={(e) => {
                const _isUnique = e.target.checked;
                updateColObjList(
                  ColumnObject(
                    colName,
                    isForeignKey,
                    _isUnique,
                    size,
                    datatype,
                    dataDomain,
                    customData
                  )
                );
                setIsUnique(_isUnique);
              }}
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
            onChange={(e) => {
              const _size = e.target.value;
              updateColObjList(
                ColumnObject(
                  colName,
                  isForeignKey,
                  isUnique,
                  _size,
                  datatype,
                  dataDomain,
                  customData
                )
              );
              setSize(_size);
            }}
          />
        </div>
      </div>
      <h3 className="inline font-semibold text-lg sm:text-xl text-gray-800 dark:text-slate-300 mb-3">
        Date Details
      </h3>
      {!isForeignKey ? (
        <div className="flex flex-col sm:flex-row sm:items-end pt-3 mb-5">
          <div className="mb-4 sm:mb-0 sm:mr-10">
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Datatype
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-8 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => {
                const _datatype = e.target.value;
                //Update data domain since change in datatype implies change in data domain
                const _dataDomain = DATA_DOMAINS[_datatype][0];
                updateColObjList(
                  ColumnObject(
                    colName,
                    isForeignKey,
                    isUnique,
                    size,
                    _datatype,
                    _dataDomain,
                    customData
                  )
                );
                setDataDomain(_dataDomain);
                setDatatype(_datatype);
              }}
            >
              <option defaultValue="">Choose a datatype</option>
              {getDataTypeOptions()}
            </select>
          </div>
          <div>
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Data Domain
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-8 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => {
                const _dataDomain = e.target.value;
                updateColObjList(
                  ColumnObject(
                    colName,
                    isForeignKey,
                    isUnique,
                    size,
                    datatype,
                    _dataDomain,
                    customData
                  )
                );
                setDataDomain(_dataDomain);
              }}
            >
              {getDataDomainOptions()}
            </select>
          </div>
        </div>
      ) : (
        <div className="mt-3">
          <div className="mb-2 flex flex-row items-end">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-900 dark:text-gray-400 mr-2"
            >
              Custom Data
            </label>
            <span
              className="block"
              title="Enter comma ( , ) separated data to be used for your foreign keys or custom data. NOTE: Datatype and Data domain will be ignored if set"
            >
              <svg
                className="w-4 h-4 text-gray-600 dark:text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </span>
          </div>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your custom data..."
            onChange={(e) => {
              const _customData = e.target.value;
              updateColObjList(
                ColumnObject(
                  colName,
                  isForeignKey,
                  isUnique,
                  size,
                  datatype,
                  dataDomain,
                  _customData
                )
              );
              setCustomData(_customData);
            }}
          ></textarea>
        </div>
      )}
    </div>
  );
});

export default ColumnCard;
