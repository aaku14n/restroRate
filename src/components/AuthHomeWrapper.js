import React from "react";
import { useEffect } from "react";
import SocialLoginContainer from "../containers/SocialLoginContainer";
import AuthContainer from "../containers/AuthContainer";

function AuthHomeWrapper(props) {
  useEffect(() => {
    if (!props.loginDetails) {
      props.validateUserLogin();
    }
  });
  if (props.loginDetails) {
    return <AuthContainer />;
  }
  return <SocialLoginContainer />;
}

export default AuthHomeWrapper;
