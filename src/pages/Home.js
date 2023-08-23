import React from "react";
import "./Home.css";

const skills = [
  {
    skill_name: "Angular",
    confidance: 4,
    duration: 8,
    logo: {
      path: "logo/angular.png",
      alt: "Angular",
    },
  },
  {
    skill_name: "React",
    confidance: 3,
    duration: 3,
    logo: {
      path: "logo/react.png",
      alt: "React",
    },
  },
  {
    skill_name: "Javascript",
    confidance: 4,
    duration: 8,
    logo: {
      path: "logo/js.png",
      alt: "Javascript",
    },
  },
  {
    skill_name: "CSS",
    confidance: 3,
    duration: 8,
    logo: {
      path: "logo/css.png",
      alt: "CSS",
    },
  },
  {
    skill_name: "HTML",
    confidance: 3,
    duration: 8,
    logo: {
      path: "logo/html.png",
      alt: "HTML",
    },
  },
  {
    skill_name: "Git",
    confidance: 3,
    duration: 6,
    logo: {
      path: "logo/git.png",
      alt: "Git",
    },
  },
];

const Home = () => {
  return (
    <>
      <div className="skills-container">
        <div className="skills-content">
          <div className="skills">
            {skills.map((skill) => (
              <div className="skill">
                <div>
                  <img src={skill.logo?.path} alt={skill.logo?.alt} />
                </div>
                <div>{skill.skill_name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="experience_container"></div>
    </>
  );
};

export default Home;
