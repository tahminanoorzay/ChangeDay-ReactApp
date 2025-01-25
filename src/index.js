import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div>
      <img
        src="/first-react-app/src/img/WhatsApp Image 2024-11-19 at 08.41.17_81a82593.jpg"
        alt=""
      />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
