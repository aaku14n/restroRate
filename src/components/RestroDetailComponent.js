import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./css/RestroDetailComponent";
const restroDetails = {
  id: "1",
  restaurantName: "Sanraku , Hong Cong",
  restaurantImage:
    "https://c8.alamy.com/comp/BDE787/dummy-or-manikin-holding-a-menu-outside-the-village-restaurant-in-BDE787.jpg",
  dishName: "Japanese, Sushi Bars, Asian Fusion",
  dishImage:
    "https://img.jakpost.net/c/2017/02/24/2017_02_24_22239_1487924367._large.jpg",
  ratings: 4.5,
  distance: 0.4,
  totalReviews: 132,
  cost: 500,
  address: "392, 7th Cross"
};
export default class RestroDetailsComponent extends React.Component {
  goBack = () => {
    this.props.navigation.goBack();
  };
  share = () => {};
  render() {
    const details = restroDetails;

    return (
      <View style={styles.base}>
        <View style={styles.header}>
          <TouchableOpacity onPress={this.goBack}>
            <Image
              style={styles.icon}
              source={require("../../assets/back.png")}
            />
          </TouchableOpacity>
          <Image
            style={styles.icon}
            source={require("../../assets/share.png")}
          />
        </View>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={
              details.restaurantImage
                ? { uri: details.dishImage }
                : require("../../assets/profile.png")
            }
          />
        </View>
        <View style={styles.infoWrapper}>
          <View style={styles.details}>
            <Text style={styles.textName}>{details.restaurantName}</Text>
            <Text style={styles.textDes}>{details.address}</Text>
          </View>
          <View style={styles.callIcon}>
            <Image
              style={styles.icon}
              source={require("../../assets/call.png")}
            />
          </View>
        </View>
        <View style={styles.rateWrapper}>
          <View style={styles.details}>
            <Text style={styles.textDes}>Based on 12,999 reviews</Text>
          </View>
          <View style={styles.callIcon}>
            <Image
              style={styles.directionIcon}
              source={require("../../assets/cursor.png")}
            />
          </View>
        </View>

        <View style={styles.summary}>
          <Text style={styles.summaryHeading}>Summary</Text>
          <View style={styles.row}>
            <Image
              style={styles.tiniIcon}
              source={require("../../assets/call.png")}
            />
            <Text style={styles.des}>Garago Streen, Pvt park</Text>
          </View>
          <View style={styles.row}>
            <Image
              style={styles.tiniIcon}
              source={require("../../assets/call.png")}
            />
            <Text style={styles.des}>24 X 7</Text>
          </View>
          <View style={styles.row}>
            <Image
              style={styles.tiniIcon}
              source={require("../../assets/call.png")}
            />
            <Text style={styles.des}>Veg & Non veg</Text>
          </View>
          <View style={styles.row}>
            <Image
              style={styles.tiniIcon}
              source={require("../../assets/call.png")}
            />
            <Text style={styles.des}>CC/DC UPI,Phonepe, Bhim</Text>
          </View>
        </View>

        <View style={styles.dishesList}>
          <Text style={styles.summaryHeading}>Popular Dishes</Text>
        </View>
      </View>
    );
  }
}
