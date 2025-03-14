import React from "react";
import female from "./female.png";
const FemaleGender = ({ onSwitchToMale }) => {
  return (
    <>
      <img src={female} onClick={onSwitchToMale} />
    </>
  );
};

export default FemaleGender;
