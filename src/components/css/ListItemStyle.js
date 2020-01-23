import { StyleSheet } from "react-native";
import { THEME_COLOR } from "../../Constant";
export default StyleSheet.create({
  base: {
    flexDirection: "row",
    marginBottom: 18
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 20
  },
  detailWrapper: {
    marginLeft: 15
  },
  restroName: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 20
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: THEME_COLOR,
    marginLeft: 50
  },
  namePriceWrapper: {
    flexDirection: "row"
  },
  discription: {
    color: "#999999",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 6
  },
  ratingStarImg: {
    width: "60%",
    height: 20
  },
  ratingWrapper: {
    marginTop: 10
  }
});
