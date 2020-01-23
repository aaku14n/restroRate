import React, { useState } from "react";
import { Text, View, Image, TouchableHighlight } from "react-native";
import styles from "./css/HeaderStyle";
import { Dimensions, Platform } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

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

const PADDING_TOP = isIphoneX() ? 30 : 10;
function Header(props) {
  let profilePic;
  if (props.loginDetails && props.loginDetails.data) {
    profilePic = props.loginDetails.data.profilePic;
  }

  const [dropDown, setdropDown] = useState(false);

  const onPress = () => {
    setdropDown(!dropDown);
  };
  const gotoMyAccount = () => {
    props.navigation.navigate("Setting");
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
              <Text style={styles.location}>Gurugram</Text>
            </View>
            <View style={dropDown ? styles.upIcon : styles.downIcon}>
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
