import React, { useState } from "react";

interface Props {
  num: number;
  onIncrease?: (number: number) => void;
  onDecrease?: (number: number) => void;
}

export const PropsExample = () => {
  const [num, setNum] = useState<number>(10);

  return (
    <div>
      <h2>Props 예제</h2>
      <div className="grid">
        <Left num={num} />
        <Right
          num={num}
          onIncrease={() => setNum(num + 1)}
          onDecrease={() => setNum(num - 1)}
        />
      </div>
    </div>
  );
};

function Left(props: Props) {
  console.log("left1 실행");
  return (
    <div>
      <h1>Left: {props.num}</h1>
      <Left1 num={props.num} />
    </div>
  );
}

function Left1(props: Props) {
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
      <h1>Left2:{props.num}</h1>
    </div>
  );
}

function Right(props: Props) {
  return (
    <div>
      <h1>Right</h1>
      <Right1
        num={props.num}
        onIncrease={props.onIncrease}
        onDecrease={props.onDecrease}
      />
    </div>
  );
}

function Right1(props: Props) {
  return (
    <div>
      <h1>Right1</h1>
      <Right2
        num={props.num}
        onIncrease={props.onIncrease}
        onDecrease={props.onDecrease}
      />
    </div>
  );
}

function Right2(props: Props) {
  const handleClickPlusButton = (num: number) => {
    if (props.onIncrease) {
      props.onIncrease(num);
    }
  };

  const handleClickMinusButton = (num: number) => {
    if (props.onDecrease) {
      props.onDecrease(num);
    }
  };

  return (
    <div>
      <h1>
        Right2 : 숫자올리기
        <button onClick={() => handleClickPlusButton(props.num)}>+</button>
        <button onClick={() => handleClickMinusButton(props.num)}>-</button>
      </h1>
    </div>
  );
}
