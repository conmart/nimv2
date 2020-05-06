import React from "react";
import Welcome from "./components/Welcome";
import { StateProvider } from "./state";
import { initialState } from "./state/initialState";
import { reducer } from "./state/reducer";

import "./App.css";

function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div className="App">
        <Welcome />
      </div>
    </StateProvider>
  );
}

export default App;
