import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const screenWidth = Math.round(Dimensions.get("window").width);
console.log(screenWidth);
export default StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff"
  },
  base: {
    width: "100%",
    marginTop: 25
  },
  foodImage: {
    width: "100%",
    height: screenWidth > 500 ? 500 : screenWidth - 100,
    borderRadius: 15
  },
  detailSection: {
    marginTop: 25
  },
  nameRatingWrapper: {
    width: "100%",
    flexDirection: "row"
  },
  nameStrip: { width: "50%" },
  ratingStrip: {
    width: "50%",
    alignItems: "flex-end",
    justifyContent: "flex-end"
  },
  distanceWrapper: { width: "100%", flexDirection: "row", marginTop: 8 },
  name: {
    fontSize: 18,
    fontWeight: "500"
  },
  rating: {
    fontSize: 12,
    color: "grey"
  },
  ratingStarImg: {
    width: "60%",
    height: 20
  }
});
