import { StyleSheet } from "react-native";
export default StyleSheet.create({
  base: {
    width: "100%",
    flexDirection: "row"
  },
  subBase: { width: "50%", marginTop: "10px" },
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
  downIcon: { marginLeft: "10px", marginTop: "5px" },
  upIcon: {
    transform: [{ rotate: "180deg" }],
    marginLeft: "10px",
    marginTop: "5px"
  },
  profileImage: {
    width: "50%",
    alignItems: "flex-end",
    justifyContent: "flex-end"
  },
  image: {
    width: 70,
    height: 70
  }
});
