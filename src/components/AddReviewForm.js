import React from "react";
import {
  View,
  Text,
  TextInput,
  ToastAndroid,
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
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { getRestaurant } from "../actions/Action";

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
  accessRestaurantDetails = async loc => {
    const detailsRes = await this.props.getRestaurant(loc);

    if (detailsRes[0]) {
      this.setState({ restaurantDetails: [detailsRes[0]] });
      this.onChnageRestraurentName(detailsRes[0].name);
    }
  };
  onAccessCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const location = JSON.stringify(position);
        const latitude =
          JSON.parse(location) &&
          JSON.parse(location).coords &&
          JSON.parse(location).coords.latitude;
        const longitude =
          JSON.parse(location) &&
          JSON.parse(location).coords &&
          JSON.parse(location).coords.longitude;
        this.accessRestaurantDetails(`${latitude},${longitude}`);
        this.setState({ location });
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  // https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=12.9153688,77.5969855&radius=100&type=restaurant&key=AIzaSyDM4BtVx-2cRWTEEu3JOdx0szr735nXzPU
  componentDidMount() {
    this.onAccessCurrentLocation();
  }
  submitReview = async () => {
    const reviewObj = {
      dishName: this.state.dishName,
      feedback: this.state.review,
      rate: this.state.rating,
      dishImage: "image-1579893195828.jpeg",
      restaurantData: { candidates: this.state.restaurantDetails }
    };
    const submitReviewResponse = await this.props.submitReview(reviewObj);

    ToastAndroid.show(
      "Review added successfully",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
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
            <TouchableWithoutFeedback onPress={this.onAccessCurrentLocation}>
              <Image source={compass} style={{ width: 20, height: 20 }} />
            </TouchableWithoutFeedback>
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
          <View style={styles.restroName}>
            <AirbnbRating
              count={5}
              defaultRating={0}
              size={50}
              showRating={false}
              onFinishRating={r => this.completeRate(r)}
            />
          </View>
          <View style={styles.button}>
            <TouchableWithoutFeedback
              onPress={() => this.submitReview()}
              title="SUBMIT REVIEW"
              style={styles.buttonStyle}
            >
              <Text style={styles.buttonTitle}>SUBMIT REVIEW</Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default AddReviewForm;
