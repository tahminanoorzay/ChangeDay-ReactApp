import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  const [date, setDate] = useState(new Date());
  const [inputValue, setInputValue] = useState(1);

  const handleIncrease = () => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + inputValue);
    setDate(newDate);
  };

  const handleDecrease = () => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() - inputValue);
    setDate(newDate);
  };

  return (
    <div>
      <h1>
        Counter -
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(Number(e.target.value))}
        />
      </h1>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
      <div id="day">{`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} AM`}</div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
