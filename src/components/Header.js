import React, { useState, useEffect } from "react";
import { Text, View, Image, TouchableHighlight, Alert } from "react-native";
import styles from "./css/HeaderStyle";
import { Dimensions, Platform } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ACCOUNT_SCREEN } from "../Constant";

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
  const onAccessCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const location = JSON.stringify(position);
        const latitude =
          JSON.parse(location) &&
          JSON.parse(location).coords &&
          JSON.parse(location).coords.latitude;
        const longitude =
          JSON.parse(location) &&
          JSON.parse(location).coords &&
          JSON.parse(location).coords.longitude;
        getCityDetails(latitude, longitude);
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };
  const getCityDetails = async (lat, long) => {
    const cityResponse = await props.getCityName(lat, long);
    setLocation(cityResponse.compound_code.split(" ")[1].split(",")[0]);
  };
  useEffect(() => {
    onAccessCurrentLocation();
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
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Header;
