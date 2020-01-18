import React, { Component } from "react";
import { Text, View, TouchableHighlight } from "react-native";
import styles from "../components/CounterStyle";
import PropTypes from "prop-types";

function Counter(props) {
  return (
    <View style={styles.container}>
      <View style={styles.displayPanel}>
        <Text style={styles.numberBlock}>{props.counter}</Text>
        <Text style={styles.unitBlock}>/times</Text>
      </View>
      <View style={[styles.controlPanel, styles.inline]}>
        <TouchableHighlight
          onPress={props.increment}
          style={styles.buttonAddSmall}
        >
          <Text style={[styles.text, styles.textColorAdd]}>+</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={props.decrement}
          style={styles.buttonMinusSmall}
        >
          <Text style={[styles.text, styles.textColorMinus]}>-</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.controlPanel}>
        <TouchableHighlight
          onPress={props.incrementIfOdd}
          style={styles.buttonAdd}
        >
          <Text style={[styles.text, styles.textColorAdd]}>
            Increment if odd
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => props.incrementAsync()}
          style={styles.buttonAdd}
        >
          <Text style={[styles.text, styles.textColorAdd]}>
            Increment async
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => props.decrementAsync()}
          style={styles.buttonMinus}
        >
          <Text style={[styles.text, styles.textColorMinus]}>
            Decrement async
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
};

export default Counter;
