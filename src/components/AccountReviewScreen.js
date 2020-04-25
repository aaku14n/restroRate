import React from "react";
import styles from "./css/AccountStyle";
import {
  View,
  Text,
  Image,
  ScrollView,
  Alert,
  FlatList,
  RefreshControl
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { renderDateFormat } from "../utils/DateUtils";
import backArrow from "../../assets/back.png";
import ReviewContainer from "../containers/ReviewContainer";
function AccountReviewScreen(props) {
  const goBack = () => {
    props.navigation.goBack();
  };
  const getReviewList = props.navigation.getParam("reviewList");
  return (
    <View style={styles.reviewBase}>
      <View style={styles.reviews}>
        <View style={styles.header}>
          <View style={styles.iconWrapper}>
            <TouchableOpacity onPress={() => goBack()}>
              <Image style={styles.icon} source={backArrow} />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.headingWrapper}>MY REVIEWS</Text>
          </View>
        </View>
        <View style={styles.reviewComponentWrapper}>
          {getReviewList && getReviewList.length > 0 ? (
            <FlatList
              data={getReviewList}
              keyExtractor={item => item._id}
              renderItem={({ item }) => (
                <ReviewContainer
                  dishname={item.restaurantInfo.name}
                  restroName={item.dishInfo.name}
                  pic={item.dishInfo.dishImage}
                  review={item.feedback}
                  rating={item.rate}
                  time={renderDateFormat(item.createdAt)}
                  rightAligned={true}
                  showShare={true}
                  dishId={item.dishInfo._id}
                  restaurantId={item.restaurantInfo._id}
                />
              )}
            />
          ) : (
            <Text />
          )}
        </View>
      </View>
    </View>
  );
}

export default AccountReviewScreen;
