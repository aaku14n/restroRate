import React from "react";
import { View } from "react-native";
import HomePage from "./HomePage";
import SocialLoginContainer from "../containers/SocialLoginContainer";

function HomePageWrapper(props) {
  return (
    <View>
      {props.loginDetails ? (
        <View>
          <HomePage />
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
