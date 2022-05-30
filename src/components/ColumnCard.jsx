import React from "react";

const ColumnCard = React.memo(() => {
  return(
    <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h3 className="text-lg sm:text-xl text-gray-800 font-semibold dark:text-slate-300 mb-3">Column Details</h3>
      <div>
        
      </div>
    </div>
  );
});

export default ColumnCard;