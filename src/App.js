import { Fragment } from "react";

import SingleItem from "./components/single-item/single-item.component";
import MultipleItem from "./components/multiple-item/multiple-item.component";
import AsyncMultipleItem from "./components/async-multiple-item/async-multiple-item.component";

import "./App.css";

function App() {
  return (
    <Fragment>
      <SingleItem /> 
      <MultipleItem/>
      <AsyncMultipleItem/>
    </Fragment>
  );
}

export default App;