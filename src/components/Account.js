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
import ReviewComponent from "./General/ReviewComponent";
import { renderDateFormat } from "../utils/DateUtils";
import ProfilePic from "./ProfilePic";
function Account(props) {
  let profilePic,
    name = "Hi User",
    email = "xyz@gmail.com";
  if (props.loginDetails && props.loginDetails.data) {
    profilePic = props.loginDetails.data.profilePic;
    name = props.loginDetails.data.name;
    email = props.loginDetails.data.email;
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
  const doRefresh = async () => {
    await setRefresing(true);
    await props.myAccountReviews();
    await setRefresing(false);
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
        <TouchableOpacity onPress={() => editProfile()}>
          <Text style={styles.editText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.reviews}>
        <View style={styles.heading}>
          <Text style={styles.myReview}>My Reviews</Text>
        </View>
        <View style={styles.reviewComponentWrapper}>
          {props.reviewList && props.reviewList.length > 0 ? (
            <FlatList
              data={props.reviewList}
              keyExtractor={item => item._id}
              renderItem={({ item }) => (
                <ReviewComponent
                  dishname={item.restaurantInfo.name}
                  restroName={item.dishInfo.name}
                  pic={item.dishInfo.dishImage}
                  review={item.feedback}
                  rating={item.rate}
                  time={renderDateFormat(item.createdAt)}
                  rightAligned={true}
                />
              )}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={doRefresh} />
              }
            />
          ) : (
            <Text />
          )}
        </View>
      </View>
    </View>
  );
}

export default Account;
