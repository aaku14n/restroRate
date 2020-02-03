/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import configureStore from "./src/store/configureStore";
import AuthHomeWrapperContainer from "./src/containers/AuthHomeWrapperContainer";

import PushNotification from "./src/PushNotification";
const store = configureStore();

export default class ReduxCounterUniversal extends Component {
  render() {
    return (
      <Provider store={store}>
        <AuthHomeWrapperContainer />
        <PushNotification />
      </Provider>
    );
  }
}

AppRegistry.registerComponent(
  "ReduxCounterUniversal",
  () => ReduxCounterUniversal
);
