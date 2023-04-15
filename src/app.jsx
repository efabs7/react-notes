import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./index.css";
import "./App.css";
import Grid from "./UIKit/Layouts/Grid/Grid";
import Center from "./UIKit/Layouts/Center/Center";
import Header from "./components/Header";
import Note from "./components/Note";
import Line from "./UIKit/Layouts/Line/Line";
import Button from "./UIKit/Elements/Button/Button";
import Rows from "./UIKit/Layouts/Rows/Rows";
import LinesTop from "./UIKit/Layouts/LinesTop/LinesTop";
import { render } from "@testing-library/react";

const App = () => {
  return (
    <div className="App">
      <Grid>
        <div>
          <Header title="Got Notes?" joke="Noted!"></Header>
        </div>
      </Grid>
    </div>
  );
};

export default App;
