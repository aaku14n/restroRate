import React from "react";
import { View } from "react-native";
import HomePage from "./HomePage";
import SocialLoginContainer from "../containers/SocialLoginContainer";
import AuthContainer from "../containers/AuthContainer";

function AuthHomeWrapper(props) {
  if (props.loginDetails) {
    return <AuthContainer />;
  }
  return <SocialLoginContainer />;
}

export default AuthHomeWrapper;
