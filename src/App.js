import React from "react"
import PwdGenerator from "./components/PwdGenerator"
import OtpGenerator from "./components/OtpGenerator"
import './App.css';

function App() {
  return (
    <div className="App">
      <PwdGenerator/>
      <OtpGenerator/>
    </div>
  );
}

export default App;
