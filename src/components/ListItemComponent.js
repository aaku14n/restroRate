import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./css/ListItemStyle";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function ListItemComponent(props) {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={styles.base}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={{
              uri: props.imgUri
            }}
          />
        </View>
        <View style={styles.detailWrapper}>
          <View style={styles.namePriceWrapper}>
            <Text style={styles.restroName}>{props.name}</Text>
            <Text style={styles.price}>$24.00</Text>
          </View>
          <Text style={styles.discription}>Susi Bars, Japanese</Text>
          <View style={styles.ratingWrapper}>
            <View>
              <Image
                style={styles.ratingStarImg}
                source={require("../../assets/rating.jpg")}
              />
            </View>
          </View>
          <Text style={styles.discription}>212 peoples recomended</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
export default ListItemComponent;
