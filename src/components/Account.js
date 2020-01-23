import React from "react";
import styles from "./css/AccountStyle";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
function Account(props) {
  let profilePic,
    name = "Hi User",
    email = "xyz@gmail.com";
  if (props.loginDetails && props.loginDetails.data) {
    profilePic = props.loginDetails.data.profilePic;
    name = props.loginDetails.data.name;
    email = props.loginDetails.data.email;
  }
  return (
    <View style={styles.base}>
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
            <TouchableOpacity onPress={() => props.logoutUser()}>
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
        <Text>No Reviews</Text>
      </View>
    </View>
  );
}

export default Account;
