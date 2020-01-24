import React from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./css/AddReviewFormStyle";

class AddReviewForm extends React.Component {
  render() {
    return (
      <View style={styles.base}>
        <View style={styles.heading}>
          <Text style={styles.review}>Add Review Form</Text>
        </View>
        <View style={styles.form}>
          <View style={styles.restroName}>
            <Text style={styles.title}>Restraurent Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Search restaurants"
              placeholderTextColor="black"
            />
          </View>
          <View style={styles.restroName}>
            <Text style={styles.title}>Dish Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Dish Name"
              placeholderTextColor="black"
            />
          </View>
          <View style={styles.restroName}>
            <Text style={styles.title}>Rating</Text>
            <TextInput
              style={styles.input}
              placeholder="Dish Name"
              placeholderTextColor="black"
            />
          </View>
          <View style={styles.restroName}>
            <Text style={styles.title}>Review</Text>
            <TextInput
              style={styles.input}
              placeholder="Dish Name"
              placeholderTextColor="black"
            />
          </View>
        </View>
      </View>
    );
  }
}

export default AddReviewForm;
