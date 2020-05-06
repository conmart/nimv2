import React from "react";
import Welcome from "./components/Welcome";
import { StateProvider } from "./state";
import { initialState } from "./state/initialState";
import { reducer } from "./state/reducer";

const App = () => (
  <StateProvider initialState={initialState} reducer={reducer}>
    <div className="App">
      <Welcome />
    </div>
  </StateProvider>
);

export default App;
