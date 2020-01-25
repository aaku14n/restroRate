import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  ScrollView,
  ActivityIndicator,
  Alert
} from "react-native";
import { AirbnbRating } from "react-native-ratings";
import styles from "./css/AddReviewFormStyle";
import editIcon from "../../assets/edit.png";
import defaultPic from "../../assets/defaultRestro.png";
import compass from "../../assets/compass.png";

class AddReviewForm extends React.Component {
  state = {
    photo: null,
    rating: 0,
    restroName: "",
    dishName: "",
    review: "",
    location: null
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
  // componentDidMount() {
  //   navigator.geolocation.getCurrentPosition(
  //     position => {
  //       const location = JSON.stringify(position);

  //       this.setState({ location });
  //     },
  //     error => Alert.alert(error.message),
  //     { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  //   );
  // }
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
            <TextInput
              style={styles.input}
              placeholder="Search restaurants"
              onChangeText={text => this.onChnageRestraurentName(text)}
              value={this.state.restroName}
            />
          </View>
          <View style={styles.compassIcon}>
            <Image source={compass} style={{ width: 20, height: 20 }} />
          </View>
          <View style={styles.restroName}>
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
            {/* {!photo && (
              <View style={styles.editIcon}>
                <Image source={editIcon} style={{ width: 20, height: 20 }} />
              </View>
            )} */}
          </View>
          <View style={styles.restroName}>
            <TextInput
              style={styles.input}
              placeholder="Dish Name"
              onChangeText={text => this.onChnageDishName(text)}
              value={this.state.dishName}
            />
          </View>

          <View style={styles.restroName}>
            <AirbnbRating
              count={5}
              defaultRating={0}
              size={50}
              showRating={false}
              onFinishRating={r => this.completeRate(r)}
            />
          </View>
          <View style={styles.restroName}>
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
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default AddReviewForm;
