import React from "react";

export const AppContext = React.createContext();

const AppContextProvider = ({children}) => {

  return (
    <AppContext value={{}}>
      {children}
    </AppContext>
  );
}
