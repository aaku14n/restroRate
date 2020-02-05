import React, { useState, useEffect } from "react";
import { Text, View, Image, TouchableHighlight, Alert } from "react-native";
import styles from "./css/HeaderStyle";
import { Dimensions, Platform } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ACCOUNT_SCREEN } from "../Constant";
import ProfilePic from "./ProfilePic";

function isIphoneX() {
  const dim = Dimensions.get("window");

  return (
    // This has to be iOS
    Platform.OS === "ios" &&
    // Check either, iPhone X or XR
    (isIPhoneXSize(dim) || isIPhoneXrSize(dim))
  );
}

function isIPhoneXSize(dim) {
  return dim.height == 812 || dim.width == 812;
}

function isIPhoneXrSize(dim) {
  return dim.height == 896 || dim.width == 896;
}

// --- main.js Example

const PADDING_TOP = isIphoneX() ? 30 : 20;
function Header(props) {
  let profilePic;
  if (props.loginDetails && props.loginDetails.data) {
    profilePic = props.loginDetails.data.profilePic;
  }

  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const onAccessCurrentLocation = () => {
    getCityDetails(props.lat, props.long);
  };
  const getCityDetails = async (lat, long) => {
    await setLoading(true);
    const cityResponse = await props.getCityName(lat, long);

    if (cityResponse && cityResponse.type !== "Error") {
      setLocation(cityResponse);
    }
    await setLoading(false);
  };
  useEffect(() => {
    if (!location && !loading) {
      onAccessCurrentLocation();
    }
  });

  const onPress = () => {
    onAccessCurrentLocation();
  };
  const gotoMyAccount = () => {
    props.navigation.navigate(ACCOUNT_SCREEN);
  };
  return (
    <View style={styles.base} paddingTop={PADDING_TOP}>
      <View style={styles.subBase}>
        <View>
          <Text style={styles.locationTitle}>Your Location</Text>
        </View>
        <TouchableHighlight
          onPress={() => onPress()}
          underlayColor={"transparent"}
        >
          <View style={styles.iconTitleWrapper}>
            <View>
              <Text style={styles.location}>
                {location ? location : "Loading..."}
              </Text>
            </View>
            <View style={styles.downIcon}>
              <Image
                style={styles.icon}
                source={require("../../assets/downArrow.png")}
              />
            </View>
          </View>
        </TouchableHighlight>
      </View>
      <View style={styles.profileImage}>
        <TouchableOpacity onPress={() => gotoMyAccount()}>
          {/* <Image
            style={styles.image}
            source={
              profilePic
                ? {
                    uri: profilePic
                  }
                : require("../../assets/profilePic.png")
            }
          /> */}
          <ProfilePic profilePic={profilePic} key={"234account_1232343"} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Header;
