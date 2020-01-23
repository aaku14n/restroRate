import React from "react";

import { View, Image } from "react-native";
import styles from "./css/FooterStyle";

function IconComponent(props) {
  return (
    <View>
      <Image
        width={20}
        source={props.name}
        style={{
          width: 20,
          height: 20,
          tintColor: props.color
        }}
      />
    </View>
  );
}
export default IconComponent;
