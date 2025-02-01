import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

let counter = 0;
let date = new Date();

function handleIncrease() {
  counter++;
  date.setDate(date.getDate() + 1);
  updateUI();
}

function handleDecrase() {
  counter--;
  date.setDate(date.getDate() - 1);
  updateUI();
}

function updateUI() {
  document.getElementById("counter").innerHTML = `Counter : ${counter}`;
  document.getElementById(
    "day"
  ).innerHTML = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} `;
}

function App() {
  return (
    <div>
      <h1 id="counter">{`Counter : ${counter}`}</h1>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrase}>-</button>
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
