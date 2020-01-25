import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  ScrollView,
  ActivityIndicator
} from "react-native";
import { AirbnbRating } from "react-native-ratings";
import styles from "./css/AddReviewFormStyle";
import editIcon from "../../assets/edit.png";
import defaultPic from "../../assets/defaultRestro.png";

class AddReviewForm extends React.Component {
  state = {
    photo: null,
    rating: 0,
    restroName: "",
    dishName: "",
    review: ""
  };
  completeRate(rating) {
    this.setState({
      rating
    });
  }

  onChnageRestraurentName = name => {
    this.setState({
      restroName: name
    });
  };
  onChnageDishName = dishName => {
    this.setState({
      dishName
    });
  };
  onChnageReview = review => {
    this.setState({
      review
    });
  };
  submitReview = () => {
    const reviewObj = {
      dishName: this.state.dishName,
      feedback: this.state.review,
      rate: this.state.rating,
      dishImage: "image-1579893195828.jpeg",
      restaurantData: this.state.restroName
    };
    const submitReviewResponse = this.props.submitReview(reviewObj);
  };
  uploadImage = () => {};
  render() {
    const { photo } = this.state;
    return (
      <ScrollView style={styles.base} showsVerticalScrollIndicator={false}>
        <View style={styles.heading}>
          <Text style={styles.review}>Add Review Form</Text>
        </View>
        <View style={styles.form}>
          <View style={styles.restroName}>
            <Text style={styles.title}>Restraurent Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Search restaurants"
              onChangeText={text => this.onChnageRestraurentName(text)}
              value={this.state.restroName}
            />
          </View>
          <View style={styles.restroName}>
            <Text style={styles.title}>Upload Image</Text>
            <View style={styles.imgBox}>
              <Image
                source={
                  photo && photo.uri
                    ? {
                        uri: photo.uri
                      }
                    : defaultPic
                }
                style={{ width: 150, height: 150 }}
              />
            </View>
            {!photo && (
              <View style={styles.editIcon}>
                <Image source={editIcon} style={{ width: 20, height: 20 }} />
              </View>
            )}
          </View>
          <View style={styles.restroName}>
            <Text style={styles.title}>Dish Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Dish Name"
              onChangeText={text => this.onChnageDishName(text)}
              value={this.state.dishName}
            />
          </View>

          <View style={styles.restroName}>
            <Text style={styles.title}>Rating</Text>
            <AirbnbRating
              count={5}
              defaultRating={0}
              size={30}
              showRating={false}
              onFinishRating={r => this.completeRate(r)}
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
              onChangeText={text => this.onChnageReview(text)}
              value={this.state.review}
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
      </ScrollView>
    );
  }
}

export default AddReviewForm;
