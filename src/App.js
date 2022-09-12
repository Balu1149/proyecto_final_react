// rafc
import React from "react";

import { NavigationBar } from "./components/NavigationBar";
import { Carousel_first } from "./components/Carousel_first";
import { PlaceHolder_1 } from "./components/PlaceHolder_1";
import { PlaceHolder_2 } from "./components/PlaceHolder_2";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const App = () => {
  return (
    <div>
      <NavigationBar />
      <Carousel_first />
      <PlaceHolder_1 />
      <PlaceHolder_2 />
    </div>
  );
};
