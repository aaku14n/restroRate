import { StyleSheet } from "react-native";
export default StyleSheet.create({
  base: {
    width: "100%",
    marginTop: "25px"
  },
  foodImage: {
    width: "100%",
    height: 220,
    borderRadius: 15
  },
  detailSection: {
    marginTop: "25px"
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
  distanceWrapper: { width: "100%", flexDirection: "row", marginTop: "8px" },
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
