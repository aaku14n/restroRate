import React from "react";

import { View, Image } from "react-native";
import styles from "./css/FooterStyle";

function IconComponent(props) {
  return (
    <View>
      <Image width={20} source={props.name} style={styles.icon} />
    </View>
  );
}
export default IconComponent;
