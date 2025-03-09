import React from "react";
import user from "./user.png";
import AuthContainer from "./AuthContainer";
const LoginSignup = () => {
  return (
    <img
      src={user}
      alt="user"
      style={{ width: "70px", height: "70px", marginLeft: "10px" }}
    //   onClick={() => <AuthContainer />}
    />
  );
};
export default LoginSignup;
