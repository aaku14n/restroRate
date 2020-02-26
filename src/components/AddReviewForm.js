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
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Share,
  Platform,
  Linking
} from "react-native";
import { AirbnbRating } from "react-native-ratings";
import styles from "./css/AddReviewFormStyle";
import camera from "../../assets/camera.png";
import galary from "../../assets/galary.png";
import cross from "../../assets/plus.png";
import tick from "../../assets/tick.png";
import compass from "../../assets/compass.png";
import {
  TouchableWithoutFeedback,
  FlatList
} from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import {
  getRestaurant,
  ADD_REVIEW_SUCCESS,
  SEND_RECOMMEND_SUCCESS
} from "../actions/Action";
import * as Permissions from "expo-permissions";

import { Animated, Dimensions, Keyboard, UIManager } from "react-native";
const { State: TextInputState } = TextInput;

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
      userIDs: [],
      userNames: [],
      customRestaurantDetails: false,
      restaurantList: [],
      showSuggestions: false,
      frndSuggestion: false,
      suggestionFetching: false,
      shift: new Animated.Value(0),
      query: "",
      searchFriend: "",
      userName: "",
      showFirstModal: false
    };
  }

  componentWillMount() {
    this.keyboardDidShowSub = Keyboard.addListener(
      "keyboardDidShow",
      this.handleKeyboardDidShow
    );
    this.keyboardDidHideSub = Keyboard.addListener(
      "keyboardDidHide",
      this.handleKeyboardDidHide
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowSub.remove();
    this.keyboardDidHideSub.remove();
    Linking.removeEventListener("url", this.handleOpenURL);
  }

  completeRate(rating) {
    this.setState({
      rating
    });
  }

  onChnageRestraurentName = name => {
    this.setState(
      {
        query: name
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          this.accessRestaurantDetails(this.state.query);
        }
      }
    );
  };
  onChnageDishName = dishName => {
    this.setState({
      dishName
    });
  };
  onChnageReview = review => {
    this.setState({
      review,
      showFirstModal: true
    });
  };
  onChnageComments = comments => {
    this.setState({
      comments
    });
  };
  onFirstTouch = () => {
    this.setState({
      showSuggestions: true
    });
    this.accessRestaurantDetails();
  };
  firstTouchOnFriendInput = () => {
    this.setState({
      frndSuggestion: true
    });
  };
  accessRestaurantDetails = async query => {
    const loc = `${this.props.lat},${this.props.long}`;
    await this.setState({ suggestionFetching: true });
    const detailsRes = await this.props.getRestaurant(loc, query);
    await this.setState({ suggestionFetching: false });

    if (detailsRes && detailsRes[0]) {
      this.setState({
        // restaurantDetails: [detailsRes[0]],
        customRestaurantDetails: false,
        restaurantList: detailsRes
      });
    }
  };
  onSelectRestaurant = restaurantData => {
    this.setState({
      restaurantDetails: [restaurantData],
      query: restaurantData.name,
      showSuggestions: false
    });
  };
  onAccessCurrentLocation = async () => {
    if (!this.props.lat) {
      await this.props.getCurrentLocation();
    }
    await this.accessRestaurantDetails();
  };

  componentDidMount() {
    this.onAccessCurrentLocation();
    this.props.getAllUser();
    if (Platform.OS === "android") {
      Linking.getInitialURL().then(url => {
        this.navigate(url);
      });
    } else {
      Linking.addEventListener("url", this.handleOpenURL);
    }
  }
  handleOpenURL = event => {
    this.navigate(event.url);
  };
  navigate = url => {
    const { navigate } = this.props.navigation;
    const route = url.replace(/.*?:\/\//g, "");
    const restroId = route.match(/\/([^\/]+)\/?$/)[1];
    const routeName = route.split("/")[0];

    if (routeName === "restaurant") {
      navigate("RestroDetails", {
        restroId: restroId
      });
    }
  };
  openAlert = message => {
    Alert.alert(
      "ERROR",
      message,
      [
        {
          text: "Cancel"
        }
      ],
      { cancelable: false }
    );
    return true;
  };
  submitReview = async () => {
    if (!this.state.restaurantDetails && !this.state.query) {
      this.openAlert("Restaurant Name is require field");
      return;
    }
    if (!this.state.photo) {
      this.openAlert("Dish image is require field");
      return;
    }
    if (!this.state.dishName) {
      this.openAlert("Please enter dish name");
      return;
    }
    if (!this.state.rating) {
      this.openAlert("Please give rating");
      return;
    }
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
      let customRestoObj = {
        latitude: this.props.lat,
        longitude: this.props.long,
        name: this.state.query
      };
      const reviewObj = {
        dishName: this.state.dishName,
        feedback: this.state.review,
        rate: this.state.rating,
        dishImage: imageRes.imageInfo.filename,
        restaurantData: !this.state.restaurantDetails
          ? customRestoObj
          : { candidates: this.state.restaurantDetails }
      };
      const submitReviewResponse = await this.props.submitReview(reviewObj);
      if (submitReviewResponse.type === ADD_REVIEW_SUCCESS) {
        this.props.getHomeData(this.props.lat, this.props.long);
        this.props.myAccountReviews();
        this.setState({
          photo: null,
          rating: 0,
          dishName: "",
          review: "",
          imageLoading: false,
          openModalState: true,
          restaurantDetails: "",
          query: "",
          showFirstModal: false
        });
        addReviewFormTab = false;
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
      aspect: [4, 3],
      quality: 1
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

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

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
  selectedRecommendFriend = userObj => {
    Keyboard.dismiss();
    const checkIdPresentOrNot = this.state.userIDs.includes(userObj._id);
    let userIDs = this.state.userIDs;
    let userNames = this.state.userNames;
    if (checkIdPresentOrNot) {
      const deletedIndex = this.state.userIDs.findIndex(test => {
        return test == userObj._id;
      });
      userIDs.splice(deletedIndex, 1);
      userNames.splice(deletedIndex, 1);
    } else {
      userIDs.push(userObj._id);
      userNames.push({ name: userObj.name, id: userObj._id });
    }

    this.setState({
      userIDs,
      userNames,
      searchFriend: "",
      frndSuggestion: false
    });
  };
  onChnageFriend = searchFriend => {
    this.setState({
      searchFriend
    });
  };
  sendRecommd = async () => {
    const recommendObj = {
      recommendedTo: this.state.userIDs,
      dishId: this.props.addReview.dishId,
      description: this.state.comments
    };

    const recommendResponse = await this.props.sendRecommandation(recommendObj);

    if (recommendResponse.type === SEND_RECOMMEND_SUCCESS) {
      this.props.myRecommendation();
      this.setState({ openModalState: false });
    }
  };

  showLocateAndLoader = () => {
    return this.state.restaurantDetails && this.state.suggestionFetching ? (
      <ActivityIndicator size="small" color="#c4c4c4" />
    ) : (
      <TouchableWithoutFeedback onPress={this.onAccessCurrentLocation}>
        <Image source={compass} style={{ width: 20, height: 20 }} />
      </TouchableWithoutFeedback>
    );
  };
  clearTags = id => {
    const deletedIndex = this.state.userNames.findIndex(test => {
      return test.id == id;
    });
    const userNames = this.state.userNames;
    const userIDs = this.state.userIDs;
    userNames.splice(deletedIndex, 1);
    userIDs.splice(deletedIndex, 1);
    this.setState({
      userNames,
      userIDs
    });
  };

  onShare = async () => {
    try {
      const result = await Share.share({
        message: `Disherve Recommendation | ${`http://disherve.com?restId=${this.props.addReview.restaurantId}`}`,
        url: `http://disherve.com?restId=${this.props.addReview.restaurantId}`
      });

      if (result.action === Share.sharedAction) {
        alert("Shared");
      } else if (result.action === Share.dismissedAction) {
        // dismissed
        alert("Cancelled");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  render() {
    const { photo, shift } = this.state;
    const friendsList =
      this.props.userList &&
      this.props.userList.filter(friend => {
        return friend.name
          .toUpperCase()
          .includes(this.state.searchFriend.toUpperCase());
      });
    if (this.props.addReviewLoading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#c4c4c4" />
        </View>
      );
    }

    return (
      <ScrollView
        style={styles.base}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={"handled"}
      >
        {/* <PushNotification {...this.props} /> */}
        <Animated.View
          style={[styles.container, { transform: [{ translateY: shift }] }]}
        >
          <View style={styles.heading}>
            <Text style={styles.review}>Add Review</Text>
          </View>
          <View style={styles.form}>
            <View style={styles.restroName}>
              <View style={styles.input}>
                <TextInput
                  style={styles.inputName}
                  placeholder="Restaurants Name"
                  onChangeText={text => this.onChnageRestraurentName(text)}
                  value={this.state.query}
                  onFocus={() => this.onFirstTouch()}
                  onBlur={() => this.setState({ showSuggestions: false })}
                />

                {this.state.showSuggestions &&
                this.state.restaurantList &&
                this.state.restaurantList.length > 0 ? (
                  this.state.restaurantList.splice(0, 5).map((item, key) => {
                    return (
                      <TouchableWithoutFeedback
                        onPress={() => this.onSelectRestaurant(item)}
                        key={item.id}
                        style={styles.itemSuggest}
                      >
                        <Text>{item.name}</Text>
                      </TouchableWithoutFeedback>
                    );
                  })
                ) : (
                  <Text />
                )}
              </View>
            </View>

            <View style={styles.compassIcon}>{this.showLocateAndLoader()}</View>
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
                    <View
                      style={{
                        alignItems: "center"
                      }}
                    >
                      <Image
                        source={camera}
                        style={{
                          width: 50,
                          height: 50
                        }}
                      />
                    </View>
                    <Text style={styles.captureHeading}>Capture Image</Text>
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback
                    onPress={this.takeImageFormGallary}
                    style={styles.captureImageButton}
                  >
                    <View
                      style={{
                        alignItems: "center"
                      }}
                    >
                      <Image
                        source={galary}
                        style={{
                          width: 50,
                          height: 50
                        }}
                      />
                    </View>
                    <Text style={styles.captureHeading}>
                      Upload From Galary
                    </Text>
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
                style={styles.inputName}
                placeholder="Dish Name"
                onChangeText={text => this.onChnageDishName(text)}
                value={this.state.dishName}
                onBlur={() => this.setState({ showFirstModal: false })}
                onFocus={() => this.setState({ showFirstModal: true })}
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
                onBlur={() => this.setState({ showFirstModal: false })}
                onFocus={() => this.setState({ showFirstModal: true })}
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
              {this.state.imageLoading ? (
                <View style={styles.disableButtonStyle}>
                  <Text style={styles.disableButtonTitle}>LOADING.....</Text>
                </View>
              ) : (
                <TouchableWithoutFeedback
                  onPress={() => this.submitReview()}
                  title="SUBMIT REVIEW"
                  style={styles.buttonStyle}
                >
                  <Text style={styles.buttonTitle}>SUBMIT REVIEW</Text>
                </TouchableWithoutFeedback>
              )}
            </View>
          </View>
          {!this.state.openModalState && (
            <View style={styles.modalBase}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={!this.state.openModalState}
                onRequestClose={() => {
                  this.setState({ openModalState: false });
                }}
              >
                <View style={styles.modal}>
                  <ScrollView keyboardShouldPersistTaps={"handled"}>
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
                    <View style={styles.tagWrapper}>
                      {this.state.userNames && this.state.userNames.map
                        ? this.state.userNames.map((tag, id) => {
                            return (
                              <View style={styles.tag} key={id}>
                                <Text>{tag.name}</Text>
                                <TouchableHighlight
                                  onPress={() => this.clearTags(tag.id)}
                                  underlayColor={"#fff"}
                                >
                                  <Image
                                    style={{
                                      height: 18,
                                      width: 18,
                                      transform: [{ rotate: "45deg" }],
                                      marginLeft: 10
                                    }}
                                    source={require("../../assets/plus.png")}
                                  />
                                </TouchableHighlight>
                              </View>
                            );
                          })
                        : null}
                    </View>
                    <View style={styles.dropdown}>
                      <View style={styles.input}>
                        <TextInput
                          style={styles.inputName}
                          placeholder="Search Friend"
                          onChangeText={text => this.onChnageFriend(text)}
                          onFocus={() => this.firstTouchOnFriendInput()}
                          value={this.state.searchFriend}
                          placeholderTextColor="#c4c4c4"
                          onBlur={() =>
                            this.setState({
                              frndSuggestion: false,
                              searchFriend: ""
                            })
                          }
                        />
                        {this.state.frndSuggestion && friendsList ? (
                          friendsList.splice(0, 5).map((user, key) => {
                            return (
                              <TouchableHighlight
                                onPress={() =>
                                  this.selectedRecommendFriend(user)
                                }
                                underlayColor={"transparent"}
                                key={key}
                                style={styles.frndSuggest}
                              >
                                <View
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between"
                                  }}
                                >
                                  <View
                                    style={{
                                      display: "flex",
                                      flexDirection: "row"
                                    }}
                                  >
                                    <Image
                                      source={{ uri: user.profilePic }}
                                      style={{
                                        width: 25,
                                        height: 25,
                                        borderRadius: 15,
                                        marginRight: 25
                                      }}
                                    />
                                    <Text>{user.name}</Text>
                                  </View>
                                  {this.state.userIDs.includes(user._id) ? (
                                    <Image
                                      source={tick}
                                      style={{
                                        width: 20,
                                        height: 20,
                                        marginRight: 25
                                      }}
                                    />
                                  ) : null}
                                </View>
                              </TouchableHighlight>
                            );
                          })
                        ) : (
                          <Text />
                        )}
                      </View>
                    </View>
                    <View style={styles.buttonsSkip}>
                      <TouchableHighlight onPress={() => this.onShare()}>
                        <Text style={styles.skipTitle}>OR Share link</Text>
                      </TouchableHighlight>
                    </View>
                    <View>
                      <View style={styles.commentsInput}>
                        <TextInput
                          style={styles.textArea}
                          placeholder="Comments"
                          numberOfLines={10}
                          multiline
                          onChangeText={text => this.onChnageComments(text)}
                          value={this.state.comments}
                        />
                      </View>

                      <View style={styles.buttons}>
                        <TouchableHighlight
                          onPress={() => this.sendRecommd()}
                          style={styles.modalButton}
                        >
                          <Text style={styles.buttonTitle}>RECOMMEND</Text>
                        </TouchableHighlight>
                      </View>

                      <View style={styles.buttonsSkip}>
                        <TouchableHighlight
                          underlayColor={"#fff"}
                          onPress={() => this.closeModal()}
                        >
                          <Text style={styles.skipTitle}>SKIP</Text>
                        </TouchableHighlight>
                      </View>
                    </View>
                  </ScrollView>
                </View>
              </Modal>
            </View>
          )}
        </Animated.View>
      </ScrollView>
    );
  }

  handleKeyboardDidShow = event => {
    console.log("came in function");
    if (this.state.showFirstModal) {
      console.log("in");
      const { height: windowHeight } = Dimensions.get("window");
      const keyboardHeight = event.endCoordinates.height;
      console.log(windowHeight, keyboardHeight);
      const currentlyFocusedField = TextInputState.currentlyFocusedField();
      UIManager.measure(
        currentlyFocusedField,
        (originX, originY, width, height, pageX, pageY) => {
          const fieldHeight = height;
          const fieldTop = pageY;
          const gap = windowHeight - keyboardHeight - (fieldTop + fieldHeight);
          if (gap >= 0) {
            return;
          }
          Animated.timing(this.state.shift, {
            toValue: gap,
            duration: 0,
            useNativeDriver: true
          }).start();
        }
      );
    }
  };

  handleKeyboardDidHide = () => {
    Animated.timing(this.state.shift, {
      toValue: 0,
      duration: 0,
      useNativeDriver: true
    }).start();
  };
}

export default AddReviewForm;
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,

    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
    height: 50,
    backgroundColor: "#f4f4f4"
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "black",
    paddingRight: 30 // to ensure the text is never behind the icon
  }
});
