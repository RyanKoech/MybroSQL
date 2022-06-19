//React Imports
import React , {useContext, useState} from "react";
//External Libraries Imports
import CopyToClipboard from "react-copy-to-clipboard";

//App Context Imports
import { AppContext } from "../context/AppContext";

const Result = () => {

  const {preparedQuery, setShowResults} = useContext(AppContext);

  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    setCopied(true);
  };

  return (
    <div className="px-2 pt-3 md:pt-20 h-max">
      <div className="mb-5 md:mb-8">
        <h2 className="text-3xl sm:text-4xl font-semibold dark:text-slate-100 mb-1 md:mb-2">
          Done!
        </h2>
        <p className="text-base sm:text-xl font-semibold text-gray-700 dark:text-gray-400">
          Looking to see you soon 😁🤝
        </p>
      </div>
      <div className="mx-auto">
        <div className="flex flex-row items-center mb-2">
          <label
            htmlFor="message"
            className="block mr-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            SQL Insert Query
          </label>
          <span
            className="block cursor-pointer"
            title="Copy the query below and paste it in your phpMyAdmin GUI"
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
        <pre 
          id="message"
          rows="4"
          className="block p-2.5 w-full h-[50vh] sm:h-[35vh] min-h-[200px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white overflow-x-auto whitespace-pre-wrap break-words"
          placeholder="Your message..."
        >{preparedQuery}</pre>
        <div className="flex flex-row justify-between mt-4">
          <CopyToClipboard
            onCopy={handleCopy}
            text={preparedQuery}
            className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 min-w-[149px]"
            type="button"
          >
            <button
              type="button"
            >
              {copied ? "Copied" : "Copy to clipboard"}
            </button>
          </CopyToClipboard>
          <button
            type="button"
            className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-[149px]"
            onClick={()=> {setShowResults(false)}}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
