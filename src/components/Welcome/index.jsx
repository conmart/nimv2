import React from "react";
import Button from "./WelcomeButton"

const Welcome = () => (
  <div>
    <h2>Welcome to Nim</h2>
    <h5>A Mathematical Game of Strategy</h5>
    <div>
      <Button text="New Game" />
      <Button text="Instructions" />
    </div>
  </div>
);

export default Welcome;
