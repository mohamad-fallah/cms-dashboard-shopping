import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes"; //routes path file

import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";

import "./App.css";

export default function App() {
  let route = useRoutes(routes);

  return (
    <>
      <Sidebar />
      <div className="main">
        <Header />
        {route}
      </div>
    </>
  );
}
