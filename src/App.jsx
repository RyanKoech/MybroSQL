//React Imports
import React, { useContext } from "react";

//Style Imports
import "./App.css";

//Components Imports
import Navbar from "./components/Navbar";
import MainApp from "./components/MainApp";
import Result from "./components/Result";
import ScrollToTop from "./components/ScrollToTop";

//App Context
import { AppContext } from "./context/AppContext";

function App() {
  const { showResults } = useContext(AppContext);

  return (
    <div className="bg-white dark:bg-slate-900 pb-10">
      <div className="container min-h-screen mx-auto w-full md:pt-4">
          <Navbar/>
          {showResults
          ? (<Result/>) 
          : (
            <MainApp/>)}
        </div>
      <ScrollToTop />
    </div>
  );
}

export default App;
