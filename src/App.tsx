import React from "react";
import logo from "./logo.svg";
import "./styles/app.scss";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { MainPage } from "./Components/Page/MainPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
