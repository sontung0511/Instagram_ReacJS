import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./User/Login/Login";
import "./index.css";
import axios from "axios";
import Home from "./Pages/HomePage/Home";
import DefaultLayout from "./components/Layout/DefaultLayout";
import Search from "./Pages/HomePage/Search";
import Register from "./User/Register/Register";
axios.defaults.baseURL = "http://localhost:6868";
export const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/HomePage" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/Search"
            element={
              <DefaultLayout>
                <Search />
              </DefaultLayout>
            }
          />
          <Route path="/about" />
        </Routes>
      </Router>
    </div>
  );
};
