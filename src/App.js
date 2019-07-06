import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TeslaCar from "./components/TeslaCar/TeslaCar";
import TeslaClimate from "./components/TeslaClimate/TeslaClimate";
import TeslaCounter from "./components/TeslaCounter/TeslaCounter";
import TeslaNotice from "./components/TeslaNotice/TeslaNotice";
import TeslaWheels from "./components/TeslaWheels/TeslaWheels";
import TeslaBattery from "./containers/TeslaBattery";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TeslaBattery />
        <TeslaCar />
        <TeslaClimate />
        <TeslaCounter />
        <TeslaNotice />
        <TeslaWheels />
      </div>
    );
  }
}

export default App;
