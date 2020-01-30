import React from "react";

import { View, Image } from "react-native";
import { ADD_REVIEW_SCREEN } from "../Constant";

function IconComponent(props) {
  return (
    <View
      style={{
        marginBottom: props.route == ADD_REVIEW_SCREEN ? 10 : 0,
        backgroundColor: props.route == ADD_REVIEW_SCREEN ? "#fff" : null,
        padding: props.route == ADD_REVIEW_SCREEN ? 20 : 0,
        borderWidth: props.route == ADD_REVIEW_SCREEN ? 1 : 0,
        borderColor: props.route == ADD_REVIEW_SCREEN ? "#c4c4c4" : null,
        // borderRadius: props.route == ADD_REVIEW_SCREEN ? 25 : 0,
        borderBottomWidth: 0,
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100
      }}
    >
      <Image
        width={20}
        source={props.name}
        style={{
          width: props.route == ADD_REVIEW_SCREEN ? 40 : 20,
          height: props.route == ADD_REVIEW_SCREEN ? 40 : 20,
          tintColor: props.color,
          marginBottom: props.route == ADD_REVIEW_SCREEN ? 10 : 0
        }}
      />
    </View>
  );
}
export default IconComponent;
