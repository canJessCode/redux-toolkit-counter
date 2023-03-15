import "./App.css";

import { Counter } from "./features/counter/Counter";
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
      </header>
    </div>
  );
}

export default App;
