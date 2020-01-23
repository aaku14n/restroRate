import { StyleSheet } from "react-native";
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
    height: 220,
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
