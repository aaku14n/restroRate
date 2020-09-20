import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  Modal,
  TouchableHighlight,
  TextInput,
  Keyboard,
  Share,
  ScrollView,
  Animated,
  Dimensions,
  UIManager
} from "react-native";
import profile from "../../../assets/profilePic.png";
import styles from "./css/ReviewComponentStyle";
import RatingComponent from "./RatingComponent";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SEND_RECOMMEND_SUCCESS } from "../../actions/Action";
import tick from "../../../assets/tick.png";
import RecommendationForm from "./RecommendationForm";

function ReviewComponent(props) {
  const [openModal, setOpenModal] = useState(false);
  const [userNames, setUserNames] = useState([]);
  const [userIDs, setUserIDs] = useState([]);
  const [searchFriend, setSearchFriend] = useState("");
  const [frndSuggestion, setFrndSuggestion] = useState(false);
  const [comments, setComments] = useState("");
  const [shift, setShift] = useState(new Animated.Value(0));

  const onOpenModal = () => {
    setOpenModal(true);
    props.getAllUser();
  };
  const closeModal = () => {
    setOpenModal(false);
  };
  const clearTags = id => {
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
    // setFrndSuggestion(false);
    // setSearchFriend("");
    Keyboard.dismiss();
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
        <RecommendationForm
          userList={props.userList}
          getAllUser={props.getAllUser}
          sendRecommandation={props.sendRecommandation}
          myRecommendation={props.myRecommendation}
        />
      ) : null}
    </ScrollView>
  );
}

export default ReviewComponent;
