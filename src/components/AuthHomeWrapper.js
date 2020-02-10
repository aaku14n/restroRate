import React from "react";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  TouchableHighlight,
  StyleSheet,
  AppState
} from "react-native";
import SocialLoginContainer from "../containers/SocialLoginContainer";
import AuthContainer from "../containers/AuthContainer";
import { THEME_COLOR } from "../Constant";

function AuthHomeWrapper(props) {
  const [appState, setAppState] = useState(AppState.currentState);
  useEffect(() => {
    if (!props.loginDetails) {
      props.validateUserLogin();
    }
    if (!props.lat && !props.long) {
      props.getCurrentLocation();
    }
    AppState.addEventListener("change", handleChange);

    return () => {
      AppState.removeEventListener("change", handleChange);
    };
  });
  const retryLocation = () => {
    props.getCurrentLocation();
  };
  const handleChange = nextAppState => {
    if (appState.match(/inactive|background/) && nextAppState === "active") {
      props.getCurrentLocation();
    }
    setAppState(nextAppState);
  };

  if (props.loginDetails) {
    if (!props.lat && !props.long) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#c4c4c4" />
          <Text>Fetching Location</Text>
          <View style={styles.buttons}>
            <TouchableHighlight
              onPress={() => retryLocation()}
              style={styles.modalButton}
            >
              <Text style={styles.buttonTitle}>RETRY</Text>
            </TouchableHighlight>
          </View>
        </View>
      );
    } else {
      return <AuthContainer />;
    }
  }
  return <SocialLoginContainer />;
}

const styles = StyleSheet.create({
  loader: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  buttons: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 150
  },
  modalButton: {
    width: "80%",
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 5,
    backgroundColor: THEME_COLOR
  },
  buttonTitle: {
    color: "#ffffff",
    fontSize: 16,
    marginTop: 15
  }
});

export default AuthHomeWrapper;
