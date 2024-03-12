import React, { useState } from "react";
import "./App.css";

function Calculator() {
  const [display, setDisplay] = useState("");
  const [operand1, setOperand1] = useState("");
  const [operand2, setOperand2] = useState("");
  const [operator, setOperator] = useState("");

  const handleNumberClick = (number) => {
    if (operator === "") {
      setOperand1(operand1 + number);
      setDisplay(operand1 + number);
    } else {
      setOperand2(operand2 + number);
      setDisplay(operand2 + number);
    }
  };

  const handleOperatorClick = (op) => {
    setOperator(op);
  };
  const handleEqualsClick = () => {
    if (operand1 !== "" && operand2 !== "") {
      let result;
      if (operator === "+") {
        result = parseFloat(operand1) + parseFloat(operand2);
      } else if (operator === "-") {
        result = parseFloat(operand1) - parseFloat(operand2);
      } else if (operator === "*") {
        result = parseFloat(operand1) * parseFloat(operand2);
      } else if (operator === "/") {
        result = parseFloat(operand1) / parseFloat(operand2);
      } else {
        return;
      }
      setDisplay(result.toString());
      setOperand1(result.toString());
      setOperand2("");
      setOperator("");
    }
  };

  const handleClearClick = () => {
    setDisplay("");
    setOperand1("");
    setOperand2("");
    setOperator("");
  };

  return (
    <div className="main">
      <h1 className="my">My calculator</h1>
      <div className="calculator">
        <div className="display">{display}</div>
        <div className="buttons">
          <button onClick={() => handleNumberClick("7")}>7</button>
          <button onClick={() => handleNumberClick("8")}>8</button>
          <button onClick={() => handleNumberClick("9")}>9</button>
          <button className="operator" onClick={() => handleOperatorClick("+")}>
            {" "}
            +
          </button>
          <button onClick={() => handleNumberClick("4")}>4</button>
          <button onClick={() => handleNumberClick("5")}>5</button>
          <button onClick={() => handleNumberClick("6")}>6</button>
          <button className="operator" onClick={() => handleOperatorClick("-")}>
            {" "}
            -
          </button>
          <button onClick={() => handleNumberClick("1")}>1</button>
          <button onClick={() => handleNumberClick("2")}>2</button>
          <button onClick={() => handleNumberClick("3")}>3</button>
          <button className="operator" onClick={() => handleOperatorClick("*")}>
            {" "}
            *
          </button>
          <button onClick={() => handleNumberClick("0")}>0</button>
          <button className="clear" onClick={() => handleClearClick()}>
            {" "}
            C{" "}
          </button>
          <button className="equals" onClick={() => handleEqualsClick()}>
            {" "}
            =
          </button>
          <button className="operator" onClick={() => handleOperatorClick("/")}>
            {" "}
            /
          </button>
        </div>
      </div>
    </div>
  );
}
export default Calculator;
