import React from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "./css/RestroDetailComponent";
import RatingComponent from "./General/RatingComponent";
import ListItemComponent from "./ListItemComponent";
import ReviewComponent from "./General/ReviewComponent";
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
const TestJson = {
  data: [
    {
      id: "1",
      dishImage:
        "https://img.jakpost.net/c/2017/02/24/2017_02_24_22239_1487924367._large.jpg",

      name: "Susi",
      rating: 2,
      price: "$23.55",
      peoples: 200
    },
    {
      id: "2",

      dishImage:
        "https://c-lj.gnst.jp/public/article/detail/a/00/00/a0000370/img/basic/a0000370_main.jpg?20180116120327",

      name: "Indian",
      rating: 2.5,
      price: "$20.55",
      peoples: 200
    },
    {
      id: "3",

      dishImage:
        "https://res.cloudinary.com/sagacity/image/upload/c_crop,h_2000,w_3000,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/shutterstock_365954354_nghgkk.jpg",

      name: "Chiense",
      rating: 3.5,
      price: "$23.55",
      peoples: 200
    }
  ]
};
export default class RestroDetailsComponent extends React.Component {
  goBack = () => {
    this.props.navigation.goBack();
  };
  componentDidMount() {
    const restroId = this.props.navigation.getParam("restroId");
    console.log(restroId);
    this.props.restroDetails(restroId);
  }
  share = () => {};
  render() {
    const details = restroDetails;
    console.log(this.props.getRestroDetails);
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
            <RatingComponent
              rating={details.ratings}
              size={15}
              marginRight={2}
            />
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
          <ScrollView style={styles.listItemWrapper}>
            {TestJson.data.map((recent, id) => {
              return (
                <ListItemComponent
                  key={id}
                  imgUri={recent.dishImage}
                  name={recent.name}
                  price={recent.price}
                />
              );
            })}
          </ScrollView>
        </View>
        <View>
          <Text style={styles.reviewHeading}>Reviews</Text>
          <ReviewComponent
            restroName={"Indian Somu Da"}
            pic={
              "https://img.jakpost.net/c/2017/02/24/2017_02_24_22239_1487924367._large.jpg"
            }
            review={
              " ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with d"
            }
            rating={3.5}
            time={"2 days ago"}
          />
        </View>
      </ScrollView>
    );
  }
}
