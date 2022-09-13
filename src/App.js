// rafc
import React from "react";

import { NavigationBar } from "./components/NavigationBar";
import { Carousel_first } from "./components/Carousel_first";
import { PlaceHolder_1 } from "./components/PlaceHolder_1";
import { PlaceHolder_2 } from "./components/PlaceHolder_2";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Carousel_first />
              <PlaceHolder_1 />
            </>
          }
        />
        <Route
          path="/Productos"
          element={
            <>
              <PlaceHolder_1 />
              <PlaceHolder_2 />
            </>
          }
        />
      </Routes>
    </div>
  );
};
