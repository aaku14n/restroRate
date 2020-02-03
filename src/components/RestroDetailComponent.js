import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Share,
  Platform
} from "react-native";
import styles from "./css/RestroDetailComponent";
import RatingComponent from "./General/RatingComponent";
import ListItemComponent from "./ListItemComponent";
import ReviewComponent from "./General/ReviewComponent";
import { getRestaurantsUrl } from "../utils/Utils";
import { renderDateFormat } from "../utils/DateUtils";

import { Linking } from "expo";

export default class RestroDetailsComponent extends React.Component {
  goBack = () => {
    this.props.navigation.goBack();
  };
  componentDidMount() {
    const restroId = this.props.navigation.getParam("restroId");
    this.props.restroDetails(restroId);
  }
  onShare = async () => {
    try {
      const details = this.props && this.props.getRestroDetails;
      console.log(details);
      const result = await Share.share({
        message: `${details.name} | ${details.fullAddress}`,
        url: "map://app"
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  goToLocation = () => {
    const details = this.props && this.props.getRestroDetails;

    const lat = details.latitude;
    const lng = details.longitude;

    const scheme = Platform.select({
      ios: "maps:0,0?q=",
      android: "geo:0,0?q="
    });
    const latLng = `${lat},${lng}`;
    const label = details.name;
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`
    });

    Linking.openURL(url);
  };
  render() {
    if (this.props.getRestroDetailLoading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#c4c4c4" />
        </View>
      );
    }
    const details = this.props && this.props.getRestroDetails;
    return (
      <ScrollView style={styles.base} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity onPress={this.goBack}>
            <Image
              style={styles.icon}
              source={require("../../assets/back.png")}
            />
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={this.onShare}>
            <Image
              style={styles.icon}
              source={require("../../assets/share.png")}
            />
          </TouchableOpacity> */}
        </View>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={
              details.restaurantImage
                ? { uri: getRestaurantsUrl(details.restaurantImage) }
                : require("../../assets/defaultRestro.png")
            }
          />
        </View>
        <View style={styles.infoWrapper}>
          <View style={styles.details}>
            <Text style={styles.textName}>{details.name}</Text>
            <Text style={styles.textDes}>{details.fullAddress}</Text>
          </View>
          {/* <View style={styles.callIcon}>
            <Image
              style={styles.icon}
              source={require("../../assets/call.png")}
            />
          </View> */}
        </View>
        <View style={styles.rateWrapper}>
          <View style={styles.details}>
            <RatingComponent
              rating={details.averageRating}
              size={15}
              marginRight={2}
            />
            <Text style={styles.textDes}>
              Based on {details.totalReviews} reviews
            </Text>
          </View>
          <TouchableOpacity onPress={this.goToLocation}>
            <View style={styles.goIcon}>
              <Text style={styles.go}>GO</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* <View style={styles.summary}>
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
        </View> */}

        <View style={styles.dishesList}>
          <Text style={styles.summaryHeading}>Popular Dishes</Text>
          <ScrollView style={styles.listItemWrapper}>
            {details && details.dishes && details.dishes.map
              ? details.dishes.map((recent, id) => {
                  return (
                    <ListItemComponent
                      key={id}
                      imgUri={recent.dishImage}
                      name={recent.name}
                      price={recent.price}
                      rating={recent.averageRating}
                      peoples={recent.totalReviews}
                    />
                  );
                })
              : null}
          </ScrollView>
        </View>
        <View>
          <Text style={styles.reviewHeading}>Reviews</Text>
          {details && details.reviews && details.reviews.map
            ? details.reviews.map((recent, id) => {
                return (
                  <ReviewComponent
                    key={id}
                    restroName={recent.dishInfo.name}
                    pic={recent.dishInfo.dishImage}
                    review={recent.feedback}
                    rating={recent.rate}
                    time={renderDateFormat(recent.createdAt)}
                  />
                );
              })
            : null}
        </View>
      </ScrollView>
    );
  }
}
