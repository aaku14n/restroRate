import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  ActivityIndicator,
  Alert,
  Modal,
  Picker,
  TouchableHighlight
} from "react-native";
import { AirbnbRating } from "react-native-ratings";
import styles from "./css/AddReviewFormStyle";
import camera from "../../assets/camera.png";
import galary from "../../assets/galary.png";
import cross from "../../assets/plus.png";
import defaultPic from "../../assets/defaultRestro.png";
import compass from "../../assets/compass.png";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import {
  getRestaurant,
  ADD_REVIEW_SUCCESS,
  SEND_RECOMMEND_SUCCESS
} from "../actions/Action";
import * as Permissions from "expo-permissions";
import RecommendFriends from "./RecommendFriend";

class AddReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: null,
      rating: 0,
      restroName: "",
      dishName: "",
      review: "",
      location: null,
      imageLoading: false,
      openModalState: false,
      comments: "",
      userID: this.props.userList ? this.props.userList[0]._id : ""
    };
  }

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
  onChnageComments = comments => {
    this.setState({
      comments
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
        this.accessRestaurantDetails(`12.933577,77.614224`);
        this.setState({ location });
      },
      error => {
        if (!this.state.showErrorAlert) {
          Alert.alert(error.message);
          this.setState({ showErrorAlert: true });
        }
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  // https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=12.9153688,77.5969855&radius=100&type=restaurant&key=AIzaSyDM4BtVx-2cRWTEEu3JOdx0szr735nXzPU
  componentDidMount() {
    this.onAccessCurrentLocation();
    this.props.getAllUser();
  }

  submitReview = async () => {
    this.setState({
      imageLoading: true
    });
    let localUri = this.state.photo.uri;
    let filename = localUri.split("/").pop();
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    const imageObj = {
      uri: this.state.photo.uri,
      name: filename,
      type
    };
    const imageRes = await this.props.uploadImage(imageObj);
    if (imageRes.imageInfo.err) {
      Alert.alert(
        "ERROR",
        "Image size should be less than 5 mb",
        [
          {
            text: "Cancel"
          }
        ],
        { cancelable: false }
      );
      this.setState({
        imageLoading: false
      });
      return false;
    } else {
      const reviewObj = {
        dishName: this.state.dishName,
        feedback: this.state.review,
        rate: this.state.rating,
        dishImage: imageRes.imageInfo.filename,
        restaurantData: { candidates: this.state.restaurantDetails }
      };
      const submitReviewResponse = await this.props.submitReview(reviewObj);
      if (submitReviewResponse.type === ADD_REVIEW_SUCCESS) {
        this.setState({
          photo: null,
          rating: 0,
          dishName: "",
          review: "",
          imageLoading: false,
          openModalState: true
        });
      }
    }
  };
  getLocationAsync = async () => {
    const { status, permissions } = await Permissions.askAsync(
      Permissions.CAMERA
    );
    if (status === "granted") {
      return "";
    } else {
      throw new Error("Location permission not granted");
    }
  };
  captureImageFromCamera = async () => {
    let permissionResult = await this.getLocationAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }
    let pickerResult = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3]
    });
    if (pickerResult.cancelled == false) {
      this.setState({
        photo: pickerResult
      });
    }
  };
  takeImageFormGallary = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled == false) {
      this.setState({
        photo: pickerResult
      });
    }
  };
  removeImage = () => {
    this.setState({
      photo: null
    });
  };
  closeModal = () => {
    this.setState({
      openModalState: !this.state.openModalState
    });
  };
  selectedRecommendFriend = userID => {
    this.setState({
      userID
    });
  };
  sendRecommd = async () => {
    const recommendObj = {
      recommendedTo: this.state.userID,
      dishId: this.props.addReview.dishId,
      description: this.state.comments
    };
    const recommendResponse = await this.props.sendRecommandation(recommendObj);
    if (recommendResponse.type === SEND_RECOMMEND_SUCCESS) {
      this.setState({ openModalState: false });
    }
  };
  render() {
    const { photo } = this.state;
    if (this.props.addReviewLoading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#c4c4c4" />
        </View>
      );
    }

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
          <View style={styles.imageWrapper}>
            {photo && photo.uri ? (
              <View style={styles.imgBox}>
                <Image
                  source={{ uri: photo.uri }}
                  style={{ width: 200, height: 200, borderRadius: 10 }}
                />
                {this.state.imageLoading && (
                  <View style={styles.imageLoader}>
                    <ActivityIndicator size="large" color="#c4c4c4" />
                  </View>
                )}
              </View>
            ) : (
              <View style={styles.captureButtonWrapper}>
                <TouchableWithoutFeedback
                  onPress={this.captureImageFromCamera}
                  style={styles.captureImageButton}
                >
                  <Image
                    source={camera}
                    style={{ width: 50, height: 50, borderRadius: 10 }}
                  />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                  onPress={this.takeImageFormGallary}
                  style={styles.captureImageButton}
                >
                  <Image
                    source={galary}
                    style={{ width: 50, height: 50, borderRadius: 10 }}
                  />
                </TouchableWithoutFeedback>
              </View>
            )}
            {photo && photo.uri && (
              <TouchableWithoutFeedback
                onPress={this.removeImage}
                style={styles.closeIcon}
              >
                <Image source={cross} style={styles.editIcon} />
              </TouchableWithoutFeedback>
            )}
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
        {this.state.openModalState && (
          <View style={styles.modalBase}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={this.state.openModalState}
              onRequestClose={() => {
                this.setState({ openModalState: false });
              }}
            >
              <View style={styles.modal}>
                <TouchableHighlight
                  onPress={() => this.closeModal()}
                  style={styles.closeModalIcon}
                  underlayColor={"#fff"}
                >
                  <Image
                    style={styles.icon}
                    source={require("../../assets/plus.png")}
                  />
                </TouchableHighlight>
                <View style={styles.header}>
                  <View>
                    <Text style={styles.heading}>Recommendation</Text>
                  </View>
                </View>
                <View style={styles.dropdown}>
                  <Picker
                    selectedValue={this.state.userID}
                    style={{
                      height: 50,
                      width: "100%"
                    }}
                    onValueChange={(itemValue, itemIndex) =>
                      this.selectedRecommendFriend(itemValue, itemIndex)
                    }
                  >
                    {this.props.userList && this.props.userList.map
                      ? this.props.userList.map((item, id) => {
                          return (
                            <Picker.Item
                              key={id}
                              label={item.name}
                              value={item._id}
                            />
                          );
                        })
                      : null}
                  </Picker>
                </View>
                <View style={styles.commentsInput}>
                  <TextInput
                    style={styles.input}
                    placeholder="Comments"
                    onChangeText={text => this.onChnageComments(text)}
                    value={this.state.comments}
                  />
                </View>
                <View style={styles.modalButton}>
                  <TouchableHighlight
                    onPress={() => this.sendRecommd()}
                    underlayColor={"#fff"}
                  >
                    <Text style={styles.buttonTitle}>RECOMMEND</Text>
                  </TouchableHighlight>
                </View>
                <View style={styles.skipButton}>
                  <TouchableHighlight
                    underlayColor={"#fff"}
                    onPress={() => this.closeModal()}
                  >
                    <Text style={styles.skipTitle}>SKIP</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>
          </View>
        )}
      </ScrollView>
    );
  }
}

export default AddReviewForm;
