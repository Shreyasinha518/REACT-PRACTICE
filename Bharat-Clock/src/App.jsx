import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ClockHeading from "./components/clockHeading";
import ClockSlogan from "./components/ClockSlogan";
import CurrentTime from "./components/CurrentTime";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <center>
      <ClockHeading></ClockHeading>
      <ClockSlogan></ClockSlogan>
      <CurrentTime></CurrentTime>
    </center>
  );
}

export default App;
