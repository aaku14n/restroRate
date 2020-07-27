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

import { PushNotification } from "./src/PushNotification";
import * as SQLite from "expo-sqlite";
import { SEARCHED_TABLED_NAME } from "./src/Constant";
const store = configureStore();
const db = SQLite.openDatabase("db.db");

export default class ReduxCounterUniversal extends Component {
  componentDidMount() {
    db.transaction(tx => {
      tx.executeSql(
        `create table if not exists ${SEARCHED_TABLED_NAME} (id integer primary key not null, value text, date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP);`
      );
    });
  }
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
