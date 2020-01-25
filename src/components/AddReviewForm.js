import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { Rating } from "react-native-ratings";
import styles from "./css/AddReviewFormStyle";

class AddReviewForm extends React.Component {
  state = {
    photo: null
  };
  completeRate(rating) {
    console.log(rating);
  }
  submitReview = () => {
    console.log("goog");
  };
  uploadImage = () => {};
  render() {
    const { photo } = this.state;
    return (
      <View style={styles.base}>
        <View style={styles.heading}>
          <Text style={styles.review}>Add Review Form</Text>
        </View>
        <View style={styles.form}>
          <View style={styles.restroName}>
            <Text style={styles.title}>Restraurent Name</Text>
            <TextInput style={styles.input} placeholder="Search restaurants" />
          </View>
          <View style={styles.restroName}>
            <Text style={styles.title}>Upload Image</Text>
            <View>
              {photo && (
                <Image
                  source={{ uri: photo.uri }}
                  style={{ width: 100, height: 100 }}
                />
              )}
              {!photo && (
                <Button
                  title="Choose Photo"
                  color="#000"
                  onPress={() => this.uploadImage()}
                />
              )}
            </View>
          </View>
          <View style={styles.restroName}>
            <Text style={styles.title}>Dish Name</Text>
            <TextInput style={styles.input} placeholder="Dish Name" />
          </View>

          <View style={styles.restroName}>
            <Text style={styles.title}>Rating</Text>
            <Rating
              onFinishRating={r => this.completeRate(r)}
              startingValue={0}
            />
          </View>
          <View style={styles.restroName}>
            <Text style={styles.title}>Review</Text>
            <TextInput
              textAlignVertical={"top"}
              style={styles.textArea}
              multiline
              numberOfLines={10}
              placeholder="Type review here"
            />
          </View>
          <View style={styles.button}>
            <Button
              onPress={() => this.submitReview()}
              title="SUBMIT REVIEW"
              color="#000"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
        </View>
      </View>
    );
  }
}

export default AddReviewForm;
