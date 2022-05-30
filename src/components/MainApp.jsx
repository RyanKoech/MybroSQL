import React from "react";

const MainApp = React.memo(() => {
  return (
    <div className="px-2 pt-3 md:pt-20">
      <h1 className="text-3xl md:text-4xl font-semibold dark:text-slate-100 mb-3">
        Lets Get Started!
      </h1>
      <div class="mb-6">
        <label
          for="tableName"
          class="block mb-2 text-m font-semibold text-gray-900 dark:text-gray-300"
        >
          Table name
        </label>
        <input
          type="text"
          id="tableName"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-3/12 min-w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required
        />
      </div>
    </div>
  );
});

export default MainApp;
