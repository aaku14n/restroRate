import React from "react";
import styles from "./css/AccountStyle";
import { View, Text, Image, ScrollView, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ReviewComponent from "./General/ReviewComponent";
import { renderDateFormat } from "../utils/DateUtils";
function Account(props) {
  let profilePic,
    name = "Hi User",
    email = "xyz@gmail.com";
  if (props.loginDetails && props.loginDetails.data) {
    profilePic = props.loginDetails.data.profilePic;
    name = props.loginDetails.data.name;
    email = props.loginDetails.data.email;
  }
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
  return (
    <ScrollView style={styles.base} showsVerticalScrollIndicator={false}>
      <View style={styles.infoWrapper}>
        <View style={styles.row}>
          <View style={styles.imageWrapper}>
            <Image
              style={styles.image}
              source={
                profilePic
                  ? {
                      uri: profilePic
                    }
                  : require("../../assets/profilePic.png")
              }
            />
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
        <View style={styles.heading}>
          <Text style={styles.myReview}>My Reviews</Text>
        </View>
        <View style={styles.reviewComponentWrapper}>
          {props.reviewList && props.reviewList && props.reviewList.map
            ? props.reviewList.map((review, id) => {
                return (
                  <ReviewComponent
                    key={id}
                    dishname={review.restaurantInfo.name}
                    restroName={review.dishInfo.name}
                    pic={review.dishInfo.dishImage}
                    review={review.feedback}
                    rating={review.rate}
                    time={renderDateFormat(review.createdAt)}
                  />
                );
              })
            : null}
        </View>
      </View>
    </ScrollView>
  );
}

export default Account;
