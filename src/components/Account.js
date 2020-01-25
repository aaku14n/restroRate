import React from "react";
import styles from "./css/AccountStyle";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ReviewComponent from "./General/ReviewComponent";
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
        <View style={styles.reviewComponentWrapper}>
          <ReviewComponent
            dishname={"Susi Tasty"}
            restroName={"Indian Somu Da"}
            pic={
              "https://img.jakpost.net/c/2017/02/24/2017_02_24_22239_1487924367._large.jpg"
            }
            review={
              " ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with d"
            }
            rating={2.8}
            time={"2 days ago"}
          />
        </View>
      </View>
    </View>
  );
}

export default Account;
