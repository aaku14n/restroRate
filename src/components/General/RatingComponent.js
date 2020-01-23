import React, { useState } from "react";
import { Text, View, Image, TouchableHighlight } from "react-native";
import fullStar from "../../../assets/fullStar.png";
import emptyStart from "../../../assets/emptyStar.png";
import halfStar from "../../../assets/halfStar.png";
import styles from "./css/RatingStyle";

function RatingComponent(props) {
  let rating = [];
  if (props.rating < 1) {
    rating.push({
      url: halfStar
    });
    rating.push({
      url: emptyStart
    });
    rating.push({
      url: emptyStart
    });
    rating.push({
      url: emptyStart
    });
    rating.push({
      url: emptyStart
    });
  } else if (props.rating == 1) {
    rating.push({
      url: fullStar
    });
    rating.push({
      url: emptyStart
    });
    rating.push({
      url: emptyStart
    });
    rating.push({
      url: emptyStart
    });
    rating.push({
      url: emptyStart
    });
  } else if (props.rating > 1 && props.rating < 1.6) {
    rating.push({
      url: fullStar
    });
    rating.push({
      url: halfStar
    });
    rating.push({
      url: emptyStart
    });
    rating.push({
      url: emptyStart
    });
    rating.push({
      url: emptyStart
    });
  } else if (props.rating > 1.6 && props.rating <= 2) {
    rating.push({
      url: fullStar
    });
    rating.push({
      url: fullStar
    });
    rating.push({
      url: emptyStart
    });
    rating.push({
      url: emptyStart
    });
    rating.push({
      url: emptyStart
    });
  } else if (props.rating > 2 && props.rating < 2.6) {
    rating.push({
      url: fullStar
    });
    rating.push({
      url: fullStar
    });
    rating.push({
      url: halfStar
    });
    rating.push({
      url: emptyStart
    });
    rating.push({
      url: emptyStart
    });
  } else if (props.rating > 2.6 && props.rating == 3) {
    rating.push({
      url: fullStar
    });
    rating.push({
      url: fullStar
    });
    rating.push({
      url: fullStar
    });
    rating.push({
      url: emptyStart
    });
    rating.push({
      url: emptyStart
    });
  } else if (props.rating > 3 && props.rating < 3.6) {
    rating.push({
      url: fullStar
    });
    rating.push({
      url: fullStar
    });
    rating.push({
      url: fullStar
    });
    rating.push({
      url: halfStar
    });
    rating.push({
      url: emptyStart
    });
  } else if (props.rating > 3.6 && props.rating == 4) {
    rating.push({
      url: fullStar
    });
    rating.push({
      url: fullStar
    });
    rating.push({
      url: fullStar
    });
    rating.push({
      url: fullStar
    });
    rating.push({
      url: emptyStart
    });
  } else if (props.rating > 4 && props.rating < 4.6) {
    rating.push({
      url: fullStar
    });
    rating.push({
      url: fullStar
    });
    rating.push({
      url: fullStar
    });
    rating.push({
      url: fullStar
    });
    rating.push({
      url: halfStar
    });
  } else if (props.rating > 4.6 && props.rating == 5) {
    rating.push({
      url: fullStar
    });
    rating.push({
      url: fullStar
    });
    rating.push({
      url: fullStar
    });
    rating.push({
      url: fullStar
    });
    rating.push({
      url: fullStar
    });
  }

  return (
    <View style={styles.base}>
      {rating.map((rate, id) => {
        return (
          <Image
            key={id}
            style={{ width: props.size, height: props.size }}
            source={rate.url}
          />
        );
      })}
    </View>
  );
}

export default RatingComponent;
