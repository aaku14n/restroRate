import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./css/ListItemStyle";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import RatingComponent from "./General/RatingComponent";
import thumbsUp from "../../assets/thumbs-up.png";

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
          {props.subHeading && (
            <Text style={styles.discription}>{props.subHeading}</Text>
          )}
          <View style={styles.ratingWrapper}>
            <View style={styles.stars}>
              <RatingComponent rating={props.rating} size={15} />
            </View>
            <Text style={styles.peoplesReview}>
              Based on {props.peoples} reviews
            </Text>
          </View>
          {props.message ? (
            <View style={styles.thumb}>
              <Image
                style={{ width: 15, height: 15, marginTop: 2 }}
                source={thumbsUp}
              />
              <Text style={styles.recomend}>{props.message}</Text>
            </View>
          ) : null}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
export default ListItemComponent;
