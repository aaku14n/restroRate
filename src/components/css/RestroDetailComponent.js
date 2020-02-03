import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { THEME_COLOR } from "../../Constant";
const screenWidth = Math.round(Dimensions.get("window").width);
export default StyleSheet.create({
  base: {
    width: "100%",
    backgroundColor: "white",
    paddingLeft: 10,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    zIndex: 2
  },
  imageWrapper: {
    padding: 10,
    paddingTop: 20
  },
  image: {
    width: screenWidth - 40,
    height: 250,
    borderRadius: 10
  },
  header: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 30,
    paddingLeft: 10,
    paddingRight: 10
  },
  icon: {
    width: 30,
    height: 30
  },
  infoWrapper: {
    marginTop: 10,
    padding: 10,
    paddingBottom: 0,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between"
  },
  textName: {
    fontSize: 20,
    fontWeight: "bold"
  },
  textDes: {
    fontSize: 16,
    color: "#c4c4c4",
    marginTop: 5
  },
  rateWrapper: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10
  },
  directionIcon: {
    width: 30,
    height: 30,
    transform: [{ rotate: "-45deg" }]
  },
  summary: {
    marginTop: 20,
    paddingLeft: 10,
    paddingRight: 10
  },
  summaryHeading: {
    fontSize: 20,
    fontWeight: "bold"
  },
  reviewHeading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20
  },
  tiniIcon: {
    width: 15,
    height: 15,
    marginRight: 10
  },
  row: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10
  },
  des: {
    fontSize: 14
  },
  dishesList: {
    marginTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    borderTopColor: "#c4c4c4",
    borderTopWidth: 2
  },
  listItemWrapper: {
    marginTop: 25
  },
  loader: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  go: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16
  },
  goIcon: {
    backgroundColor: THEME_COLOR,
    padding: 10,
    borderRadius: 25,
    height: 40,
    width: 40,
    display: "flex",
    justifyContent: "center"
  }
});
