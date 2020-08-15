import React, { useState, useEffect } from "react";
import styles from "./css/AccountStyle";
import {
  View,
  Text,
  Image,
  ScrollView,
  Alert,
  FlatList,
  RefreshControl
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ProfilePic from "./ProfilePic";
function Account(props) {
  let profilePic,
    name = "Hi User",
    email = "xyz@gmail.com";
  console.log(props.loginDetails.data.name);
  if (props.loginDetails && props.loginDetails.data) {
    profilePic = props.loginDetails.data.profilePic;
    if (props.loginDetails.data.name) {
      name = props.loginDetails.data.name;
    }
    if (props.loginDetails.data.email) {
      email = props.loginDetails.data.email;
    }
  }
  const [refreshing, setRefresing] = useState(false);
  const logout = () => {
    Alert.alert(
      "LOG OUT",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel"
        },
        { text: "OK", onPress: () => props.logoutUser() }
      ],
      { cancelable: false }
    );
  };
  useEffect(() => {
    if (!props.reviewList) {
      props.myAccountReviews();
    }
  });
  const showReviewws = () => {
    props.navigation.navigate("ReviewScreen", {
      reviewList: props.reviewList
    });
  };
  const editProfile = () => {
    props.navigation.navigate("EditScreen");
  };

  return (
    <View style={styles.base}>
      <View style={styles.infoWrapper}>
        <View style={styles.row}>
          <View style={styles.imageWrapper}>
            <ProfilePic profilePic={profilePic} key={"account_123"} />
          </View>
          <View style={styles.info}>
            <View style={styles.name}>
              <Text style={styles.name}>{name}</Text>
            </View>
            <View style={styles.email}>
              <Text style={styles.email}>{email}</Text>
            </View>
          </View>
          <View>
            <TouchableOpacity onPress={() => logout()}>
              <Image
                style={styles.logout}
                source={require("../../assets/logout.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.reviews}>
        <View style={styles.tabs}>
          <TouchableOpacity
            style={styles.myReviews}
            onPress={() => showReviewws()}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={styles.tabIcon}>
                <Image
                  style={styles.reviewIcon}
                  source={require("../../assets/my-review.png")}
                />
              </View>
              <View>
                <Text style={styles.reviewTab}>My Reviews</Text>
              </View>
            </View>
            <View style={styles.arrowIcon}>
              <Image
                style={styles.backIcon}
                source={require("../../assets/back.png")}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.myReviews}
            onPress={() => editProfile()}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={styles.tabIcon}>
                <Image
                  style={styles.reviewIcon}
                  source={require("../../assets/account-settings.png")}
                />
              </View>
              <View>
                <Text style={styles.reviewTab}>Account Settings</Text>
              </View>
            </View>
            <View style={styles.arrowIcon}>
              <Image
                style={styles.backIcon}
                source={require("../../assets/back.png")}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Account;
