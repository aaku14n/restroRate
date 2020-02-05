import React from "react";
import { View, Image, Text } from "react-native";
import profile from "../../../assets/profilePic.png";
import styles from "./css/ReviewComponentStyle";
import RatingComponent from "./RatingComponent";

function ReviewComponent(props) {
  return (
    <View style={styles.base}>
      <View style={styles.imgNameWrapper}>
        <View style={styles.nameWithoutTime}>
          <View style={styles.profileImg}>
            <Image
              style={styles.pic}
              source={
                props.pic
                  ? {
                      uri: props.pic
                    }
                  : profile
              }
            />
          </View>
          <View style={styles.nameRating}>
            <Text style={styles.name}>{props.restroName}</Text>
            {props.dishname ? (
              <Text style={styles.dishname}>{props.dishname}</Text>
            ) : null}
            {!props.rightAligned ? (
              <View>
                <RatingComponent size={15} rating={props.rating} />
              </View>
            ) : null}
          </View>
        </View>
        <View style={styles.timeDiv}>
          <Text style={styles.time}>{props.time}</Text>
          {props.rightAligned ? (
            <View>
              <RatingComponent size={15} rating={props.rating} />
            </View>
          ) : null}
        </View>
      </View>
      <View style={styles.reviewWrapper}>
        <Text style={styles.review}>{props.review}</Text>
      </View>
    </View>
  );
}

export default ReviewComponent;
