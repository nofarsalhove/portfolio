import React from "react";

const TechIcon = ({ classes }) => {
  let clsName = `tech-icon devicon-${classes}`;
  return <i className={clsName}></i>;
};

export default TechIcon;
