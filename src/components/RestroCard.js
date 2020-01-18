import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./css/RestroCardStyle";

function RestroCard(props) {
  return (
    <View style={styles.base}>
      <View style={styles.imgBox}>
        <Image style={styles.foodImage} source={props.imgUri} />
      </View>
      <View style={styles.detailSection}>
        <View style={styles.nameRatingWrapper}>
          <View style={styles.nameStrip}>
            <Text style={styles.name}>{props.name}</Text>
          </View>
          <View style={styles.ratingStrip}>
            <Image
              style={styles.ratingStarImg}
              source={require("../../assets/rating.jpg")}
            />
            {/* <Text style={styles.rating}>{props.reviews} Reviews</Text> */}
          </View>
        </View>
        <View style={styles.distanceWrapper}>
          <View style={styles.nameStrip}>
            <Text style={styles.rating}>{props.cusions}</Text>
          </View>
          <View style={styles.ratingStrip}>
            <Text style={styles.rating}>{props.distance} Km</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default RestroCard;
