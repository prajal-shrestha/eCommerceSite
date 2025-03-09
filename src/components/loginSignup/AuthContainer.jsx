import React, { useState } from "react";
import LogIn from "./LogIn";
import SignUp from "./SignUp";

const AuthContainer = () => {
  const [isLogin, setIsLogin] = useState(false);

  const switchToLogin = () => setIsLogin(true);
  const switchToSignup = () => setIsLogin(false);
  return (
    <>
      {isLogin ? (
        <LogIn onSwitchToSignup={switchToSignup} />
      ) : (
        <SignUp onSwitchToLogin={switchToLogin} />
      )}
    </>
  );
};

export default AuthContainer;
