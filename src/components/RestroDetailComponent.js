import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator
} from "react-native";
import styles from "./css/RestroDetailComponent";
import RatingComponent from "./General/RatingComponent";
import ListItemComponent from "./ListItemComponent";
import ReviewComponent from "./General/ReviewComponent";
import { getRestaurantsUrl } from "../utils/Utils";
import { renderDateFormat } from "../utils/DateUtils";
const restroDetails = {
  _id: "5e2d44d2ad77bb70d0fa177a",
  name: "Sagar Fast Food",
  fullAddress: "sd",
  restaurantImage:
    "https://maps.googleapis.com/maps/api/place/photo?photoreference=CmRaAAAA6rlCAGUO4mZb7MD99BIjs-jVis2JQGSmPPX9VpAMnpqdo_U49t8XrIz9GH6sjBw--8t--yDTmXinEy1HscNe6hzW7Na7fgqFqPFul5_lNu4OjbzOxLDesClfDn9LSMaJEhAivupkiMIDKIVpHgH2p-MyGhTnePULPu8FFu3JjumiBYgaX3VOsQ&maxwidth=UPDATE_IMAGE_WIDTH&maxheight=UPDATE_IMAGE_HEIGHT&key=UPDATE_GOOGLE_API_KEY",
  latitude: "12.917437",
  longitude: "77.61244429999999",
  createdAt: "2020-01-26T07:50:42.582Z",
  dishes: [
    {
      _id: "5e2d44d2ad77bb70d0fa177b",
      name: "Idli Bada",
      dishImage: "http://www.littra.in:4200/storage/image-1580024008643.jpeg",
      createdAt: "2020-01-26T07:50:42.584Z",
      totalReviews: 1,
      averageRating: 4
    }
  ],
  reviews: [
    {
      dishId: "5e2d44d2ad77bb70d0fa177b",
      feedback: "It’s awesome dish.. you must try come here and try ...",
      rate: "4",
      createdAt: "2020-01-26T07:50:42.586Z",
      dishInfo: {
        _id: "5e2d44d2ad77bb70d0fa177b",
        name: "Idli Bada",
        dishImage: "http://www.littra.in:4200/storage/image-1580024008643.jpeg"
      }
    }
  ],
  totalReviews: 1,
  averageRating: 4
};

export default class RestroDetailsComponent extends React.Component {
  goBack = () => {
    this.props.navigation.goBack();
  };
  componentDidMount() {
    const restroId = this.props.navigation.getParam("restroId");
    this.props.restroDetails(restroId);
  }
  share = () => {};
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
                ? { uri: getRestaurantsUrl(details.restaurantImage) }
                : require("../../assets/profile.png")
            }
          />
        </View>
        <View style={styles.infoWrapper}>
          <View style={styles.details}>
            <Text style={styles.textName}>{details.name}</Text>
            <Text style={styles.textDes}>{details.fullAddress}</Text>
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
            <RatingComponent
              rating={details.averageRating}
              size={15}
              marginRight={2}
            />
            <Text style={styles.textDes}>
              Based on {details.totalReviews} reviews
            </Text>
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
