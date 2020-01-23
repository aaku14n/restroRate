import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./css/ListItemStyle";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import RatingComponent from "./General/RatingComponent";

function ListItemComponent(props) {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={styles.base}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={
              props.imgUri
                ? {
                    uri: props.imgUri
                  }
                : require("../../assets/defaultRestro.png")
            }
          />
        </View>
        <View style={styles.detailWrapper}>
          <View style={styles.namePriceWrapper}>
            <Text style={styles.restroName}>{props.name}</Text>
            {props.price ? (
              <Text style={styles.price}>{props.price}</Text>
            ) : (
              <Text />
            )}
          </View>
          <Text style={styles.discription}>Susi Bars, Japanese</Text>
          {props.rating ? (
            <View style={styles.ratingWrapper}>
              <View style={styles.stars}>
                <RatingComponent rating={props.rating} size={15} />
              </View>
              <Text style={styles.peoplesReview}>
                Based on {props.peoples} reviews
              </Text>
            </View>
          ) : (
            <Text style={styles.discription}>212 peoples recomended</Text>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
export default ListItemComponent;
