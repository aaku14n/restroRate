import { StyleSheet } from "react-native";
export default StyleSheet.create({
  base: {
    width: "100%",
    position: "absolute",
    top: 0,
    flexDirection: "row",
    backgroundColor: "white",
    paddingLeft: 20,
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 10,
    zIndex: 2
    // boxShadow: " 0px 0 15px rgba(0, 0, 0, 0.8)"
  },
  subBase: { width: "50%", marginTop: 10 },
  locationTitle: {
    fontSize: 12,
    color: "grey"
  },
  location: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black"
  },
  icon: {
    width: 17,
    height: 17
  },
  iconTitleWrapper: {
    flexDirection: "row",
    marginTop: 5
  },
  downIcon: { marginLeft: 10, marginTop: 5 },
  upIcon: {
    transform: [{ rotate: "180deg" }],
    marginLeft: 10,
    marginTop: 5
  },
  profileImage: {
    width: "50%",
    alignItems: "flex-end",
    justifyContent: "flex-end"
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30
  }
});
