import React from "react";
import male from "./male.png";
const MaleGender = ({ onSwitchToFemale }) => {
  return (
    <>
      <img src={male} alt="male-icon" onClick={onSwitchToFemale} />
    </>
  );
};

export default MaleGender;
