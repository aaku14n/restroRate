import { StyleSheet } from "react-native";
import { THEME_COLOR } from "../../Constant";

export default StyleSheet.create({
  base: {
    width: "100%",
    backgroundColor: "white",
    height: "100%",
    padding: 20,
    marginTop: 30
  },

  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  recommendationWrapper: {
    marginTop: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#c4c4c4"
  },
  card: {},
  dishImage: {
    width: "100%",
    borderRadius: 15,
    height: 250
  },
  userName: {
    fontSize: 16,

    marginBottom: 10
  },
  userNameBold: {
    fontWeight: "bold"
  },
  discription: {
    fontSize: 16,
    marginBottom: 10,
    color: "#c4c4c4"
  },
  emptyText: {
    marginTop: 40,
    textAlign: "center"
  },
  tabWrapper: {
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
    marginTop: 20
    // marginBottom: 20
  },
  byMeTab: {
    padding: 20,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#c4c4c4"
  },
  forMeTab: {
    padding: 20,
    backgroundColor: THEME_COLOR,
    borderColor: THEME_COLOR,
    borderWidth: 1
  },
  white: {
    color: "#fff"
  }
});
