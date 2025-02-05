import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "Advance",
    color: "#2552EA",
  },
  {
    skill: "JavaScript",
    level: "Advance",
    color: "#EFD18D",
  },
  {
    skill: "WebDesign",
    level: "Advance",
    color: "#C3DCAF",
  },
  {
    skill: "Git and Github",
    level: "Intermidiate",
    color: "#2552EA",
  },
  {
    skill: "React",
    level: "Advance",
    color: "#EFD18D",
  },
  {
    skill: "C++",
    level: "biginner",
    color: "#C3DCAF",
  },
];

function App() {
  return (
    <div className="card">
      <img src="/img/photo.jpg" alt="img" />
      <div className="intro">
        <h1>Ali Ahmadi</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
          porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
          purus lectus malesuada libero, sit amet commodo magna eros quis urna.
        </p>
      </div>

      <div className="Pskill">
        <div
          className="divskill"
          style={{ backgroundColor: `${skills[0].color}` }}
        >
          <span className="skill">{skills[0].skill}</span>
          <span className="skill">
            {skills[0].level === "biginner" && "👶🏻"}
            {skills[0].level === "Intermidiate" && "👍🏻"}
            {skills[0].level === "Advance" && "💪🏻"}
          </span>
        </div>
        <div
          className="divskill"
          style={{ backgroundColor: `${skills[1].color}` }}
        >
          <span className="skill">{skills[1].skill}</span>
          <span className="skill">
            {skills[1].level === "biginner" && "👶🏻"}
            {skills[1].level === "Intermidiate" && "👍🏻"}
            {skills[1].level === "Advance" && "💪🏻"}
          </span>
        </div>
        <div
          className="divskill"
          style={{ backgroundColor: `${skills[2].color}` }}
        >
          <span className="skill">{skills[2].skill}</span>
          <span className="skill">
            {skills[2].level === "biginner" && "👶🏻"}
            {skills[2].level === "Intermidiate" && "👍🏻"}
            {skills[2].level === "Advance" && "💪🏻"}
          </span>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
