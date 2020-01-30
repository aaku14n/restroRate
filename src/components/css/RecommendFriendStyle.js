import { StyleSheet } from "react-native";
import { THEME_COLOR } from "../../Constant";

export default StyleSheet.create({
  base: {
    width: "100%",
    backgroundColor: "white",
    height: "100%",
    padding: 20
  },

  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  recommendationWrapper: {
    marginTop: 20
  },
  card: {},
  dishImage: {
    width: 450,
    height: 250
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10
  },
  discription: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#c4c4c4"
  }
});
