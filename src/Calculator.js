import React from "react";
import "./Calculator.css";
import useCalculatorLogic from "./CalculatorLogic";

const Calculator = () => {
  const {
    display,
    inputDigit,
    inputDot,
    clearDisplay,
    performOperation,
    setCalculatorMode,
    performScientificOperation,
    mode,
  } = useCalculatorLogic();

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <button onClick={() => inputDigit("7")}>7</button>
        <button onClick={() => inputDigit("8")}>8</button>
        <button onClick={() => inputDigit("9")}>9</button>
        <button onClick={() => performOperation("/")}>/</button>
        <button onClick={() => inputDigit("4")}>4</button>
        <button onClick={() => inputDigit("5")}>5</button>
        <button onClick={() => inputDigit("6")}>6</button>
        <button onClick={() => performOperation("*")}>*</button>
        <button onClick={() => inputDigit("1")}>1</button>
        <button onClick={() => inputDigit("2")}>2</button>
        <button onClick={() => inputDigit("3")}>3</button>
        <button onClick={() => performOperation("-")}>-</button>
        <button onClick={() => inputDigit("0")}>0</button>
        <button onClick={inputDot}>.</button>
        <button onClick={() => performOperation("=")}>=</button>
        <button onClick={() => performOperation("+")}>+</button>
        <button onClick={clearDisplay}>C</button>
        <button className="mode" onClick={() => setCalculatorMode("standard")}>Standard</button>
        <button className="mode" onClick={() => setCalculatorMode("scientific")}>Scientific</button>
        {mode === "scientific" && (
          <>
            <button onClick={() => performScientificOperation("sin")}>sin</button>
            <button onClick={() => performScientificOperation("cos")}>cos</button>
            <button onClick={() => performScientificOperation("tan")}>tan</button>
            <button onClick={() => performScientificOperation("log")}>log</button>
            <button onClick={() => performScientificOperation("ln")}>ln</button>
            <button onClick={() => performScientificOperation("exp")}>exp</button>
            <button onClick={() => performScientificOperation("sqrt")}>sqrt</button>
            <button onClick={() => performScientificOperation("pow")}>pow</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Calculator;
