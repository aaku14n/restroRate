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
    borderWidth: 1,
    borderColor: "#c4c4c4",
    borderRadius: 15,

    position: "relative"
  },
  card: {
    marginTop: 5,
    padding: 10
  },
  dishImage: {
    width: "100%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
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
    marginTop: 20,
    marginBottom: 10
  },
  byMeTab: {
    padding: 15,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#c4c4c4",
    width: "50%",
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center"
  },
  forMeTab: {
    padding: 15,
    backgroundColor: THEME_COLOR,
    borderColor: THEME_COLOR,
    borderWidth: 1,
    width: "50%",
    textAlign: "center",
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center"
  },
  white: {
    color: "#fff"
  },
  row: {
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "space-between"
  },
  textWrapper: {
    width: "70%"
  },
  timeAgo: {
    fontSize: 14,
    color: "#c4c4c4"
  },
  rating: {
    position: "absolute",
    padding: 10,
    zIndex: 5,
    top: 210,
    right: 0,
    backgroundColor: "rgba(0,0,0, 0.6)",
    width: "100%",
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "flex-end"

    // borderTopLeftRadius: 15,
    // borderTopRightRadius: 15
  }
});
