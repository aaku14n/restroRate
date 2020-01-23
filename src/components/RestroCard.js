import React from "react";
import { Text, View, Image, TouchableWithoutFeedback } from "react-native";
import styles from "./css/RestroCardStyle";

function RestroCard(props) {
  return (
    <TouchableWithoutFeedback
      style={styles.wrapper}
      onPress={() => props.onPress()}
    >
      <View style={styles.base}>
        <View style={styles.imgBox}>
          <Image
            style={styles.foodImage}
            source={
              props.imgUri && props.imgUri.includes("http")
                ? { uri: props.imgUri }
                : require("../../assets/placeholderRestro.jpg")
            }
          />
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
            {props.distance && (
              <View style={styles.ratingStrip}>
                <Text style={styles.rating}>{props.distance} Km</Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default RestroCard;
