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
import styles from "../css/AddReviewFormStyle.js";

import tick from "../../../assets/tick.png";
import compass from "../../../assets/compass.png";
import {
  TouchableWithoutFeedback,
  FlatList
} from "react-native-gesture-handler";

import {
  getRestaurant,
  ADD_REVIEW_SUCCESS,
  SEND_RECOMMEND_SUCCESS
} from "../../actions/Action";

import { Animated, Dimensions, Keyboard, UIManager } from "react-native";
const { State: TextInputState } = TextInput;

class RecommendationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frndSuggestion: false,
      suggestionFetching: false,
      shift: new Animated.Value(0),
      query: "",
      searchFriend: "",
      userName: "",
      userIDs: [],
      userNames: []
    };
  }

  //   componentWillMount() {
  //     this.keyboardDidShowSub = Keyboard.addListener(
  //       "keyboardDidShow",
  //       this.handleKeyboardDidShow
  //     );
  //     this.keyboardDidHideSub = Keyboard.addListener(
  //       "keyboardDidHide",
  //       this.handleKeyboardDidHide
  //     );
  //   }

  firstTouchOnFriendInput = () => {
    this.setState({
      frndSuggestion: true
    });
  };

  componentDidMount() {
    this.props.getAllUser();
  }
  componentWillUnmount() {
    this.keyboardDidShowSub.remove();
    this.keyboardDidHideSub.remove();
  }

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
      <Animated.View
        style={[styles.container, { transform: [{ translateY: shift }] }]}
      >
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
              <ScrollView keyboardShouldPersistTaps={"handled"}>
                <TouchableHighlight
                  onPress={() => this.closeModal()}
                  style={styles.closeModalIcon}
                  underlayColor={"#fff"}
                >
                  <Image
                    style={styles.icon}
                    source={require("../../../assets/plus.png")}
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
                                source={require("../../../assets/plus.png")}
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
                          //   frndSuggestion: false,
                          searchFriend: ""
                        })
                      }
                    />
                    {this.state.frndSuggestion && friendsList ? (
                      friendsList.splice(0, 5).map((user, key) => {
                        return (
                          <TouchableHighlight
                            onPress={() => this.selectedRecommendFriend(user)}
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
                    <Text style={styles.skipTitle}>OR Recommend Via</Text>
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
      </Animated.View>
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

export default RecommendationForm;
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
