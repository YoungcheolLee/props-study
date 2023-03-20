import "./App.css";
import React, { useState } from "react";
import { PropsExample } from "./component/PropsExample";

function App() {
  const [num, setNum] = useState<number>(10);

  return (
    <div className="App">
      <div>
        <h1>Root</h1>
        <PropsExample />
      </div>
    </div>
  );
}
export default App;
