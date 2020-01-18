import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./css/FooterStyle";

function Footer(props) {
  return (
    <View style={styles.base}>
      <View>
        <Image style={styles.icon} source={require("../../assets/fork.png")} />
      </View>
      <View>
        <Image
          style={styles.icon}
          source={require("../../assets/search.png")}
        />
      </View>
      <View>
        <Image
          style={styles.icon}
          source={require("../../assets/discount.png")}
        />
      </View>
      <View>
        <Image
          style={styles.icon}
          source={require("../../assets/profile.png")}
        />
      </View>
    </View>
  );
}

export default Footer;
