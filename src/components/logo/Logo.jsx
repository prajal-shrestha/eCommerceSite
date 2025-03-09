import React from "react";
import PinkBlue from "./PinkBlue.png";
import { useNavigate } from "react-router";
const Logo = () => {
  const navigate = useNavigate();
  return (
    <img
      src={PinkBlue}
      alt="Logo"
      className="h-16 w-16"
      onClick={() => {
        navigate("/");
      }}
      // style={{ width: "60px", height: "60px", marginLeft: "10px" }}
    />
  );
};

export default Logo;
