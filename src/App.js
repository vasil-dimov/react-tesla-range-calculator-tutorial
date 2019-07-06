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
      <div>
        <h2>Let's get started</h2>
        <TeslaBattery></TeslaBattery>
        <Header></Header>
        <TeslaCar></TeslaCar>
        <TeslaClimate></TeslaClimate>
        <TeslaCounter></TeslaCounter>
        <TeslaNotice></TeslaNotice>
        <TeslaWheels></TeslaWheels>
      </div>
    );
  }
}

export default App;
