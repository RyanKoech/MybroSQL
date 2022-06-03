import React from "react";

export const AppContext = React.createContext();

const AppContextProvider = ({children}) => {

  return (
    <AppContext.Provider value={{}}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
