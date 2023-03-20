import "./App.css";
import React, { useState } from "react";

interface Props {
  num: number;
  onIncrease?: (number: number) => void;
}

function App() {
  const [num, setNum] = useState<number>(10);

  return (
    <div className="App">
      <div>
        <h1>Root: {num}</h1>
        <div className="grid">
          <Left1 num={num} />
          <Right1 num={num} onIncrease={(num) => setNum(num + 1)} />
        </div>
      </div>
    </div>
  );
}

function Left1(props: Props) {
  console.log("left1 실행");
  return (
    <div>
      <h1>Left1: {props.num}</h1>
      <Left2 num={props.num} />
    </div>
  );
}

function Left2(props: Props) {
  return (
    <div>
      <h1>Left2: {props.num}</h1>
      <Left3 num={props.num} />
    </div>
  );
}

function Left3(props: Props) {
  return (
    <div>
      <h1>Left3:{props.num}</h1>
    </div>
  );
}

function Right1(props: Props) {
  return (
    <div>
      <h1>Right</h1>
      <Right2 num={props.num} onIncrease={props.onIncrease} />
    </div>
  );
}

function Right2(props: Props) {
  return (
    <div>
      <h1>Right</h1>
      <Right3 num={props.num} onIncrease={props.onIncrease} />
    </div>
  );
}

function Right3(props: Props) {
  const handleClickPlusButton = (num: number) => {
    if (props.onIncrease) {
      props.onIncrease(num);
    }
  };

  return (
    <div>
      <h1>Right:{props.num}</h1>
      <button onClick={() => handleClickPlusButton(props.num)}>+</button>
    </div>
  );
}

export default App;
