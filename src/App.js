// rafc
import React from "react";

import { NavigationBar } from "./components/NavigationBar";
import { Carousel_first } from "./components/Carousel_first";
import { PlaceHolder_1 } from "./components/PlaceHolder_1";
import { PlaceHolder_2 } from "./components/PlaceHolder_2";
import { Footer } from "./components/Footer";
import { Store } from "./components/Store";
import { ShoppingCartProvider } from "./context/ShoppingCartContext.tsx";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <div style={{ backgroundColor: "#212121" }}>
      <ShoppingCartProvider>
        <NavigationBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Carousel_first />
                <h3 className="d-block p-2 text-light" style={{marginTop:"100px", textAlign:"center", background: "#212121"}}> Nuevos productos</h3>
                <PlaceHolder_1 />
              </>
            }
          />
          <Route
            path="/Productos"
            element={
              <>
                {/* <PlaceHolder_1 />
              <PlaceHolder_2 /> */}
                <Store />
              </>
            }
          />
        </Routes>
        <Footer />
      </ShoppingCartProvider>
    </div>
  );
};
