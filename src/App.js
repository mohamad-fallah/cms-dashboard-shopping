import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";

import './App.css'


function App() {
  return (
    <>
    <Sidebar/>
    <div className="main">
      <Header/>
      {/* {router} */}
    </div>
    </>
  );
}

export default App;
