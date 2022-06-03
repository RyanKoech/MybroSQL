import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

//Components Imports
import Navbar from "./components/Navbar";
import MainApp from "./components/MainApp";
import AppContextProvider from "./context/AppContext";

function App() {

  return (
    <AppContextProvider>
      <div className="bg-white dark:bg-slate-900 pb-10">
        <div className="container min-h-screen mx-auto w-full md:pt-4">
          <Navbar/>
          <MainApp/>
        </div>
      </div>
    </AppContextProvider>
  );
}

export default App;
