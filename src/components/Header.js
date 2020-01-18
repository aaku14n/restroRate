import React, { useState } from "react";
import { Text, View, Image, TouchableHighlight } from "react-native";
import styles from "./css/HeaderStyle";

function Header(props) {
  const [dropDown, setdropDown] = useState(false);

  const onPress = () => {
    setdropDown(!dropDown);
  };
  return (
    <View style={styles.base}>
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
        <Image
          style={styles.image}
          source={require("../../assets/profilePic.png")}
        />
      </View>
    </View>
  );
}

export default Header;
