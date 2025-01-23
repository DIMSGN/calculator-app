import { useState } from "react";

const useCalculatorLogic = () => {
  const [display, setDisplay] = useState("0");
  const [operator, setOperator] = useState(null);
  const [firstOperand, setFirstOperand] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);
  const [mode, setMode] = useState("standard");

  const inputDigit = (digit) => {
    if (waitingForSecondOperand) {
      setDisplay(digit);
      setWaitingForSecondOperand(false);
    } else {
      setDisplay(display === "0" ? digit : display + digit);
    }
  };

  const inputDot = () => {
    if (waitingForSecondOperand) {
      setDisplay("0.");
      setWaitingForSecondOperand(false);
    } else if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const clearDisplay = () => {
    setDisplay("0");
    setOperator(null);
    setFirstOperand(null);
    setWaitingForSecondOperand(false);
  };

  const performOperation = (nextOperator) => {
    const inputValue = parseFloat(display);

    if (firstOperand == null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = calculate(firstOperand, inputValue, operator);
      setDisplay(String(result));
      setFirstOperand(result);
    }

    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
  };

  const calculate = (firstOperand, secondOperand, operator) => {
    switch (operator) {
      case "+":
        return firstOperand + secondOperand;
      case "-":
        return firstOperand - secondOperand;
      case "*":
        return firstOperand * secondOperand;
      case "/":
        return firstOperand / secondOperand;
      default:
        return secondOperand;
    }
  };

  const setCalculatorMode = (newMode) => {
    setMode(newMode);
    clearDisplay();
  };

  const performScientificOperation = (operation) => {
    const inputValue = parseFloat(display);
    let result;

    switch (operation) {
      case "sin":
        result = Math.sin(inputValue);
        break;
      case "cos":
        result = Math.cos(inputValue);
        break;
      case "tan":
        result = Math.tan(inputValue);
        break;
      case "log":
        result = Math.log10(inputValue);
        break;
      case "ln":
        result = Math.log(inputValue);
        break;
      case "exp":
        result = Math.exp(inputValue);
        break;
      case "sqrt":
        result = Math.sqrt(inputValue);
        break;
      case "pow":
        result = Math.pow(firstOperand, inputValue);
        break;
      default:
        result = inputValue;
    }

    setDisplay(String(result));
    setFirstOperand(result);
    setWaitingForSecondOperand(true);
  };

  return {
    display,
    inputDigit,
    inputDot,
    clearDisplay,
    performOperation,
    setCalculatorMode,
    performScientificOperation,
    mode,
  };
};

export default useCalculatorLogic;