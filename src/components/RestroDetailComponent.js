import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Share,
  Platform,
  Modal,
  TouchableHighlight,
  TextInput,
  Keyboard
} from "react-native";
import styles from "./css/RestroDetailComponent";
import modalStyles from "./css/AddReviewFormStyle";
import RatingComponent from "./General/RatingComponent";
import ListItemComponent from "./ListItemComponent";
import { getRestaurantsUrl } from "../utils/Utils";
import { renderDateFormat } from "../utils/DateUtils";
import tick from "../../assets/tick.png";
import { Linking } from "expo";
import { SEND_RECOMMEND_SUCCESS } from "../actions/Action";
import ReviewContainer from "../containers/ReviewContainer";
const { State: TextInputState } = TextInput;
export default class RestroDetailsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModalState: false,
      comments: "",
      userIDs: [],
      userNames: [],
      customRestaurantDetails: false,
      restaurantList: [],
      showSuggestions: false,
      frndSuggestion: false,
      suggestionFetching: false,
      query: "",
      searchFriend: "",
      userName: ""
    };
  }

  goBack = () => {
    this.props.navigation.goBack();
  };
  componentDidMount() {
    this.props.getAllUser();
    const restroId = this.props.navigation.getParam("restroId");
    this.props.restroDetails(restroId);
  }
  onOpenModal = () => {
    this.setState({
      openModalState: true
    });
  };
  onShare = async () => {
    try {
      const details = this.props && this.props.getRestroDetails;
      const result = await Share.share({
        title: `${
          details.name
        } | ${`http://disherve.com?restId=${details._id}`}`,
        url: `http://disherve.com?restId=${details._id}`,
        message: `${
          details.name
        } | ${`http://disherve.com?restId=${details._id}`}`
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
  goToLocation = () => {
    const details = this.props && this.props.getRestroDetails;

    const lat = details.latitude;
    const lng = details.longitude;

    const scheme = Platform.select({
      ios: "maps:0,0?q=",
      android: "geo:0,0?q="
    });
    const latLng = `${lat},${lng}`;
    const label = details.name;
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`
    });

    Linking.openURL(url);
  };
  closeModal = () => {
    this.setState({
      openModalState: !this.state.openModalState,
      comments: "",
      userIDs: [],
      userNames: []
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
    const details = this.props && this.props.getRestroDetails;
    const recommendObj = {
      recommendedTo: this.state.userIDs,
      dishId: details._id,
      description: this.state.comments
    };
    const recommendResponse = await this.props.sendRecommandation(recommendObj);
    if (recommendResponse.type === SEND_RECOMMEND_SUCCESS) {
      this.props.myRecommendation();
      this.setState({
        openModalState: false,
        comments: "",
        userIDs: [],
        userNames: []
      });
    }
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
  firstTouchOnFriendInput = () => {
    this.setState({
      frndSuggestion: true
    });
  };
  onChnageComments = comments => {
    this.setState({
      comments
    });
  };
  render() {
    const friendsList =
      this.props.userList &&
      this.props.userList.filter(friend => {
        return (
          friend.name &&
          friend.name
            .toUpperCase()
            .includes(this.state.searchFriend.toUpperCase())
        );
      });
    if (this.props.getRestroDetailLoading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#c4c4c4" />
        </View>
      );
    }
    const details = this.props && this.props.getRestroDetails;

    return (
      <ScrollView
        style={styles.base}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={"handled"}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={this.goBack}>
            <Image
              style={styles.icon}
              source={require("../../assets/back.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onOpenModal}>
            <Image
              style={styles.icon}
              source={require("../../assets/share.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={
              details.restaurantImage
                ? { uri: getRestaurantsUrl(details.restaurantImage) }
                : require("../../assets/defaultRestro.png")
            }
          />
        </View>
        <View style={styles.infoWrapper}>
          <View style={styles.details}>
            <Text style={styles.textName}>{details.name}</Text>
            <Text style={styles.textDes}>{details.fullAddress}</Text>
          </View>
          {/* <View style={styles.callIcon}>
            <Image
              style={styles.icon}
              source={require("../../assets/call.png")}
            />
          </View> */}
        </View>
        <View style={styles.rateWrapper}>
          <View style={styles.details}>
            <RatingComponent
              rating={details.averageRating}
              size={15}
              marginRight={2}
            />
            <Text style={styles.textDes}>
              Based on {details.totalReviews} reviews
            </Text>
          </View>
          <TouchableOpacity onPress={this.goToLocation}>
            <View style={styles.goIcon}>
              <Text style={styles.go}>GO</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* <View style={styles.summary}>
          <Text style={styles.summaryHeading}>Summary</Text>
          <View style={styles.row}>
            <Image
              style={styles.tiniIcon}
              source={require("../../assets/call.png")}
            />
            <Text style={styles.des}>Garago Streen, Pvt park</Text>
          </View>
          <View style={styles.row}>
            <Image
              style={styles.tiniIcon}
              source={require("../../assets/call.png")}
            />
            <Text style={styles.des}>24 X 7</Text>
          </View>
          <View style={styles.row}>
            <Image
              style={styles.tiniIcon}
              source={require("../../assets/call.png")}
            />
            <Text style={styles.des}>Veg & Non veg</Text>
          </View>
          <View style={styles.row}>
            <Image
              style={styles.tiniIcon}
              source={require("../../assets/call.png")}
            />
            <Text style={styles.des}>CC/DC UPI,Phonepe, Bhim</Text>
          </View>
        </View> */}

        <View style={styles.dishesList}>
          <Text style={styles.summaryHeading}>Popular Dishes</Text>
          <ScrollView style={styles.listItemWrapper}>
            {details && details.dishes && details.dishes.map
              ? details.dishes.map((recent, id) => {
                  return (
                    <ListItemComponent
                      key={id}
                      imgUri={recent.dishImage}
                      name={recent.name}
                      price={recent.price}
                      rating={recent.averageRating}
                      peoples={recent.totalReviews}
                    />
                  );
                })
              : null}
          </ScrollView>
        </View>
        <View>
          <Text style={styles.reviewHeading}>Reviews</Text>
          {details && details.reviews && details.reviews.map
            ? details.reviews.map((recent, id) => {
                return (
                  <ReviewContainer
                    key={id}
                    restroName={recent.dishInfo.name}
                    pic={recent.dishInfo.dishImage}
                    review={recent.feedback}
                    rating={recent.rate}
                    time={renderDateFormat(recent.createdAt)}
                  />
                );
              })
            : null}
        </View>
        {this.state.openModalState && (
          <View style={modalStyles.modalBase}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={this.state.openModalState}
              onRequestClose={() => {
                this.setState({ openModalState: false });
              }}
            >
              <View style={modalStyles.modal}>
                <ScrollView keyboardShouldPersistTaps={"handled"}>
                  <TouchableHighlight
                    onPress={() => this.closeModal()}
                    style={modalStyles.closeModalIcon}
                    underlayColor={"#fff"}
                  >
                    <Image
                      style={modalStyles.icon}
                      source={require("../../assets/plus.png")}
                    />
                  </TouchableHighlight>
                  <View style={modalStyles.header}>
                    <View>
                      <Text style={modalStyles.heading}>Recommendation</Text>
                    </View>
                  </View>
                  <View style={modalStyles.tagWrapper}>
                    {this.state.userNames && this.state.userNames.map
                      ? this.state.userNames.map((tag, id) => {
                          return (
                            <View style={modalStyles.tag} key={id}>
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
                  <View style={modalStyles.dropdown}>
                    <View style={modalStyles.input}>
                      <TextInput
                        style={modalStyles.inputName}
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
                              onPress={() => this.selectedRecommendFriend(user)}
                              underlayColor={"transparent"}
                              key={key}
                              style={modalStyles.frndSuggest}
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
                  <View style={modalStyles.buttonsSkip}>
                    <TouchableHighlight
                      onPress={() => this.onShare()}
                      underlayColor={"transparent"}
                    >
                      <Text style={modalStyles.skipTitle}>
                        OR Recommand Via
                      </Text>
                    </TouchableHighlight>
                  </View>
                  <View>
                    <View style={modalStyles.commentsInput}>
                      <TextInput
                        style={modalStyles.textArea}
                        placeholder="Comments"
                        numberOfLines={10}
                        multiline
                        onChangeText={text => this.onChnageComments(text)}
                        value={this.state.comments}
                      />
                    </View>

                    <View style={modalStyles.buttons}>
                      <TouchableHighlight
                        onPress={() => this.sendRecommd()}
                        style={modalStyles.modalButton}
                      >
                        <Text style={modalStyles.buttonTitle}>RECOMMEND</Text>
                      </TouchableHighlight>
                    </View>

                    <View style={modalStyles.buttonsSkip}>
                      <TouchableHighlight
                        underlayColor={"#fff"}
                        onPress={() => this.closeModal()}
                      >
                        <Text style={modalStyles.skipTitle}>SKIP</Text>
                      </TouchableHighlight>
                    </View>
                  </View>
                </ScrollView>
              </View>
            </Modal>
          </View>
        )}
      </ScrollView>
    );
  }
}
