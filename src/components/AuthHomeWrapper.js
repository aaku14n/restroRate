import React from "react";
import { View } from "react-native";
import HomePage from "./HomePage";
import SocialLoginContainer from "../containers/SocialLoginContainer";
import AuthContainer from "../containers/AuthContainer";

function HomePageWrapper(props) {
  return (
    <View>
      {props.loginDetails ? (
        <View>
          <AuthContainer />
        </View>
      ) : (
        <View>
          <SocialLoginContainer />
        </View>
      )}
    </View>
  );
}

export default HomePageWrapper;
