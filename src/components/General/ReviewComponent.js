import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  Modal,
  TouchableHighlight,
  TextInput,
  Keyboard,
  Share,
  ScrollView
} from "react-native";
import profile from "../../../assets/profilePic.png";
import styles from "./css/ReviewComponentStyle";
import RatingComponent from "./RatingComponent";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SEND_RECOMMEND_SUCCESS } from "../../actions/Action";
import tick from "../../../assets/tick.png";

function ReviewComponent(props) {
  const [openModal, setOpenModal] = useState(false);
  const [userNames, setUserNames] = useState([]);
  const [userIDs, setUserIDs] = useState([]);
  const [searchFriend, setSearchFriend] = useState("");
  const [frndSuggestion, setFrndSuggestion] = useState(false);
  const [comments, setComments] = useState("");

  const onOpenModal = () => {
    console.log("open");
    setOpenModal(true);
    props.getAllUser();
  };
  const closeModal = () => {
    console.log("close");
    setOpenModal(false);
  };
  const clearTags = id => {
    console.log(id);
    const deletedIndex = userNames.findIndex(test => {
      return test.id == id;
    });
    const collectedUserName = userNames;
    const collectedUserIds = userIDs;
    collectedUserName.splice(deletedIndex, 1);
    collectedUserIds.splice(deletedIndex, 1);
    setUserNames(collectedUserName);
    setUserIDs(collectedUserIds);
  };
  const onChnageFriend = searchFriend => {
    setSearchFriend(searchFriend);
  };
  const firstTouchOnFriendInput = () => {
    setFrndSuggestion(true);
  };
  const changeOnBlur = () => {
    setFrndSuggestion(false);
    setSearchFriend("");
  };
  const selectedRecommendFriend = userObj => {
    console.log("here", userObj);
    Keyboard.dismiss();
    const checkIdPresentOrNot = userIDs.includes(userObj._id);
    let collectedUserId = userIDs;
    let collectedUserName = userNames;
    if (checkIdPresentOrNot) {
      const deletedIndex = userIDs.findIndex(test => {
        return test == userObj._id;
      });
      collectedUserId.splice(deletedIndex, 1);
      collectedUserName.splice(deletedIndex, 1);
    } else {
      collectedUserId.push(userObj._id);
      collectedUserName.push({ name: userObj.name, id: userObj._id });
    }
    setUserNames(collectedUserName);
    setUserIDs(collectedUserId);
    setFrndSuggestion(false);
    setSearchFriend("");
  };
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `Disherve Recommendation | ${`http://disherve.com?restId=${props.restaurantId}`}`,
        url: `http://disherve.com?restId=${props.restaurantId}`
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
  const onChnageComments = comments => {
    setComments(comments);
  };
  const sendRecommd = async () => {
    const recommendObj = {
      recommendedTo: userIDs,
      dishId: props.dishId,
      description: comments
    };
    const recommendResponse = await props.sendRecommandation(recommendObj);
    if (recommendResponse.type === SEND_RECOMMEND_SUCCESS) {
      props.myRecommendation();
      setOpenModal(false);
      setComments("");
      setUserNames([]);
      setUserIDs([]);
    }
  };
  const friendsList =
    props.userList &&
    props.userList.filter(friend => {
      return friend.name.toUpperCase().includes(searchFriend.toUpperCase());
    });

  return (
    <ScrollView
      style={styles.base}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps={"handled"}
    >
      <View style={styles.imgNameWrapper}>
        <View style={styles.nameWithoutTime}>
          <View style={styles.profileImg}>
            <Image
              style={styles.pic}
              source={
                props.pic
                  ? {
                      uri: props.pic
                    }
                  : profile
              }
            />
          </View>
          <View style={styles.nameRating}>
            <Text style={styles.name}>{props.restroName}</Text>
            {props.dishname ? (
              <Text style={styles.dishname}>{props.dishname}</Text>
            ) : null}
            {!props.rightAligned ? (
              <View>
                <RatingComponent size={15} rating={props.rating} />
              </View>
            ) : null}
          </View>
        </View>
        <View style={styles.timeDiv}>
          {props.showShare ? (
            <TouchableOpacity onPress={() => onOpenModal()}>
              <Image
                style={styles.shareIcon}
                source={require("../../../assets/share.png")}
              />
            </TouchableOpacity>
          ) : null}
          <Text style={styles.time}>{props.time}</Text>
          {props.rightAligned ? (
            <View>
              <RatingComponent size={15} rating={props.rating} />
            </View>
          ) : null}
        </View>
      </View>
      <View style={styles.reviewWrapper}>
        <Text style={styles.review}>{props.review}</Text>
      </View>
      {openModal ? (
        <View>
          <Modal animationType="slide" transparent={true} visible={openModal}>
            <View style={styles.modal}>
              <ScrollView
                keyboardShouldPersistTaps={"handled"}
                showsVerticalScrollIndicator={false}
              >
                <TouchableHighlight
                  onPress={() => closeModal()}
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
                  {userNames && userNames.map
                    ? userNames.map((tag, id) => {
                        return (
                          <View style={styles.tag} key={id}>
                            <Text>{tag.name}</Text>
                            <TouchableHighlight
                              onPress={() => clearTags(tag.id)}
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
                      onChangeText={text => onChnageFriend(text)}
                      onFocus={() => firstTouchOnFriendInput()}
                      value={searchFriend}
                      placeholderTextColor="#c4c4c4"
                      onBlur={() => changeOnBlur()}
                    />
                    {frndSuggestion && friendsList ? (
                      friendsList.splice(0, 5).map((user, key) => {
                        return (
                          <TouchableHighlight
                            onPress={() => selectedRecommendFriend(user)}
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
                              {userIDs.includes(user._id) ? (
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
                  <TouchableHighlight
                    onPress={() => onShare()}
                    underlayColor={"transparent"}
                  >
                    <Text style={styles.skipTitle}>OR Recommand Via</Text>
                  </TouchableHighlight>
                </View>
                <View>
                  <View style={styles.commentsInput}>
                    <TextInput
                      style={styles.textArea}
                      placeholder="Comments"
                      numberOfLines={10}
                      multiline
                      onChangeText={text => onChnageComments(text)}
                      value={comments}
                    />
                  </View>

                  <View style={styles.buttons}>
                    <TouchableHighlight
                      onPress={() => sendRecommd()}
                      style={styles.modalButton}
                    >
                      <Text style={styles.buttonTitle}>RECOMMEND</Text>
                    </TouchableHighlight>
                  </View>

                  <View style={styles.buttonsSkip}>
                    <TouchableHighlight
                      underlayColor={"#fff"}
                      onPress={() => closeModal()}
                    >
                      <Text style={styles.skipTitle}>SKIP</Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </ScrollView>
            </View>
          </Modal>
        </View>
      ) : null}
    </ScrollView>
  );
}

export default ReviewComponent;
