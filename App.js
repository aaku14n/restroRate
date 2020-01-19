/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import configureStore from "./src/store/configureStore";
import AuthContainer from "./src/containers/AuthContainer";

const store = configureStore();

export default class ReduxCounterUniversal extends Component {
  render() {
    return (
      <Provider store={store}>
        <AuthContainer />
      </Provider>
    );
  }
}

AppRegistry.registerComponent(
  "ReduxCounterUniversal",
  () => ReduxCounterUniversal
);
