import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TeslaClimate from "./components/TeslaClimate/TeslaClimate";
import TeslaCounter from "./components/TeslaCounter/TeslaCounter";
import TeslaWheels from "./components/TeslaWheels/TeslaWheels";
import TeslaBattery from "./containers/TeslaBattery";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TeslaBattery />
        <TeslaClimate />
        <TeslaCounter />
        <TeslaWheels />
      </div>
    );
  }
}

export default App;
