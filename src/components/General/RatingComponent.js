import React from "react";
import { View, Image } from "react-native";
import fullStar from "../../../assets/fullStar.png";
import emptyStart from "../../../assets/emptyStar.png";
import halfStar from "../../../assets/halfStar.png";
import styles from "./css/RatingStyle";

function RatingComponent(props) {
  return (
    <View style={styles.base}>
      {[1, 2, 3, 4, 5].map((rate, item) => {
        let icon = emptyStart;
        if (rate < props.rating) {
          icon = fullStar;
        } else if (rate - 1 < props.rating && rate > props.rating) {
          icon = halfStar;
        }
        return (
          <Image
            key={item}
            style={{ width: props.size, height: props.size }}
            source={icon}
          />
        );
      })}
    </View>
  );
}

export default RatingComponent;
